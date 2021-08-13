<template>
  <div class="topselects">
    <router-link class="selects" to="/about">關於公司</router-link>
    <router-link class="selects" to="/courses">課程介紹</router-link>
    <router-link class="selects" to="/add">線上預訂</router-link>
    <router-link class="selects" to="/booking">意見反饋</router-link>
    
  </div>
</template>


<style scoped>
.topselects {
  /* display: inline-block; */
  height: 30px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}
.selects{
  color: rgb(139, 46, 66);
  font-family:unset;
  padding-left: 60px;
  text-decoration:none;
}

</style>
