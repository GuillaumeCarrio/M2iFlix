<template>
    <div>
        <img :src='film.Images' />
        <p>
            {{ film.Title }} : Année = {{ film.Year }}
        </p>
        <button @click="delet(film.id)">Enlever ce film de mon compte</button>
    </div>
</template>

<script setup>
    const film = defineModel('film')
    const delet = (film) => {
        let myfilms = JSON.parse(localStorage.getItem('myFilms'))
        if (myfilms.includes(film)){
            let i = myfilms.indexOf(film)
            myfilms.splice(i,1)
        }
        localStorage.setItem('myFilms',JSON.stringify(myfilms))
    }
</script>

<style scoped>
    img {
        width: 20vw;
        height: 30vh;
    }
</style>