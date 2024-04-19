<template>
    <div>
        <h1>
            Liste de vos films
        </h1>
        <div class="films" v-if="films.length > 0">
            <MyfilmComponent v-for="(film, ind) in films" v-model:film="films[ind]"/>
        </div>
        <div v-else>
            <p>Vous n'avez aucun film.</p>
            <button @click="add">
                En ajouter ?
            </button>
        </div>
    </div>
</template>
<script setup>
    import {useRouter} from "vue-router";
    import { reactive, onMounted } from "vue";

    import axios from 'axios';
    import MyfilmComponent from '../components/MyfilmComponent.vue';

    let films = reactive([]);
    const filmsid = JSON.parse(localStorage.getItem('myFilms'));
    onMounted(() => {
        axios
            .get(`http://localhost:5555/films`)
            .then((f) => {
                f.data.forEach(elt => {
                    if(filmsid.includes(elt.id)){
                        films.push(elt)
                    }
                })
            })
            .catch(() => erreur = 'Pb de récup des films')
    })
    const router = useRouter();
    const add = () => {
        router.push('films')
    }
</script>
<style scoped>
    button{
        border: solid 2px black;
        margin: 2vh;
        background-color: cornflowerblue;
    }
    .films{
        display: flex;
        flex-wrap: wrap;
    }
</style>