<template>
  <div class="topselects">
    <router-link class="selects SC1" to="/about">關於公司</router-link>
    <router-link class="selects SC2" to="/courses">課程介紹</router-link>
    <router-link class="selects SC3" to="/add">線上預訂</router-link>
    <router-link class="selects SC4" to="/booking">意見反饋</router-link>
  </div>
</template>

<script>
import $ from 'jquery';
  export default {
    mounted() {
      let scNums = [".SC1", ".SC2", ".SC3", ".SC4"];
      for(let scNum of scNums) {
        $(document).ready(function(){
            $(scNum).mouseover(function(){
              $(scNum).css("color","yellow");
            });
            $(scNum).mouseout(function(){
              $(scNum).css("color","rgb(139, 46, 66)");
            });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
.topselects {
  height: 30px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  .selects {
    color: rgb(139, 46, 66);
    font-family:unset;
    padding: 2px 60px;
    text-decoration:none;
  }
}
</style>
