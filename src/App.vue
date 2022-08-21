<template>
  <HeaderNav />
  <router-view/>
</template>

<script>
import '@/styles/global.css'

import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
}
}
</script>
