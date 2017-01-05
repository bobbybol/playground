<template>
    <div class="test">
        <div v-html="title"></div>
        <p>{{user.firstName}}</p>
        <p v-if="showName" v-text="user.firstName"></p>
        <button v-on:click="greet">Say Greeting</button>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                title: "<h2>Hello World<h2>",
                user: {
                    firstName: 'John',
                    lastName: 'Doe'
                },
                showName: false
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>