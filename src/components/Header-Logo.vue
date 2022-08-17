<template>
    <header>

        <img alt="Shostners" id="Shostners-logo" src="../assets/img/Shostners.png">

    </header>
</template>

<script>
export default{
    name:"Header-Logo"
}
</script>

<style scoped> /* vai deixar as alterações restritas ao próprio componente */

    header{
        height: 60px;
        width: 100%;
        background-color: var(--color-background);
    }

    #Shostners-logo{
        position: absolute;

        width: 4.2%;
        min-width: 68px;
        height: 8.5vh;
        min-height: 87px;
        left: 1.67%;
        top: 1.6vh;
    }

</style>
