<template>
  <div class="keycode-bar">
    <p>keycode</p>
    <div id="keycodes">
      <div class="tabs">
        <span
          class="tab"
          :class="classes(index)"
          v-for="(key, index) in keycodesByGroup"
          :key="index"
          @click="changeActive(index)"
          :title="$t('keycodesTab.' + index + '.label')"
          >{{ $t("keycodesTab." + index + ".label")
          }}<span v-if="searchFilter !== ''"
            >({{ searchCounters[index] }})</span
          ></span
        >
        <span class="end-tab"
          ><font-awesome-icon class="keycode-search-icon" icon="search" /><input
            @focus="stopListening"
            @blur="startListening"
            type="text"
            :placeholder="$t('searchKeycodes')"
            v-model="searchFilter_"
            autocomplete="off"
            spellcheck="false"
        /></span>
      </div>
      <div class="tab-area">
        <template v-for="(key, index) in activeTab">
          <component
            v-bind:is="getComponent(key.code)"
            v-bind="key"
            :key="index"
            :class="filterClass(key)"
            @mouseenter="message(key)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keycodeBar",
};
</script>

<style scoped>
</style>
