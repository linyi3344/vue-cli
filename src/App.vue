<template>
  <div id="app">
    <!--头部-->
    <loading v-show="getLoading"></loading>
    <navbar v-show="getNav"></navbar>    
    <!--home列表-->
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view>展示区</router-view>
    </transition>
    <!--尾部-->
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar';
import footbar from './components/footbar';
import {mapGetters} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      msg: "news-app"
    };
  },
  watch:{
    $route(route){//路由监听
      console.log(route.path); //router==路由对象  
      this.conState(route.path);
    }
  },
  methods:{
    conState(path){
      if(/home|follow|column/.test(path)){
        this.$store.dispatch('showNav');
        this.$store.dispatch('showFoot');
      }
      if(/detail|login|reg/.test(path)){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('hideFoot');
      }
      if(/user/.test(path)){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('showFoot');
      }
    }
  },
  mounted(){//为了解决第一次，watch不到数据的情况
    console.log(this.$route.path);
    this.conState(this.$route.path);
  },
  components:{
    navbar,footbar
  },
  computed:mapGetters([
    'getNav','getFoot','getLoading'
  ])
};
</script>

<style>

</style>
