<template>
  <div>
    <x-header :left-options="{showBack: false}" class="header"> <h1 style="color:black;margin:0;">第一现场</h1> </x-header>
    <scroller lock-x 
              scrollbar-y 
              use-pulldown
              bounce 
              @pulldown:loading="load" 
              height='-126' 
              @on-scroll="onScroll"
              ref="scrollerEvent">
       <div class="box2">
          <swiper :list="list" direction="horizontal"  auto :min-moving-distance="20" height="180px"></swiper>
       </div>
       <group>
        <cell is-link title="紧急现场" link='/'></cell>
        <flexbox style="padding:15px; width:auto;">
          <flexbox-item class="flex-demo">
            <img src="https://static.vux.li/demo/3.jpg" alt="">
            <span style="font-size:10px;">2016为爱走一夜</span>
          </flexbox-item>
          <flexbox-item class="flex-demo">
            <img src="https://static.vux.li/demo/2.jpg" alt="">
            <span style="font-size:10px;">2016为爱走一夜</span>
          </flexbox-item>
          <flexbox-item class="flex-demo">
            <img src="https://static.vux.li/demo/1.jpg" alt="">
            <span style="font-size:10px;">2016为爱走一夜</span>
          </flexbox-item>
        </flexbox>
      </group>
      <panel header="所有现场" :list="list2" :type="type"></panel>
    </scroller>
    

    <tabbar style="padding-top:15px;">
      <tabbar-item link="/Scroll">
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label" id="red">第一现场</span>
      </tabbar-item>
      <tabbar-item show-dot link="/Scene">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label" id="red">发布现场</span>
      </tabbar-item>
      <tabbar-item link="/Person">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label" id="red">个人中心</span>
      </tabbar-item>
    </tabbar>
    
  </div>
</template>

<script>
import { Scroller, Swiper, XHeader, Tabbar, TabbarItem, Group, Cell, Flexbox, FlexboxItem, Search, Panel } from 'vux'
export default {
  components: {
    Scroller,
    Swiper,
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Search,
    Panel
  },
  methods: {
    load (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    },
    onScroll (pos) {
      this.scrollTop = pos.top
    }
  },
  data () {
    return {
      type: '1',
      ishow: true,
      list: [{
        url: 'javascript;',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'javascript;',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'javascript;',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '播下茶籽，明春可发芽？'
      }],
      list2: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '等待被爱填满的教室',
        desc: '捐赠一间教室，能给孩子们一个接受素养教育的机会',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '暑期支教活动',
        desc: '牵手希望，关爱未来，支教山区留守儿童，陪伴度过了整个暑假',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '空巢老人救助行动',
        desc: '爱心接力，情暖空巢老人，帮助他们改善生活从心灵深处温暖他们',
        url: '/component/cell'
      }]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({top: 0})
    })
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
  }
}
</script>

<style scoped>
  div .header { 
    background-color: white;    
  }
  .flex-demo{
    height: 80px;
    text-align: center;
    color:#000;
    
    margin-bottom:16px;
    border-radius:6px;
    -webkit-background-clip: content-box;

}
  #red{
    color:orangered;
    font-size: 16px;
  }
  img{
    height: 60px;
    width: 100%;
    border-radius: 6px;
  }
</style>
