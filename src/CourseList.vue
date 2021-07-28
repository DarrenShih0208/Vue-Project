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
              <div style="width: 400px">Nam et neque vehicula, ultrices sem ac, ullamcorper dolor.
                  Sed fermentum risus id vulputate venenatis. Aliquam tristique nibh ut ligula lobortis,
                  in lacinia metus elementum.
              </div>
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
        {id: 1, img: img1, name: 'Basic Course'},
        {id: 2, img: img2, name: 'Advanced Course'},
        {id: 3, img: img3, name: 'Extreme Course'},
      ],
    };
  },
};
</script>

<style scoped>
img{
  width: 300px;
  height: 200px;
  position: relative;
  left: 0%;
} 
h1{
  text-align: center;
}
.flexbox{
  display: flex;
  flex-direction: column;
}
.item{
  position: relative;
  width: 500px;
  left:25%;
}
.item1{
  display: flex;
  flex-direction: row;
}
.item2{
  display: inline-block;
  margin: 5px;
  text-decoration:none;
}
.coursesname{
  color: darkmagenta;
  font-size: 25px;
  font-weight:bold;
}
strong{
  font-size: 25px;
  color: darkgreen;
}
a{
  text-decoration:none
  }
</style>