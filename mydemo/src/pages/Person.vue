<template>
  <div>
    <blur :blur-amount=40 style="background-color:#ccc;">
      <div class="demo">
        <div class="left">
          <img :src="url" alt="">
        </div>
        <div class="right">
          <span>admin</span>
          <img src="../assets/demo/icon_nav_msg.png"></img>
        </div>
      </div>
      <small> "你我多一份参与， 工艺多一份美~~~" </small>
    </blur>
    <group>
      <cell is-link title="我发布的现场" link='/'></cell>
      <cell is-link title="我捐赠的" link='/'></cell>
      <cell is-link title="一起捐" link='/'></cell>
    </group>
    <group>
      <cell is-link title="实名认证" link='/'></cell>
      <cell is-link title="消息中心" link='/'>
        <span style="color:red;">.</span>
      </cell>
    </group>
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
  import { Group, Cell, Flexbox, FlexboxItem, Blur, Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Group, Cell, Flexbox, FlexboxItem, Blur, Tabbar, TabbarItem

    },
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    }
  }
</script>

<style>   
  .demo{
    position: relative;
  }
  .left {
    width: 70px;
    height: 70px;
    text-align: left;
    padding: 20px;
    color: #ccc;
    font-size: 18px;
    border: 10px solid #fff;
    border-radius: 50%;
    margin: 20px;
    margin-bottom: 10px;
  
    
  }
  .left img{
    width: 110px;
    height: 108px;
    border-radius: 50%;
    margin: -20px;
  }
  .right {
    position: absolute;
    left: 170px;
    top:43px;
    color: #e22;
    font-size: 25px;
  }
  .right img {
    margin-left:5px; 
    width: 16px;
    height: 16px;

  }
  small {
    margin: -10px 10px;
    color: #fff;
    font-weight: 600;
    display: inline-block;
  }
</style>
