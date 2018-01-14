<template>
  <div id="content">
    <p class="fhbtn"><a href="mydoc_m.html"></a></p>
    <h1></h1>
    <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <router-link to="/login">登录</router-link>
        <!-- <a href="login_m.html">登录</a> -->
        <span></span>
        <!-- <a href="reg_m.html">注册</a> -->
        <router-link to="/reg">注册</router-link>
      </div>
      <p class="rsolid"></p>
    </div>
    <ul>
      <li class="lifirst">
        <input type="text" value=""/>
        <span>帐号</span>
      </li>
      <li>
        <input type="text" value=""/>
        <span>密码</span>
      </li>
    </ul>
    <div class="footbox">
      <input type="button" value="注 册" class="login-btn"/>
      <a href="javascript:;" class="tishi">忘记密码？</a>
    </div>
  </div>
</template>
<style>
@import url('../assets/css/reg.css');
</style>
