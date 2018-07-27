<template>
  <v-layout>
    <v-flex xs6 column>
      <h1 class="display-1">
        {{title}}
      </h1>
      <h2 class="body-1">
        {{subtitle}}
      </h2>
    </v-flex>
    <v-flex xs6 >
      <v-layout column align-end>
        <v-flex>
          <p class="body-1 phoneText text--secondary" >
            {{`${phoneText}: ${phone}`}}
          </p>
        </v-flex >
        <v-flex class="search-form" >
          <v-text-field
              :label="(searchPlaceholder + '...')"
              class="search-form__input"
              outline
              hide-details
          />
          <v-btn color="primary">{{searchBtn}}</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "Title",
    data: () => {
      return {
        title            : 'Multipurpose',
        subtitle         : 'Free PSD Website template',
        phoneText        : 'call us now on',
        phone            : '+380 88 987 456 21',
        searchPlaceholder: 'search our website',
        searchBtn        : 'search'
      }
    }
  }
</script>

<style lang="stylus">
  .phoneText
    text-transform capitalize

  .search-form
    display flex
    justify-content flex-end
    height 100%

    button
      height initial
      margin 0 0 8px
      border-top-right-radius 10px
      border-bottom-right-radius 10px

    &__input

      .v-input__control .v-input__slot
        border-top-right-radius 0
        border-bottom-right-radius 0
        border-color #999999 !important
        border-right none !important
        min-height 40px

        .v-label
          top 7px
          text-transform capitalize

        & input
          margin 0
          padding-bottom 0
          padding-top 16px

</style>
