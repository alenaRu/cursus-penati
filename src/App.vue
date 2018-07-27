<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <Title />
        <Menu />
        <PageHeading />
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
  import PageHeading from './components/PageHeading.vue';

  export default {
    components: {
      HelloComponent,
      Header,
      Title,
      Menu,
      PageHeading,
    }
  }
</script>

<style scoped lang="stylus">


</style>
