<template>
  <div class="detail">
    <div class="detail-nav">
      <ul>
        <!-- <li class="l-btn" @click="goback"></li> -->
        <li class="l-btn" @click="$router.go(-1)"></li>
        <!-- <li class="l-btn" onclick="window.history.go(-1)"></li> -->
      </ul>
    </div>
    
    <div class="content">
      <div class="header clear"><h2><img :src="article.author_face" alt="" width="50"/></h2><p>作者名字</p></div>
      <div class="cont">
        <!-- {{this.$route.params}}|{{this.$route.path}}|{{this.$route.query}} -->
        <h3>{{article.title}}</h3>
        <div class="time"><p>{{article.time|date}} |{{1|fillzero}}<span><img src="/src/assets/img/zan.png" alt=""/></span></p></div>
        <div class="text-box" v-html="article.content"></div>
      </div>
    </div>
    <div class="detail-foot-btn">
      <ul>
        <li class="say"><a href="javascript:;">
          <i></i><span>0</span>
        </a></li>
        <li class="zan"><a href="javascript:;">
          <i></i><span>0</span>
        </a></li>
        <li class="xing"><a href="javascript:;">
          <i><img src="/src/assets/img/xing.png" alt=""/></i>
        </a></li>
        <li class="fx"><a href="javascript:;">
          <i><img src="/src/assets/img/fx.png" alt=""/></i>
        </a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      article:{}
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  },
  created(){
    // this.$root.$data.bNav=false;
    // this.$root.$data.bFoot=false;
    // console.log(this.$store);
    this.$store.dispatch('hideNav');
    this.$store.commit('HIDE_FOOT');
  },
  mounted(){
    let id = this.$route.params.id    
    this.$http({
      url:'http://localhost:8080/data/article.data'
      // url:'http://localhost:3000/article',
      // params:{uid:id}
    }).then((res)=>{
      // console.log(res.data);
      this.article=res.data[id-1];
    });
  }
}
</script>

<style>
@import '../assets/css/detail.css';

</style>
