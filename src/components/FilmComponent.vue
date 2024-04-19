<template>
    <div>
        <img :src='film.Images' />
        <p>
            {{ film.Title }} : Année = {{ film.Year }}
        </p>
        <button @click="ajout(film.id)">Ajouter ce film a mon compte</button>
    </div>
</template>

<script setup>
    const film = defineModel('film')
    const ajout = (film) => {
        let myfilms = JSON.parse(localStorage.getItem('myFilms'))
        if (!myfilms.includes(film)){
            myfilms.push(film)
        }
        localStorage.setItem('myFilms',JSON.stringify(myfilms));
    }
</script>

<style scoped>
    img {
        width: 20vw;
        height: 30vh;
    }
</style>