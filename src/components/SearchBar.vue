<template>
    <div class="box">
        <div class="search-bar-box">
            <input class="search-bar" type="text" v-model="apiConfig.encode" />
            <svg class="search-bar-icon" v-on:click="getEncodeFiltered"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" 
            width="27" height="27"><path fill="none" 
            d="M0 0h24v24H0z"/>
            <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" 
            fill="rgba(46,46,46,1)"/>
            </svg>
        </div>
    </div>
    <div class="analytics-box" v-if="analytics">
        <h3 v-if="analytics">{{apiRes.url}}</h3>
        <h3 v-if="analytics">{{apiRes.encode}}</h3>
        <h3 v-if="analytics">{{apiRes.category}}</h3>
        <h3 v-if="analytics">{{apiRes.start_date}}</h3>
        <h3 v-if="analytics">{{apiRes.end_date}}</h3>
        <h3 v-if="analytics">{{apiRes.view}}</h3>
    </div>
</template>

<script>

//     import axios from 'axios'

import axios from 'axios';

//     const apiSetup = {
//         url:"",
//         name:"",
//         category:undefined,
//         start_date:undefined,
//         end_date:undefined
//     }


    export default{
        name:"SearchBar",
        components: {
        },
        data() {
            return{
                apiConfig: {
                    encode:""
                },
                loading: false,
                analytics: false,
                apiRes: {
                    url: "",
                    encode: "",
                    category: undefined,
                    start_date: undefined,
                    end_date: undefined,
                    view: undefined
                }
            }
        },
        methods: {
            getEncodeFiltered () {
                axios.get(process.env.VUE_APP_API_GATEWAY_LINK)
                .then((res) => {
                    console.log(res.data)
                    this.analytics=true
                    this.apiRes = res.data[0]
                    console.log(this.apiRes)
                }
                )
            }
        }
}
</script>

<style scoped>
    
    .box{
        max-width:650px;
        width: 100%;
    }

    .box .search-bar-box{
        position: relative;
        max-width: 100%;
        height: 50px;
        margin: auto;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
    }

    .search-bar-box input{
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 25px;
        outline: none;
        border: none;
        font-size: 1.1em;
        font-weight: 600;
        padding-left: 20px;
    }

    .search-bar-box .search-bar-icon{
        position: absolute;
        right: 5px;
        top: 0;
        padding: 10px;
        width: 50px;
        height: 100%;
        border-radius: 0 25px 25px 0;
        /* background-color: yellowgreen; */
        text-align: center;
        line-height: 50px;
        }

    .search-bar-icon:hover{
        cursor: pointer;
        opacity: 65%;
    }

</style>