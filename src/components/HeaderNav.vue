<template>
    <header>
        <router-link to="/">
        <img alt="Shostners" id="Shostners-logo" src="../assets/img/Shostners.png">
        </router-link>
        <nav>
        <ul class="navbar-right">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/analytics">Analytics</router-link></li>
            <li><router-link to="/about">About</router-link></li>
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

    li, a {
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

    .navbar-right li{
        display: inline-block;
        padding: 0px 20px;
        transition: all 0.3s ease 0s;
    }

    .navbar-right li a{
        transition: all 0.3s ease 0s;
    }

    .navbar-right li a:hover{
        color: var(--color-details);
    }

    .router-link-exact-active{
        color: var(--color-details);
        font-size: 1.4em;
    }

</style>
