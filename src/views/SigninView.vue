<template>
    <h1>
        Créez votre compte
    </h1>
    <div>
        <Form @submit='ajouterPersonne' :validation-schema="schema" @invalid-submit='afficherErreur'>
            <div>
                <label for='firstname'>
                    Nom
                </label>
                <Field id='firstname' name='firstname' />
                <ErrorMessage name='firstname'/>
            </div>
            <div>
                <label for='lastname'>
                    Prénom
                </label>
                <Field id='lastname' name='lastname' />
                <ErrorMessage name='lastname'/>
            </div>
            <div>
                <label for='age'>
                    Age
                </label>
                <Field id='age' name='age' />
                <ErrorMessage name='age'/>
            </div>
            <div>
                <label for='email'>
                    Email
                </label>
                <Field id='email' name='email' />
                <ErrorMessage name='email'/>
            </div>
            <div>
                <label for='password'>
                    Mot de passe
                </label>
                <Field id='password' name='password' />
                <ErrorMessage name='password'/>
            </div>
            <button>
                Créer
            </button>
        </Form>
    </div>
</template>
<script setup>
    import { useRouter } from "vue-router";
    import { ErrorMessage, Field, Form } from 'vee-validate';

    import axios from 'axios';
    import * as yup from 'yup';

    const router = useRouter();
    const components= {
        ErrorMessage, Field, Form,
    }
    const  validatePassword = () => yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, (params) => `Ce mot de pass ne respecte pas les conditions de sécurités`)
    const schema= yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        age: yup.number().required().min(16).max(130),
        email: yup.string().required().email(),
        password: validatePassword(),
    })
    const afficherErreur = () => {
        console.log('Formulaire Invalide')
    }
    const emit = defineEmits(['sendData'])
    const ajouterPersonne = (values) => {
        axios
            .post(`http://localhost:5555/users`, values)
            .then(res => emit('sendData', res.data))
            .then(router.push('login'))
    }
</script>