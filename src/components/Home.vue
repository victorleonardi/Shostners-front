<template>
  <div class="hello">
    <div class="logo">
      <img src="../assets/img/Shostners.png">
    </div>
    <div class="box-with-urls">
      <form action="/register/" method="POST">
        <div class="input-box">
          <div class="input-true-url">
            <input type="text" placeholder="Insert URL" required>
          </div>
          <div class="input-custom-url">
            <input type="text" placeholder="Insert custom name for your URL">
          </div>
          <div class="input-category">
            <input type="text" placeholder="Insert the category of it">
          </div>
        </div>
      <div class="button">
        <input type="submit" value="Create">
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Kanit';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#7A7A7A;
}
body {
  background-color: #E7E7E7;
}

.logo {
  position: absolute;
  width: 115px;
  height: 142px;
  left: 24px;
  top: 30px;
}

img {
  position: absolute;
  width: 68px;
  height: 87px;
}

.box-with-urls {
  margin: auto;
  position: absolute;
  width: 60vw;
  height: 50vh;
  left: 20vw;
  top: 22vh;

  background: #FFFFFF;
  border: 8px solid #000000;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 76px;
}

::placeholder{
  text-align: center;
  font: 'Kanit';
  /* font-weight: 700; */
  color:rgba(122, 122, 122, 72%); /*Fonte ta vindo diferente da planejada */
}

.input-box .input-true-url input{
  width: 594px;
  height: 61px;
  margin-left: 146px;
  margin-top: 10%;
  border-radius: 15px;
  font-size: 1.2em;

}

.input-box .input-custom-url input{
  width: 528px;
  height: 49px;
  margin-left: 179px;
  margin-top: 38px;
  border-radius: 15px;
  font-size: 1.2em;
}

.input-box .input-category input{
  width: 528px;
  height: 49px;
  margin-left: 179px;
  margin-top: 38px;
  border-radius: 15px;
  font-size: 1.2em;
}

.box-with-urls .button input {
  position: absolute;
  width: 148px;
  height: 61px;
  left: 369px;
  top: 407px;
  font-size: 1.2em;

  color: #FFFFFF;
  background: #000000;
  border-radius: 31px;
}

.input-box input {
  text-align: center;
  outline: none;
  background-color: rgba(122, 122, 122, 8%);
  border: 1px solid #7A7A7A;
}

</style>
