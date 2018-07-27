<template>
  <v-layout class="page-heading">
    <v-flex xs12 >
      <h1 class="display-1 text--accent">
        {{heading}}
      </h1>
    </v-flex>
    <v-flex xs6>
      <h2 class="subheading text--secondary font-italic">
        {{`\"${subheading}\"`}}
      </h2>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "PageHeading",
    data: () => {
      return {
        heading   : 'cursus penati saccum ut curebitur nulla',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .page-heading
    display flex
    flex-direction column
    align-items center

    .display-1
      text-transform uppercase
      margin 20px auto
      color: #957964

    .subheading
      text-align center

</style>
