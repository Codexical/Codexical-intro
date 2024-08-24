<template>
  <v-app>
    <AppBar />
    <v-main style="margin-top: 6vh;">
      <router-view />
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import FooterView from './components/FooterView.vue'
export default {
  components: {
    AppBar,
    FooterView
  }
}
</script>

<style>
.v-main {
  background-color: #F8EDE3;
}
</style>
