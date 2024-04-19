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
        } else {
            alert('Vous avez déjà ce film')
        }
        localStorage.setItem('myFilms',JSON.stringify(myfilms));
    }
</script>
<style scoped>
    button {
        border: solid 2px black;
        margin: 2vh;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 1%;
        padding: 2vh;
        width: 22vw;
        background-color: lightgray;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    img {
        width: 20vw;
        height: 30vh;
    }
</style>