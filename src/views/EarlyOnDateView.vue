<template>
  <div class="out-of-date-title">
    <h1>Ops, looks like you URL it's not activate yet</h1>
    <div class="out-of-date-body">
        <h2>It's sad to know it, but...</h2>
        <h3>
        Try to use it after {{date}} at {{time}}, as informed by your sector or the person who sent it to you.
        </h3>
        <h4>
        For more information, contact the central of midia Shostners & Shostners Corporations.
        </h4>
    </div>
  </div>
</template>

<script>

export default{
    name:"EarlyOnDateView",
    components: {
    },
    data() {
        console.log(this.$route.params.date)
        return{
            date: this.$route.params.date,
            time: this.$route.params.time
        }
    }
}
</script>


<style scoped>
    .out-of-date-title{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 30px 3.5%
    }
    h1{
        font-size: 3.5em;
    }
    
    .out-of-date-body{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 30px 3.5%
    }
    h2{
        padding-top: 8%;
        font-weight: 500;
        font-size: 2.5em;
    }
    h3{
        /* white-space: pre; */
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 2% 30px 0% 3.5%;
        font-size: 1.6em;
        word-wrap: break-word;
        word-break: break-word;
    }
    h4{
        position: absolute;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        top: 98vh;
        transform:translateY(-100%);
        margin: auto;
    }
</style>