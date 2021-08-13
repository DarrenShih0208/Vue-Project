<template>
  <div>
    <div class="container">
      <!-- header_item -->
      <div class="item_header">
        <div class="item_detail">商品</div>
        <div class="price">單價</div>
        <div class="count">數量</div> 
        <div class="amount">總計</div>
        <div class="operate">操作</div>
      </div>
      <!-- body_item -->
      <div class="item_container" v-for="(lesson, index) in lessons" :key="index" >
        <div class="item_header item_body">
          <div class="item_detail">
            <img :src="lesson.imgUrl" alt="">
            <div class="name">{{lesson.title}}</div>
          </div>
          <div class="price"><span>$</span>{{lesson.count}}</div>
          <div class="count">
            <button @click="handleSub(lesson)">-</button>
            {{lesson.total}}
            <button @click="handlePlus(lesson)">+</button>
          </div> 
          <div class="amount">{{lesson.count * lesson.total}}</div>
          <div class="operate">
            <button @click="lesson.total = 0">重選</button>
          </div>
        </div>
		  </div>	
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';
export default{
  computed:{
    ...mapState(['lessons'])
  },
  methods:{
    ...mapActions(['axiosLessons']),
    handlePlus: function(lesson){
      lesson.total++;
    },
    handleSub: function(lesson){
      if(lesson.total>0){
        lesson.total--;
      }
    },
  },
  mounted(){
    this.axiosLessons();
  },
}
</script>

<style scoped>
.item_header{
    display: flex;
    width: 1000px;
    margin: 0 auto;
    height: 30px;
    background-color: rgba(62, 194, 176, 0.747);
    border-radius: 3px;
    padding-left: 10px;
		margin-top: 20px;
}
.item_header div{
    width: 200px;
    color: #888;
    line-height: 30px;
}
.item_header .item_detail{
    width: 50%;
}
.item_body{
    margin-top: 10px;
    height: 100px;
    align-items: center;  
		margin-bottom: 30px;  
}
.item_detail img{
    width: 90px;
    height: 100px;
    border-radius: 3px;
    /* margin-top: 10px; */
    float: left;
}
.item_detail .name{
    margin-left: 100px;
    margin-top: 20px;
} 
</style>