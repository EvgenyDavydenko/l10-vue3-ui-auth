<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Home Component</div>

                    <div class="card-body">
                        Hello {{ user.name }}! Your email: {{ user.email }}.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                user: {
                    name: '',
                    email: ''
                }
            }
        },
        mounted() {
            axios.get('/api/user').then(r => {
                this.user.name = r.data.name;
                this.user.email = r.data.email;
                console.log(r);
            }).catch(error => {
                console.log(error.response.data.errors);
            })
        }
    }
</script>
