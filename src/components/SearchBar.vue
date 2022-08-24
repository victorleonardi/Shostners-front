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
        <div class="total-analytics">
            <div class="total-statistics">
                <div class="url">
                <h2> Url: </h2>
                <a href="url">{{apiRes.url}}</a>
                </div>
                <div class="encode">
                <h2> Encode: </h2>
                <h3>{{apiRes.encode}}</h3>
                </div>
                <div class="category">
                <h2> Category: </h2>
                <h3>{{apiRes.category}}</h3>
                </div>
                <div class="start-date" v-if="apiRes.start_date">
                <h2> Start Date: </h2>
                <h3>{{apiRes.start_date}}</h3>
                </div>
                <div class="end-date" v-if="apiRes.end_date & apiRes.end_date!='3000-01-01T00:00:00.000Z'">
                <h2> End Date </h2>
                <h3>{{apiRes.end_date}}</h3>
                </div>
                <div class="total-views" v-if="apiRes.view">
                <h2> Total Views: </h2>
                <h3>{{apiRes.view}}</h3>
                </div>
            </div>
            <div class="total-graphics">
                <LineCharts v-bind:xData="xData" v-bind:yData="yData" v-if="chartLoad" />
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import LineCharts from './LineCharts.vue'

    const apiSetup = {
        encode: ""
    }

    export default{
        name:"SearchBar",
        components: {
        LineCharts
        },
        data() {
            return{
                apiConfig: {
                    encode:""
                },
                loading: false,
                analytics: false,
                xData:[],
                chartData: undefined,
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                chartLoad: true,
                apiRes: {
                    url: "",
                    encode: "",
                    category: undefined,
                    start_date: undefined,
                    end_date: undefined,
                    view: 0
                }
            }
        },
        methods: {
            getEncodeFiltered () {
                axios.get(process.env.VUE_APP_API_GATEWAY_LINK + this.apiConfig.encode)
                .then((res) => {
                    console.log(res.data)
                    this.analytics=true
                    this.apiRes = res.data
                    axios.get(process.env.VUE_APP_API_GATEWAY_ANALYTICS + this.apiRes.encode)
                    .then((res) => {
                        this.apiRes.view = res.data
                        this.apiConfig = Object.assign(apiSetup)
                        axios.get(process.env.VUE_APP_API_GATEWAY_GRAPHICS + this.apiRes.encode)
                        .then((res) => {
                            this.xData = res.data.x
                            this.yData = res.data.y
                            this.chartLoad = false
                            this.$nextTick(() => {
                                this.chartLoad = true
                            })
                        })
                    })
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
        text-align: center;
        line-height: 50px;
        }

    .search-bar-icon:hover{
        cursor: pointer;
        opacity: 65%;
    }

    .search-bar-icon:active {
        transform: translateY(1px);
    }

    .analytics-box{
        min-width: 790px;
        width: 80%;
        margin: 30px auto;
        background: white;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
        text-align: left;
        padding: 40px 40px;
        border-radius: 10px;
        justify-content: space-between;
    }

    .total-analytics {
        display: flex;
    }

    .total-statistics{
        display: block;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    a {
        font-size: 1.2em;
        font-weight: bold;
        word-wrap: break-word;
        word-break: break-word;  
    }

    h3 {
        font-size: 1.2em;
        font-weight: normal;
        word-wrap: break-word;
        word-break: break-word;
    }

    .total-statistics div {
        margin: 10px 0;
    }

    .total-graphics{
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    h4{
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1em;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .specific-date{
        display: flex;
    }

    .specific-date input{
        display: block;
        width: 40%;
        padding: 10px 6px;
        box-sizing: border-box;
        border: 2px solid var(--color-details);
        border-radius: 5px;
        color: var(--color-text);
        font-size: 0.9em;
    }

    .total-graphics {
        display: flex;
    }
</style>