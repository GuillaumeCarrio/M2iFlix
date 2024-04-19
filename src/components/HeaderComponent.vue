<template>
    <nav>
        <ul>
            <li><router-link to="/login">Connection</router-link></li> |
            <li><router-link to="/films">Liste des films</router-link></li> |
            <li><router-link to="/account">Mes films</router-link></li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
    li{
        list-style-type: none;
        display: inline;
    }
    a{
        text-decoration: none;
    }
</style>