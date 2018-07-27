<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <Title />
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
  import HelloComponent from './components/HelloComponent.vue';
  import Header from './components/Header.vue';
  import Title from './components/Title.vue';

  export default {
    components: {
      HelloComponent,
      Header,
      Title,
    }
  }
</script>

<style scoped lang="stylus">


</style>
