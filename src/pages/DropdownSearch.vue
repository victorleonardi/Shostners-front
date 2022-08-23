<template>
  <section class="dropdown-search-wrapper">  
    <div @click="isVisible=!isVisible" class="selected-item">
      <span>Select encode</span>
      <svg class="drop-down-ico"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
      </svg>
    </div>
    <div v-if="isVisible" class="dropdown-search-popover">
      <input v-model="searchQuery" type="text" placeholder="Search for encode" />
      <div class="options">
        <ul>
          <li v-for="(encode, index) in encodeArray" :key="`encode-${index}`">
          {{encode}}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data(){ 
    return{
      searchQuery: '',
      selectedItem: null,
      isVisible: false,
      encodeArray: []
    }
  },
  computed: {
    // filterEncode(){
    //   const query= this.searchQuery.toLowerCase()
    //   if (this.searchQuery === ""){
    //     return this.encodeArray
    //   }
    //   return this.encodeArray.filter((encode) => {
    //     return Object.values(item).some()
    //   })
    // }
  }
  ,
  mounted(){
    axios.get(process.env.VUE_APP_API_GATEWAY_GET_ALL_ENCODE)
    .then((res)=> {
      console.log(res.data)
      this.encodeArray = res.data
      })
  }
}

</script>

<style scoped>
    .dropdown-search-wrapper{
      max-width: 350px;
      position: relative;
      margin: 0 auto;
    }

    .selected-item{
      height: 5vh;
      width: 350px;
      background-color: white;
      border: 2px solid lightgrey;
      border-radius: 10px;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5em;
    }

    .dropdown-search-popover{
      position: absolute;
      border: 2px solid lightgrey;
      top: 42px;
      left: 0;
      right: 0;
      background-color: white;
      width: 100%;
      padding: 20px;
    }

    input{
      width: 100%;
      height: 2.5vh;
      border: 2px solid lightgrey;
      border-radius: 5px;
      font-size: 0.9em;
      padding-left: 5px;
    }
  
    .options{
      width: 100%;
    }

    ul {
      list-style: none;
      text-align: left;
      padding-left: 8px;
      overflow-y:scroll;
    }

    li{
      widows: 100%;
      border-bottom: 1px solid lightgray;
      padding: 10px;
      font-size: 0.9em;
      cursor: pointer;
    }

    li:hover{
      background-color: var(--color-details);
      color: whitesmoke;
    }



</style>