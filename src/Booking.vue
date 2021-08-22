<template>
  <div class="bk">
    <h1>Booking</h1>
    <div class="container ">
      <div>
        <label for="exampleFormControlInput1" class="form-label">User name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example:王小明">
      </div>
      <div>
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div>
        <label for="exampleFormControlInput1" class="form-label">Coursess select</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Basic Course</option>
          <option value="2">Advanced Course</option>
          <option value="3">Extreme Course</option>
        </select>
        </div>
      <div>
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea2" rows="7"  placeholder="給點建議....."></textarea>
        <br/>
      </div> 
      <div class="bkbtn">
        <button class="btn" @click="checkFihish" >確認送出</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    checkFihish: function(){
    alert("感謝建議回覆!!!");
    window.location.href='http://localhost:8080/#/';
    },
  }
}
</script>
<style scpoed lang="scss">
//套用SCSS
.bk {
  text-align: center;
  .container {
    left: 40%;
    .input {
      width: 40%;
      padding: 2px 2px;
      margin: 10px 8px;
      box-sizing: border-box;
      height: 40px;
    }
    .label {
      color: rgb(102, 100, 237);
      font-size: 25px;
    }
    .btn {
      position: relative;
      padding: 10px 15px;
      font-size: 24px;
      color: #fff;
      background-color: #0d066e;
      border: none;
      border-radius: 15px;
      margin-bottom: 20px;
    }
  }
}
</style>