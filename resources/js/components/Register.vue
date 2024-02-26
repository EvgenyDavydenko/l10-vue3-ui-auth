<template>

    <div>
        <h1>Register an account</h1>
    </div>
    <div class="p-2 w-full">
        <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}</span>

        <label class="w-full" for="name">Name</label>
        <input class="rounded border px-4 py-2" placeholder="Name" type="text" v-model="form.name" >
    </div>
    <div class="p-2 w-full">
        <label for="email">Your e-mail</label>
        <input class="rounded border px-4 py-2" placeholder="Email" type="email" v-model="form.email">
    </div>
    <div class="p-2 w-full">
        <label for="password">Password</label>
        <input class="rounded border px-4 py-2" placeholder="Password" type="password" v-model="form.password">
    </div>
    <div class="p-2 w-full">
        <label for="confirm_password">Confirm Password</label>
        <input class="rounded border px-4 py-2" placeholder="Confirm Password" type="password" v-model="form.password_confirmation">
    </div>
    <div class="p-2 w-full mt-4">
        <button @click.prevent="saveForm" type="submit" class="rounded border py-2">Register</button>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            form:{
                name: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', this.form).then(r =>{
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
