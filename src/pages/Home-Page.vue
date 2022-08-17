<template>
    <main>
        <div class="box-holder">
            <form>
                <div class="input-boxeses">
                    <div class="input-true-url">
                        <input type="text" placeholder="Insert URL" required>
                    </div>
                    <div class="input-custom-url">
                        <input type="text" placeholder="Insert custom name ">
                    </div>
                    <div class="input-category">
                        <input type="text" placeholder="Insert category">
                    </div>
                <div class="button">
                    <input type="submit" value="Create">
                </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    export default{
        name: "Home-Page"
    }
</script>

<style scoped>

    main{
        background-color: var(--color-background);
    }

    .box-holder {
        margin: auto;
        position: absolute;
        width: 80%;
        min-width: 264px;
        height: 50vh;
        min-height: 156px;
        left: 10%;
        top: 22vh;

        background: #FFFFFF;
        border: 8px solid #000000;
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 76px;
    }

    .input-boxeses .input-true-url input{
        width: 80%;
        min-width: 177px;
        height: 6vh;
        min-height: 18.3px;
        margin-left: 10%;
        margin-top: 8.5vh;
        border-radius: 15px;
        font-size: 1em;

    }

    .input-boxeses .input-custom-url input{
        width: 70%;
        min-width: 177px;
        height: 6vh;
        min-height: 18.3px;
        margin-left: 15%;
        margin-top: 2vh;
        border-radius: 15px;
        font-size: 1em;
    }

    .input-boxeses .input-category input{
        width: 70%;
        min-width: 177px;
        height: 6vh;
        min-height: 18.3px;
        margin-left: 15%;
        margin-top: 2vh;
        border-radius: 15px;
        font-size: 1em;
    }

    .box-holder .button input {
        position: absolute;
        width: 40%;
        min-width: 177px;
        /* max-width: 148px; */
        height: 6vh;
        min-height: 18.3px;
        margin-left: 20%;
        margin-top: 2vh;

        
        font-size: 1.2em;

        color: #FFFFFF;
        background: #000000;
        border-radius: 31px;
    }

    .input-boxeses input {
        text-align: center;
        outline: none;
        background-color: rgba(122, 122, 122, 8%);
        border: 1px solid #7A7A7A;
    }

    @media (min-width:700px){
        .box-holder {
            margin: auto;
            position: absolute;
            width: 60vw;
            height: 50vh;
            left: 20vw;
            top: 22vh;

            background: #FFFFFF;
            border: 8px solid #000000;
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
            border-radius: 76px;
        }

        .input-boxes .input-true-url input{
            width: 594px;
            height: 10px;
            margin-left: 146px;
            margin-top: 10%;
            border-radius: 15px;
            font-size: 1.2em;

        }

        .input-boxes .input-custom-url input{
            width: 528px;
            height: 49px;
            margin-left: 179px;
            margin-top: 38px;
            border-radius: 15px;
            font-size: 1.2em;
        }

        .input-boxes .input-category input{
            width: 528px;
            height: 49px;
            margin-left: 179px;
            margin-top: 38px;
            border-radius: 15px;
            font-size: 1.2em;
        }

        .box-holder .button input {
            position: absolute;
            width: 40%;
            height: 6vh;
            margin-left: 30%;
            margin-top: 2vh;

            
            font-size: 1.2em;

            color: #FFFFFF;
            background: #000000;
            border-radius: 31px;
        }
    }
    </style>