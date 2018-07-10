<template>
  <div class="full-width center-content">
    <hello-component name="World"/>
  </div>
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
