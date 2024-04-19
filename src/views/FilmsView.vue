<template>
    <div>
        <h1>
            Liste des films
        </h1>
        <FilmComponent v-for="(film, ind) in films" v-model:film="films[ind]"/>
    </div>
</template>
<script setup>
    import FilmComponent from '../components/FilmComponent.vue';
    import { reactive, onMounted } from "vue";
    import axios from 'axios';

    let films = reactive([]);

    onMounted(() => {
        axios.get(`http://localhost:5555/films`).then((f) => {
            f.data.forEach(elt => films.push(elt))
        })
        .catch(() => erreur = 'Pb de récup des films')
    })
</script>