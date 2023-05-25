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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    color: #2c3e50;
    margin-top: 3em;
    padding-left: 20em;
    padding-right: 60em;
    box-sizing: border-box;
}
</style>
