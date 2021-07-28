<template>
  <div>
    <header>Exercises Class</header>
    <Menu/>
    
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./imgs/case3.jpg" class="d-block w-50" >
        </div>
        <div class="carousel-item">
          <img src="./imgs/case32.jpg" class="d-block w-50" >
        </div>
        <div class="carousel-item">
          <img src="./imgs/case33.jpg" class="d-block w-50" >
        </div>
      </div>

      <button class="carousel-control-prev d-block w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next d-block w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>



<!-- 
    <img class="headpic" src="./imgs/case3.jpg"/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu';
import Footer from './Footer';

export default{
  components:{
    Menu,
    Footer,
  }
}
</script>


<style scoped>
.headpic{
    display: block;
    text-align: center;
    width: 50%;
    height: 400px;
    margin : auto;
    
}
.Footer{
  height: 70px;
  margin-top: -50px;
  position: absolute;
}
img{
    display: block;
    text-align: center;
    width: 50%;
    height: 400px;
    margin : auto;
}
</style>
