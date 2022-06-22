<template>
  <CookieVue />
  <ActivityDetailVue />
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
  color: #2c3e50;
  margin-top: 0px;
  padding-left: 20em;
  padding-right: 20em;
}
</style>
