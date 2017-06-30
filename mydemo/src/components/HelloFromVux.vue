<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
    <div style="padding:15px; margin-top:30px;">
      <button-tab>
        <button-tab-item>今天</button-tab-item>
        <button-tab-item selected>本周</button-tab-item>
        <button-tab-item ><span class="vux-reddot-s">本月</span></button-tab-item>
      </button-tab>
    </div>
    <divider>分割线</divider>
    <group>
      <calendar v-model="demo1" :title="'一般使用'" disable-past></calendar>
    </group>
    <group>
       <calendar v-model="demo2" :title="'设置今天的时间'" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo3" :title="'禁止选择未来时间'" disable-future></calendar>
    </group>
    <divider style="margin-top:30px;">微信表情分割线</divider>
    <div v-for="item in list" class="vux-center">
      <emotion>{{item}}</emotion>
      <emotion is-gif>{{item}}</emotion>
    </div>
    <br>
    <divider>水平布局</divider>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">2</div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">3</div>
      </flexbox-item>
    </flexbox>
    <divider>垂直布局</divider>
    <flexbox orient="vertical">
      <flexbox-item>
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">2</div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">3</div>
      </flexbox-item>

    </flexbox>
    <divider>嵌套布局</divider>
    <flexbox style="height:200px;border:1px solid red;" class="vux-1px-tb vux-1px-l vux-1px-r">
      <flexbox-item class="vux-1px-r" style="height:200px;"></flexbox-item>
      <flexbox-item>
        <flexbox orient="vertical">
          <flexbox-item class="vux-1px-b"></flexbox-item>
          <flexbox-item style="height:100px;" >
            <flexbox style="border:1px solid red;">
              <flexbox-item class="vux-1px-r">1</flexbox-item>
              <flexbox-item >2</flexbox-item>
            </flexbox>
          </flexbox-item>

        </flexbox>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell, ButtonTab, ButtonTabItem, Divider, Calendar, WechatEmotion as Emotion } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    ButtonTab,
    ButtonTabItem,
    Divider,
    Calendar,
    Emotion
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY',
      list: ['微笑', '瘪嘴', '色', '发呆']
    }
  }
}
</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.flex-demo{
  text-align: center;
  color:#000;
  border:2px solid #0077ff;
  margin-bottom:16px;
  border-radius:6px;
  -webkit-background-clip: content-box;

}
</style>
