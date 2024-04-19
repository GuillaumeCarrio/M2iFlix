<template>
    <div>
        <h1>
            Liste des films
        </h1>
        <div class="films">
            <FilmComponent v-for="(film, ind) in films" v-model:film="films[ind]"/>
        </div>
    </div>
</template>
<script setup>
    import { reactive, onMounted } from "vue";

    import axios from 'axios';
    import FilmComponent from '../components/FilmComponent.vue';

    let films = reactive([]);
    onMounted(() => {
        axios
            .get(`http://localhost:5555/films`)
            .then((f) => {
                f.data.forEach(elt => films.push(elt))
            })
            .catch(() => erreur = 'Pb de récup des films')
    })
</script>
<style scoped>
    .films{
        display: flex;
        flex-wrap: wrap;
    }
</style>