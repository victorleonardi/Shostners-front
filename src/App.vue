<template>
  <div id="app">
    <HeaderLogo />
    <!-- <FormBoxes > -->
    <RegisterForm />
  </div>
</template>

<script>
import './styles/global.css'

import HeaderLogo from "./components/HeaderLogo.vue";
import RegisterForm from "./pages/RegisterForm.vue";
// import FormBoxes from './components/Form-Boxes.vue';


export default {
  name: 'App',
  components: {
    HeaderLogo,
    RegisterForm
    // FormBoxes
}
}
</script>
