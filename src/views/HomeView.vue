<template>
  <h1>Your URL Shortener</h1>
  <h2>
    Customize your URLs with Shostners & Shostners Shortener.
  </h2>
  <h3>
    Using up to 7 characters, shorten your links the way you feel, creating a deadline or defining a category for it.
  </h3>
  <RegisterForm />
</template>

<script>
import RegisterForm from "@/pages/RegisterForm.vue";

    export default{
    name:"HomeView",
    components: {
      RegisterForm
    }
}
</script>

<style scoped>

  h1 {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 3.5em
  }

  h2 {
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 2.5em;
  }

  h3 {
    display: flex;
    justify-content: center;
    font-size: 1.4em;
    font-weight: normal;
    margin-bottom: 5vh;
  }
</style>