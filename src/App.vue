<template>
  <div id="app">
    <HeaderNav />
    <!-- <FormBoxes > -->
    <RegisterForm />
  </div>
</template>

<script>
import './styles/global.css'

import HeaderNav from "./components/HeaderNav.vue";
import RegisterForm from "./pages/RegisterForm.vue";


export default {
  name: 'App',
  components: {
    HeaderNav,
    RegisterForm
}
}
</script>
