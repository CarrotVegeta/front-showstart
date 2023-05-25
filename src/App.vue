<template>
    <CookieVue/>
    <ActivityDetailVue/>
</template>

<script>
import CookieVue from "@/components/Cookie";
import ActivityDetailVue from "@/components/ActivityDetail";

export default {
    name: 'App',
    components: {
        CookieVue,
        ActivityDetailVue,
    }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    color: #2c3e50;
    margin-top: 3em;
    padding: 0 10%;
    box-sizing: border-box;
}
</style>
