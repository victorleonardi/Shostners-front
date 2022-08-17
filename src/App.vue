<template>
  <div id="app">
    <HeaderLogo />
    <!-- <FormBoxes /> -->
    <HomePage />
  </div>
</template>

<script>
import './styles/global.css'

import HeaderLogo from "./components/Header-Logo.vue";
import HomePage from "./pages/Home-Page.vue"
// import FormBoxes from './components/Form-Boxes.vue';


export default {
  name: 'App',
  components: {
    HeaderLogo,
    HomePage
    // FormBoxes
}
}
</script>
