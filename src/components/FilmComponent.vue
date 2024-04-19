<template>
    <div>
        <img :src='film.Images' />
        <p>{{ film.Title }} : Année = {{ film.Year }}</p>
    </div>
</template>

<script setup>
    const film = defineModel('film')
</script>

<style scoped>
img {
    width: 20vw;
    height: 30vh;
}
</style>