<template>
      <div class="flex flex-wrap w-full justify-center items-center pt-56">
        <div class="flex flex-wrap max-w-xl">
            <div class="p-2 text-2xl text-gray-800 font-semibold"><h1>Login an account</h1></div>

            <div class="p-2 w-full">
                <label for="email">Your e-mail</label>
                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                    placeholder="Email" type="email" v-model="form.email">
            </div>
            <div class="p-2 w-full">
                <label for="password">Password</label>
                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                    placeholder="Password" type="password" v-model="form.password" name="password">
            </div>

            <div class="p-2 w-full mt-4">
                <button @click.prevent="login" type="submit"
                    class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
            </div>
        </div> 
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
                    console.log(r);
                }).catch((error) =>{
                    this.errors = error.response.data.errors;
                })
            })
        }
    }
}
</script>