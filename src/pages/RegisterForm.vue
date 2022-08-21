<template>
    <div class="result" v-if="viewUrl">
        <label>Your URL:</label>
        <p></p>
        <a href="url">{{ viewUrl }}</a>
    </div>
    <form @submit.prevent="createPost">
        <label>URL: (*)</label>
        <input type="url" v-model="apiConfig.url" required />
        <label>Name it:</label>
        <input type="text" v-model="apiConfig.name" maxlength="7" />
        <label>Category:</label>
        <input type="text" v-model="apiConfig.category" />
        <label>Start Date:</label>
        <input type="datetime-local" id="starting-date" v-model="apiConfig.start_date" />
        <label>End Date:</label>
        <!-- O valor de data vazio fica transformando em DEFAULT -->
        <input type="datetime-local" id="ending-date" v-model="apiConfig.end_date"/>
        <label>Image:</label>
        <input type="file" accept="image/png, image/jpeg"/>
        <div class="submit">
            <button>Shortener it!</button>
        </div>
    </form>



</template>

<script>
import axios from 'axios'
const apiSetup = {
    url:"",
    name:"",
    category:undefined,
    start_date:undefined,
    end_date:undefined
}

const axiosConfig = {
    'Content-Type': 'application/json'
}

export default{
    data() {
        return{
            apiConfig : {
                url:"",
                name:"",
                category:undefined,
                start_date:undefined,
                end_date:undefined
            },
            loading: false,
            viewUrl: null
        }
    },
    methods: {
        createPost() {
            this.loading = true
            console.log(this.apiConfig)
            axios.post(process.env.VUE_APP_API_GATEWAY_REGISTER, this.apiConfig, axiosConfig)
            .then(({ data }) => {
                console.log(this.apiConfig)
                this.viewUrl = data
                this.loading = false
                this.apiConfig = Object.assign(apiSetup)
            })
            .catch(err => console.log(err))
            
        }
    }
}


</script>

<style scoped>

    a {
        display: inline-block;
        /* margin: 25px 0 15px; */
        font-size: 0.9em;
        /* text-transform: uppercase; */
        letter-spacing: 1px;
        font-weight: bold;
    }

    form{
        width: 60%;
        /* max-width: 420px; */
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 20px 40px 40px;
        border-radius: 10px;
    }

    label{
        color: var(--color-text);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input{
        display: block;
        width: 100%;
        padding: 10px 6px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: var(--color-text);
    }
    
    button{
        background: var(--color-button);
        font-size: 1.2em;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgba(30, 28, 28, 0.85);
    }

    button:active {
        /* box-shadow: 0 5px #666; */
        transform: translateY(4px);
    }

    .submit{
        text-align: center;
    }

    .result{
        width: 60%;
        /* max-width: 420px; */
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 20px 40px 40px;
        border-radius: 10px;
    }

</style>