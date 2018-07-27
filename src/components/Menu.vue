<template>
  <v-layout>
    <v-flex xs12 d-flex align-end class="menuBtn">
      <v-btn
          v-for="(item, i) in items"

          :key="i"
          depressed
          color="primary"
      >
        {{item}}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "Menu",
    data: () => {
      return {
        items: [
          'homepage',
          'style demo',
          'full width',
          'dropdown',
          'gallery',
          'portfolio',
          'a link text',
        ],
      }
    },
  }
</script>

<style lang="stylus">
  .menuBtn
    margin 20px 0
    height 80px

    button
      margin 0
      height inherit
      border-radius 0
      border-right 2px solid #999999 !important

    & > :first-child
      border-top-left-radius 15px
      border-bottom-left-radius 15px

    & > :last-child
      border-top-right-radius 15px
      border-bottom-right-radius 15px
      border-right none !important

</style>
