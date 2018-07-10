<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <v-btn fab>
      <v-icon>fab fa-linkedin-in</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type    : String,
        required: true
      }
    }
  }
</script>
<style lang="stylus" scoped>
  /*h1*/
    /*color blue*/
</style>
