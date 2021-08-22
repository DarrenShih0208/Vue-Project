<template>
  <div class="allcourses">
    <h1>Courses</h1>
    <div class="flexbox">
      <div class="item" v-for="(course, index, key) in courses" :key="key">
        <router-link :to="`/courses/${course.id}`">
          <div class="item1">
            <div class="item2">
              <img :src="course.img" />
            </div>
            <div class="item2">
              <div><strong>{{course.name}}</strong></div><br/>
              <div style="width: 400px">{{course.content}}</div>
            </div>
          </div>
        </router-link>
      </div>  
    </div>
  </div>
</template>

<script>
import img1 from './imgs/case1.jpg';
import img2 from './imgs/case4.jpg';
import img3 from './imgs/case2.jpg';

export default {
  data(){
    return {
      courses: [
        {id: 1, img: img1, name: 'Basic Course', content: '首要目的是活動關節/肌腱/韌帶，其次是喚醒神經系統。眾所周知，在訓練中，是神經系統在主宰和控制著肌肉的收縮。所以我們的訓練需要建立這樣一個觀念：將神經作用與肌肉收縮聯繫起來。'},
        {id: 2, img: img2, name: 'Advanced Course', content:'採用漸進的重量，是和正式組一樣標準的動作，主要目的是讓目標肌肉逐漸適應負重，同時逐漸提高神經系統的興奮性。同樣絕不能出現力竭的情況，因為你要將自己的最佳狀態留到正式組。'},
        {id: 3, img: img3, name: 'Extreme Course', content:'水平越高、訓練重量越大的運動員，適應組將會越多！你可能要使用4-8個漸進重量才能過渡到正式組。注意控制好每一個適應組重量的增幅。每組的遞增重量最好比較平均，即不要太大也不要太小，這樣才能讓你的身心恰到好處地進入狀態。'},
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.allcourses {
  
  h1 {
    text-align: center;
  }

  .flexbox {
    display: flex;
    flex-direction: column;
  }

  .item {
    position: relative;
    width: 500px;
    left:25%;
    a {
      text-decoration:none;
    }
    .item1 {
    display: flex;
    flex-direction: row;
      .item2 {
        display: inline-block;
        margin: 5px;
        text-decoration:none;
        img {
          width: 300px;
          height: 200px;
          position: relative;
          left: 0%;
        } 
        strong {
          font-size: 25px;
          color: darkgreen;
        }
      }
    }
  }
}

</style>