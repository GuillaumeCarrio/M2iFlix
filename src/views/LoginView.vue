<template>
    <h1>Connexion</h1>
    <div>
        <Form @submit='connexion' @invalid-submit='afficherErreur'>
            <div>
                <label for='email'>Email</label>
                <Field id='email' name='email' />
                <ErrorMessage name='email'/>
            </div>
            <div>
                <label for='password'>Mot de passe</label>
                <Field id='password' name='password' />
                <ErrorMessage name='password'/>
            </div>
            <button>Se connecter</button>
            <button @click="signin">Pas encore de compte ?</button>
        </Form>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
    import { reactive, onMounted } from "vue";
    import { ErrorMessage, Field, Form } from 'vee-validate'

    import axios from 'axios';

    let pers = reactive([])
    let erreur= null
    const router = useRouter();

    const components= {
        ErrorMessage, Field, Form,
    }

    onMounted(() => {
        axios.get(`http://localhost:5555/users`).then((p) => {
            pers = p.data;
        })
        .catch(() => erreur = 'Pb de récup de données')
    })

    const connexion = (values) => {
        if(values && values.email && values.password){
            for(let i = 0; i<pers.length; i++){
                if (pers[i].email == values.email && pers[i].password == values.password){
                    router.push('films')
                }
            }
        }
    }

    const signin = () => {
        router.push('signin')
    }
</script>