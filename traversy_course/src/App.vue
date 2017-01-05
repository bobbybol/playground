<template>
    <div id="app">
        <h1>Hello from App parent</h1>
        <test></test>
    </div>
</template>

<script>
import Test from './components/test'
    
export default {
    name: 'app',
    components: {
        Test
    }
}
</script>
