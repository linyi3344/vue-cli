<template>
  <div class="home">
    <slider></slider>
    <div class="newsList">
      <ul>
        <li v-for="(item) of list" :key="item.id">
          <router-link :to="'/detail/'+item.id">
            <h2>{{item.id}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import slider from "./slider";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    slider
  },
  created() {
    this.$http({
      url: "/data/index.data"
      // url:'http://localhost:80/index.php'
      // url:'http://localhost:3000/index'
      // params:{start:1,count:6}
    }).then(res => {
        //隐藏loading
        this.list = res.data;
      })
      .catch(res => {
        console.log("index.data error");
      });
    //显示loading.....
    /* this.$store.dispatch("showLoading");
    setTimeout(() => {
      this.$http({
        url: "/data/index.data"
        // url:'http://localhost:80/index.php'
        // url:'http://localhost:3000/index'
        // params:{start:1,count:6}
      })
        .then(res => {
          //隐藏loading
          this.$store.dispatch("hideLoading");
          this.list = res.data;
        })
        .catch(res => {
          console.log("index.data error");
        });
    }, 1000); */
    /* this.$http({
      url: "/data/index.data"
      // url:'http://localhost:80/index.php'
      // url:'http://localhost:3000/index'
      // params:{start:1,count:6}
    })
      .then(res => {
        //隐藏loading
        this.$store.dispatch("hideLoading");
        this.list = res.data;
      })
      .catch(res => {
        console.log("index.data error");
      }); */
  }
};
</script>
<style>
@import "../assets/css/index.css";
</style>


