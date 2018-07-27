<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <Title />
        <Menu />
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
  import HelloComponent from './components/HelloComponent.vue';
  import Header from './components/Header.vue';
  import Title from './components/Title.vue';
  import Menu from './components/Menu.vue';

  export default {
    components: {
      HelloComponent,
      Header,
      Title,
      Menu,
    }
  }
</script>

<style scoped lang="stylus">


</style>
