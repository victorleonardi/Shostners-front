<template>
    <div class="analytics">
        <h1>Analytics</h1>
        <h2>Find your shortened url's easely.</h2>
        <SearchBar />
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

    export default{
    name:"AnalyticsView",
    components: {
    SearchBar
}
}
</script>

<style scoped>
    .analytics{
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
      margin-bottom: 5vh;
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