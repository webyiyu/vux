<template>
  <div>
    <tab active-color="red">
      <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
      <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
      <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
      <tab-item :selected="demo1 === '1'" @click="demo1 = '666'">6666</tab-item>
    </tab>
    <!--<div>
      <tab>
        <tab-item :selected="demo2 === item" v-for=" item in list2 " @click="demo2 = item">{{item}}</tab-item>
      </tab>
    </div>-->
    <divider>弹出框</divider>
    <!--<group>
      <switch title="WIFI" :value.sync="show"></switch>
      <switch title="Full popup" :value.sync="show1"></switch>

    </group>
    <popup>

    </popup>-->
  </div>
  
</template>

<script>
  import { Tab, TabItem, Divider, Group } from 'vux'

  export default {
    components: {
      Tab,
      TabItem,
      Divider,
      Group
    },
    data () {
      return {
        demo1: '1'
        // demo2: '小吃',
        // list2: ['面条', '米粉', '烧烤', '水果']

      }
    }
  }
</script>
