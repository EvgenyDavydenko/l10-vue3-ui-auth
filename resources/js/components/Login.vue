<template>
    <div>
        <h1>Login an account</h1>
    </div>

    <div class="p-2">
        <label for="email">Your e-mail</label>
        <input v-model="form.email" class="rounded border px-4 py-2" placeholder="Email" type="email">
    </div>
    <div class="p-2">
        <label for="password">Password</label>
        <input v-model="form.password" class="rounded border px-4 py-2" placeholder="Password" type="password">
    </div>

    <div class="p-2 mt-4">
        <button @click.prevent="login" class="rounded border py-2" type="submit">Login</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            form:{
                email: '',
                password:'',
            },
            errors:[]
        }
    },
    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', this.form).then(r =>{
                    localStorage.setItem('token', r.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({name: 'home'});
                    console.log(r);
                }).catch((error) =>{
                    this.errors = error.response.data.errors;
                })
            })
        }
    }
}
</script>