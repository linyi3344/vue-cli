<template>
  <div class="nav">
      <ul>
        <router-link
          tag='li'
          active-class="active"
          to="/home"
        >
          <a href="javascript:;" >首页</a>
        </router-link>
        <router-link
          tag='li'
          active-class="active"
          to="/follow"
        >
          <a href="javascript:;" >关注</a>
        </router-link>
        <router-link
          tag='li'
          active-class="active"
          to="/column"
        >
          <a href="javascript:;" >栏目</a>
        </router-link>
       <!--  <li class="active"><a href="index_m.html" >首页</a></li>
        <li><a href="fllow_m.html">关注</a></li>
        <li><a href="column_m.html">栏目</a></li> -->
      </ul>
    </div>
</template>
<style>
@import '../assets/css/navbar.css';
</style>

