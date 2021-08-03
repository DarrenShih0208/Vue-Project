<template>
  <div>

    <div class="container">


      <div class="item_header">
        <div class="item_detail">商品</div>
        <div class="price">單價</div>
        <div class="count">數量</div> 
        <div class="amount">總計</div>
        <div class="operate">操作</div>
      </div>

      <div>
        <div class="item_header item_body">
          <div class="item_detail">
            <img src="https://images.unsplash.com/photo-1534961880437-ce5ae2033053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="">
            <div class="name">優質短袖白T</div>
          </div>
          <div class="price"><span>$</span>300</div>
          <div class="count">
            <button>-</button>
            1
            <button>+</button>
          </div> 
          <div class="amount">300</div>
          <div class="operate">
            <button>刪除</button>
          </div>
        </div>
		  </div>	
    </div>


  </div>
</template>

<script>
import  axios  from  'axios' 
import  VueAxios  from  'vue-axios'
import Vue from 'vue'
Vue.use( VueAxios ,  axios );

export default{
  data(){
    return {
      lessons: [],
    };
  },

  mounted(){
    axios.get('http://localhost:3000/data').then((res) =>{
      console.log(res.data);
      this.lessons = res.data;
      console.log("lessons: ", this.lessons);
    }).catch((err) =>{
      // Run into big problems when I get an error
      console.log("Got an error logging in, here's the message: ", err);
    });
  }
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
    width: 80px;
    height: 80px;
    border-radius: 3px;
    /* margin-top: 10px; */
    float: left;
}
.item_detail .name{
    margin-left: 100px;
    margin-top: 20px;
} 

</style>