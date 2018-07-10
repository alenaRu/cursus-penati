<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import HelloComponent from './components/HelloComponent.vue'
  import Header from './components/Header.vue'

  export default {
    components: {
      HelloComponent,
      Header
    }
  }
</script>
