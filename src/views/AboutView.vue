<template>
  <div class="about">
    <h1>Shostners & Shostners®</h1>
    <h2>URL shortener</h2>
    <body>
      Encurtador de URL desenvolvido pelos técnicos do himalaia com as tecnologias Shostners & Shostners® de mais alta linha.
    </body>
  </div>
</template>

<script>

    export default{
    name:"AboutView",
    components: {
    }
}
</script>


<style scoped>
    .about{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 30px 3.5%
    }
    h1{
      font-size: 3.5em;
    }
    h2{
      font-weight: 500;
      font-size: 2.5em;
    }
    body{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 10% 30px 3.5% 3.5%;
      font-size: 1.2em;
    }
</style>