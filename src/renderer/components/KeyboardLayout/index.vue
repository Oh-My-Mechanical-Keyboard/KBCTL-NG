<template>
  <div class="keyboard-layout">
    <h2 class="keyboard-name"> keyboard </h2>
    <div class="keyboard">
      <div class="keyboard-wrap">
        <div class="keyboard-keys" :style="{ width: `${layout.w * unit}px`, height: `${layout.h * unit}px` }">
          <div
            v-for="(key, i) in layout.keys"
            :key="`${i}`"
            :class="['key', { active: Math.random() > 0.85 }]"
            :style="{
              left: `${key.x * unit + 2}px`,
              top: `${key.y * unit + 2}px`,
              width: `${key.w * unit - 4}px`,
              height: `${key.h * unit - 4}px`,
              '--x2': key.extra && `${key.x2 * unit}px`,
              '--y2': key.extra && `${key.y2 * unit}px`,
              '--w2': key.extra && `${key.w2 * unit - 4}px`,
              '--h2': key.extra && `${key.h2 * unit - 4}px`,
            }"
            :data-extra="key.extra"
          >
            <span v-for="label in key.code" class="label">{{ label }}</span>
          </div>
        </div>
      </div>
      <button
        id="import"
        @click="importKeymap"
      >
      upload
      </button>
      <input
        id="fileImport"
        type="file"
        ref="fileImportElement"
        accept="json"
        @change="fileImportChanged"
      ></input>
    </div>
  <div class="keycodes">
    <keycode-bar></keycode-bar>
  </div>
  </div>
</template>

<script>
import kleAnsi108 from './kle-jsons/default/ansi108.json'
// import kleAnsi108 from './kle-jsons/z65ble/info-via.json'
import { formatKleJson } from '#/controller/kle-parse'
import KeycodeBar from '../KeycodeBar/index.vue'

export default {
  name: 'keyboardLayout',
  components: {
    KeycodeBar
  },
  data () {
    return {
      unit: 50,
      activeLayout: 'ansi108'
    }
  },
  computed: {
    layout () {
      return formatKleJson(kleAnsi108)
    }
  },
  methods: {
    switchLayout (val) {
      if (val !== this.activeLayout) {
        this.activeLayout = val
      }
    },
    importKeymap () {
      this.$refs.fileImportElement.click()
    },
    fileImportChanged () {
      console.log('import file')
      var files = this.$refs.fileImportElement.files
      console.log(files)
      this.reader = new FileReader()
      this.reader.onload = this.importJSONOnLoad
      if (files.length >= 1) {
        this.reader.readAsText(files[0])
      } else {
        // set to the default layout which can not beed edited
        this.$refs.fileImportElement.value = ''
      }
    },
    async importJSONOnLoad () {
      try {
        const data = JSON.parse(this.reader.result)
        await this.loadJsonData(data)
      } catch (error) {
        console.log(error)
        alert('errors.invalidQMKKeymap')
      }
    },
    async loadJsonData (data) {
      if (data.version && data.keyboard && data.keyboard.settings) {
        alert('errors.kbfirmwareJSONUnsupported')
        return
      }

      if (checkInvalidKeymap(data)) {
        alert('errors.unknownJSON')
        return
      }

      /* TODO Add check for keyboard name and layout */

      if (!isUndefined(data.author)) {
        const { author, notes } = data
        this.setAuthor(author)
        this.setNotes(notes)
      }

      // remap old json files to new mappings if they need it
      data = Object.assign(
        data,
        this.remapKeyboard(data.keyboard, data.layout)
      )

      this.setKeyboard(data.keyboard)
      try {
        await this.changeKeyboard(this.keyboard)
        this.setLayout(data.layout)
        // todo validate these values
        await this.$router
          .replace({
            path: `/${data.keyboard}/${data.layout}`
          })
          .catch((err) => {
            if (err.name !== 'NavigationDuplicated') {
              // ignore nav errors
              console.error(err)
            }
          })

        var store = this.$store
        let promise = await new Promise((resolve) =>
          this.setLoadingKeymapPromise(resolve)
        )
        const stats = await this.load_converted_keymap(data.layers)
        let msg = this.$t('statsTemplate', stats)
        if (stats.warnings.length > 0 || stats.errors.length > 0) {
          msg = `${msg}\n${stats.warnings.join('\n')}`
          msg = `${msg}\n${stats.errors.join('\n')}`
        }
        this.deferredMessage(msg)
        this.viewReadme(this.keyboard).then(() => {
          let keymapName = data.keymap
          if (keymapName.endsWith('.json')) {
            keymapName = keymapName.replace(/.json$/, '')
          }
          this.setKeymapName(keymapName)
          this.setDirty()
        })
        disableOtherButtons()
      } catch (err) {
        console.log('Unexpected error', err)
      }
    }
  }
}
</script>

<style scoped>
.keyboard-layout {
  background-color: #333;
  padding: 20px;
}
.keyboard-name {
  text-align: center;
  color: #fff;
  margin: auto;
}

.keyboard-wrap {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 7px;
  display: inline-block;
  background-color: #111;
}
.keyboard-keys {
  font-size: 12px;
  overflow: hidden;
  position: relative;
}
.key {
  position: absolute;
  z-index: 10;
  border-radius: 7px;
  background-color: #333;
  color: #fff;
  text-align: center;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.key[data-extra]:after {
  content: '';
  position: absolute;
  top: var(--y2);
  left: var(--x2);
  width: var(--w2);
  height: var(--h2);
  z-index: -5;
  display: block;
  border-radius: 7px;
  background-color: #333;
  box-sizing: border-box;
}
.key.active, .key.active[data-extra]:after {
  background-color: #aaa;
  color: #333;
}
.label {
  /* height: 16px; */
  line-height: 16px;
  display: block;
  min-width: 1px;
  min-height: 16px;
}
</style>
