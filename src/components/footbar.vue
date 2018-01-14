<template>
  <div class="foot-btn" >
      <ul>
        <router-link
          tag='li'
          class="home"
          active-class="home1"
          to="/home"
        >
          <a href="javascript:;"></a>
        </router-link>
        <router-link
          tag='li'
          class="write"
          to="/follow"
        >
          <a href="javascript:;"></a>
        </router-link>
        <router-link
          tag='li'
          class="my"
          active-class="my1"
          to="/user"
          @click.native="toUser"
        >
          <a href="javascript:;"></a>
        </router-link>
        <!-- <li class="home"><a href="index_m.html"></a></li> -->
        <!-- <li class="write"><a href="javascript:;"></a></li> -->
        <!-- <li class="my"><a href="mydoc_m.html"></a></li> -->
      </ul>
    </div>
</template>
<script>
export default {
  methods:{
    toUser(){
      // console.log('....')  给组件添加事件时，需要修饰符 @click.native
      // this.$store.dispatch('hideNav');
      // this.$store.dispatch('showFoot');
    }
  }
}
</script>

<style>
@import '../assets/css/footbar.css';
</style>
