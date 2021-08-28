<template>
  <div class="addContainer">
    <div class="container">
      <!-- header_item -->
      <div class="item_header">
        <div class="item_detail">商品</div>
        <div class="price">單價(季)</div>
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
      <div class="totalCount">
        總計金額為: {{totalCount}}
      </div>
      <div class="btndiv">
        <button class="btn" @click="orderFihish" >確認結帳</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';
export default{
  data() {
    return {
      totalCount: 0,
    }
  },
  computed: {
    ...mapState(['lessons']),
  },
  watch: {
    lessons: {
      handler:function (newValue){
        this.totalCount = 0;
        newValue.forEach(lesson => {
          this.totalCount += (lesson.total * lesson.count);
        });
      },
      deep: true,
    },
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
    orderFihish: function(){
      alert(`完成訂單,總計為:${this.totalCount}`);
      // window.location.href='http://localhost:8080/#/';
      this.totalCount = 0;
      for(let i = 0; i < 4; i++){
        this.lessons[i].total = 0 ;
      }
    },
  },
  mounted(){
    this.axiosLessons();
  },
}
</script>

<style scoped lang="scss">
@mixin item-header-type($header-width,$header-height){
  display: flex;
  width: $header-width;
  margin: 0 auto;
  height: $header-height;
  background-color: rgba(62, 194, 176, 0.747);
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 20px;
}

.addContainer {
  .container {
    .item_header {
      @include item-header-type(1000px,30px);
      div {
        width: 200px;
        color: rgb(17, 61, 143);
        line-height: 30px;
      }
      .item_detail {
        width: 50%;
        img {
          width: 90px;
          height: 100px;
          border-radius: 3px;
          /* margin-top: 10px; */
          float: left;
        }
        .name {
          margin-left: 100px;
          margin-top: 20px;
        } 
      }
    }
    .item_body {
      margin-top: 10px;
      height: 100px;
      align-items: center;  
      margin-bottom: 30px;  
    }
    .btndiv {
      text-align: center;
      .btn {
        position: relative;
        padding: 10px 15px;
        font-size: 24px;
        cursor: pointer;
        outline: none;
        color: #fff;
        background-color: #4a3e8e;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
        margin-bottom: 20px;
        &:active {
          background-color: #3e8e41;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }
      }
    }
    .totalCount {
      color: orangered;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      text-align: center;
      margin-bottom: 15px;
      font-size: 30px;
      padding: 15px 20px;
    }
  }
}
</style>