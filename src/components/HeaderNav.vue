<template>
    <header>
        <router-link to="/">
        <img alt="Shostners" id="Shostners-logo" src="../assets/img/Shostners.png">
        </router-link>
        <nav>
        <ul class="navbar-right">
            <router-link><a href="/">Home</a></router-link>
            <router-link><a href="/analytics">Analytics</a></router-link>
            <router-link><a href="/about">About</a></router-link>
        </ul>
        </nav>
    </header>
</template>

<script>
export default{
    name:"Header-Logo"
}
</script>

<style scoped> /* vai deixar as alterações restritas ao próprio componente */

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 3.5%;
        height: 13.5vh;
        width: 100%; 
        border: none;
        /* background-color: white; */
    }

    router-link, a {
        font-family: sans-serif;
        font-weight: 700;
        font-size: 1.15em;
        color: var(--color-text);
        text-decoration: none;
    }

    #Shostners-logo{
        width: 4.2%;
        min-width: 68px;
        height: 8.5vh;
        min-height: 87px;
        left: 1.67%;
        top: 1.6vh;
        cursor: pointer;
    }

    .navbar-right{
        list-style: none;
    }

    .navbar-right router-link{
        display: inline-block;
        padding: 0px 20px;
    }

    .navbar-right router-link a{
        transition: all 0.3s ease 0s;
    }

    .navbar-right router-link a:hover{
        color: #0088a9;
    }

</style>
