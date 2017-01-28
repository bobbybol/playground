<template>
    <div class="test">
        <div v-html="title"></div>
        <p>{{user.firstName}}</p>
        <p v-if="showName" v-text="user.firstName"></p>
        <button v-on:click="greet('Haiaia')">Say Greeting</button>
        
        <hr>
        <label>First Name</label>
        <input type="text" v-model="user.firstName">
        <br>
        <label>Last Name</label>
        <input type="text" v-model="user.lastName"> 
        <hr>
        <h3>{{fullName}}</h3>
        <h4>{{msg}}</h4>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'Default value'
            }
        },
        data() {
            return {
                title: "<h2>Hello World<h2>",
                user: {
                    firstName: 'John',
                    lastName: 'Doe'
                },
                showName: true,
                fullName: 'latidah'
            }
        },
        methods: {
            greet (greeting) {
                alert(greeting);
            }
        },
        computed: {
            fullName () {
                return this.user.firstName + ' ' + this.user.lastName;
            }
        }
    }
</script>

<style scoped>

</style>