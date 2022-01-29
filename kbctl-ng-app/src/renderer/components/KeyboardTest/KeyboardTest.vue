<template>
  <div>
    <h2 class="title">keyboard Test</h2>
    <div class="keyboard">
      <div class="kbdWrap">
        <div class="kbdmain">
          <ul>
            <li class="">Esc</li>
            <li class="ml5">F1</li>
            <li class="">F2</li>
            <li class="">F3</li>
            <li class="">F4</li>
            <li class="ml5">F5</li>
            <li class="">F6</li>
            <li class="">F7</li>
            <li class="">F8</li>
            <li class="ml5">F9</li>
            <li class="">F10</li>
            <li class="">F11</li>
            <li class="clicked">F12</li>
          </ul>
          <div class="clear"></div>
          <ul class="mt3">
            <li class="">`</li>
            <li class="">1</li>
            <li class="">2</li>
            <li class="">3</li>
            <li class="">4</li>
            <li class="">5</li>
            <li class="">6</li>
            <li class="">7</li>
            <li class="">8</li>
            <li class="">9</li>
            <li class="">0</li>
            <li class="">-</li>
            <li class="">=</li>
            <li class="k201">←</li>
            <li class="k150">Tab</li>
            <li class="">Q</li>
            <li class="">W</li>
            <li class="">E</li>
            <li class="">R</li>
            <li class="">T</li>
            <li class="">Y</li>
            <li class="">U</li>
            <li class="">I</li>
            <li class="">O</li>
            <li class="">P</li>
            <li class="">[</li>
            <li class="">]</li>
            <li class="k150">\</li>
            <li class="k175">Caps Lock</li>
            <li class="">A</li>
            <li class="">S</li>
            <li class="">D</li>
            <li class="">F</li>
            <li class="">G</li>
            <li class="">H</li>
            <li class="">J</li>
            <li class="">K</li>
            <li class="">L</li>
            <li class="">;</li>
            <li class="">'</li>
            <li class="k225">Enter</li>
            <li class="k225">Shift</li>
            <li class="">Z</li>
            <li class="">X</li>
            <li class="">C</li>
            <li class="">V</li>
            <li class="">B</li>
            <li class="">N</li>
            <li class="">M</li>
            <li class="">,</li>
            <li class="">.</li>
            <li class="">/</li>
            <li class="k275">Shift</li>
            <li class="k125">Ctrl</li>
            <li class="k125">Win</li>
            <li class="k125">Alt</li>
            <li class="space"></li>
            <li class="k125">Alt</li>
            <li class="k125">Fn</li>
            <li class="k125">Menu</li>
            <li class="k125">Ctrl</li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="kbdpos">
          <ul>
            <li class="">PrtSc</li>
            <li class="">ScrLk</li>
            <li class="">Pause</li>
          </ul>
          <div class="clear"></div>
          <ul class="mt3">
            <li class="">Ins</li>
            <li class="">Home</li>
            <li class="">PgUp</li>
            <li class="">Del</li>
            <li class="">End</li>
            <li class="">PgDn</li>
            <li class="none"></li>
            <li class="none"></li>
            <li class="none"></li>
            <li class="none"></li>
            <li class="">↑</li>
            <li class="none"></li>
            <li class="">←</li>
            <li class="">↓</li>
            <li class="">→</li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="kbdnum">
          <div class="hexcore">HEXCORE</div>
          <div class="clear"></div>
          <ul class="mt3">
            <li class="">NumLk</li>
            <li class="">/</li>
            <li class="">*</li>
            <li class="numpad-subtract">-</li>
            <li class="">7</li>
            <li class="">8</li>
            <li class="">9</li>
            <li class="k002">+</li>
            <li class="">4</li>
            <li class="">5</li>
            <li class="">6</li>
            <li class="">1</li>
            <li class="">2</li>
            <li class="">3</li>
            <li class="k002">Enter</li>
            <li class="k200">0</li>
            <li class="">.</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="keylog">
        <div class="my-5 flex justify-between">
          <span class="keylog_keycap__Lhbyp">F12</span
          ><span class="w-40 h-30 text-20">⤓</span
          ><span class="pt-5 h-30 opacity-60">23:34:4:421</span>
        </div>
        <div class="my-5 flex justify-between">
          <span class="keylog_keycap__Lhbyp">F12</span
          ><span class="w-40 h-30 text-20">⤻</span
          ><span class="pt-5 h-30 opacity-60">23:34:4:507</span>
        </div>
      </div>
      <div class="dataarea">
        <div class="dataa">
          <div class="dataleft">
            <div class="datatitle">NKRO</div>
            <p class="mt-5 text-20">1</p>
          </div>
          <div class="datamid">
            <div class="datatitle">APM.MAX</div>
            <p class="mt-5 text-20">0</p>
          </div>
          <div class="datamid">
            <div class="datatitle">回报率<!-- -->(ms)</div>
            <p class="mt-5 text-20">85</p>
          </div>
          <div class="dataright">
            <div class="datatitle">单按键速率<!-- -->(ms)</div>
            <p class="mt-5 text-20">86</p>
          </div>
        </div>
      </div>
      <div class="reset">RESET</div>
      <div class="flex flex-col text-left">
        <div class="text-white text-14 mt-10 ml-15 opacity-50">
          <span class="font-semibold">NKRO</span>: n key rollover
          的缩写，用来描述一个键盘支持的同时被按下的按键的数量
        </div>
        <div class="text-white text-14 mt-10 ml-15 opacity-50">
          <span class="font-semibold">APM.MAX</span>:
          每分钟有效操作键盘次数的最大值
        </div>
        <div class="text-white text-14 mt-10 ml-15 opacity-50">
          <span class="font-semibold">回报率</span>:
          键盘与主机（电脑）的最小响应间隔
        </div>
        <div class="text-white text-14 mt-10 ml-15 opacity-50">
          <span class="font-semibold">单按键速率</span>:
          同一颗按键按下与抬起的最小时间间隔
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      electron: process.versions.electron,
    };
  },
};
</script>

<style scoped>
* {
    background-color: rgb(42, 43, 46);
}
h2 {
  text-align: center;
  color: white;
  margin: auto;
}

.kbdWrap {
    border-radius: 10px;
    border: 1px solid;
    display: inline-block;
    font-size: 12px;
    margin: auto;
    overflow: hidden;
    padding: 16px 10px;
    width: 1212px;
}
.kbdmain, .kbdpos {
    display: inline-block;
    width: 800px;
}
ul {
    display: block;
    list-style-type: disc;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    --tw-bg-opacity: 1;
    --tw-border-opacity: 1;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    float: left;
    height: 50px;
    line-height: 50px;
    margin-top: 2px;
    margin-left: 2px;
    text-align: center;
    --tw-text-opacity: 1;
    color: rgb(255,255,255);
    width: 50px;
}
</style>
