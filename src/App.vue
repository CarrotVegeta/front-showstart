<template>
  <CookieVue />
  <ActivityDetailVue />
  <TicketList />
</template>

<script>
import CookieVue from "@/components/Cookie";
import ActivityDetailVue from "@/components/ActivityDetail";
import TicketList from "@/components/TicketList";
export default {
  name: 'App',
  components: {
    CookieVue,
    ActivityDetailVue,
    TicketList,
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
