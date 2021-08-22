<template>
  <div class="space1">
    <h1>CourseDetail</h1>
    <div class="space2"></div>
    <div class="innercontent">{{id}}</div>  
    <router-link to="/courses" style="color: red; font-size: 25px">Back>></router-link>
    <div class="space3"></div>
  </div>
</template>

<script>
const innercourses = {
  1: '首要目的是活動關節/肌腱/韌帶，其次是喚醒神經系統。眾所周知，在訓練中，是神經系統在主宰和控制著肌肉的收縮。所以我們的訓練需要建立這樣一個觀念：將神經作用與肌肉收縮聯繫起來。',
  2: '採用漸進的重量，是和正式組一樣標準的動作，主要目的是讓目標肌肉逐漸適應負重，同時逐漸提高神經系統的興奮性。同樣絕不能出現力竭的情況，因為你要將自己的最佳狀態留到正式組。',
  3: '水平越高、訓練重量越大的運動員，適應組將會越多！你可能要使用4-8個漸進重量才能過渡到正式組。注意控制好每一個適應組重量的增幅。每組的遞增重量最好比較平均，即不要太大也不要太小，這樣才能讓你的身心恰到好處地進入狀態。',
}
export default {
  computed:{
    id(){
      return innercourses[this.$route.params.id]
    }
  }
};
</script>

<style scoped lang="scss">
.space1 {
  margin:15px auto;
  width: 600px;
  .innercontent {
    font-size: 20px;
    width: 600px;
    Font-family: Arial Narrow;
  }
  .space2 {
    margin:20px auto;
    width: 600px;
  }
  .space3 {
    margin:190px auto;
    width: 600px;
  }
  .innercontent {
    color:rgb(10, 53, 145);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25px;
  }
} 
</style>