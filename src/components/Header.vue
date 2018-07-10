<template>
  <v-toolbar app dense flat color="primary">
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <div v-for="(item, i) in menuItems" class="menu">
        {{i !== 0 ? ' | ' : ''}}
        <v-btn flat color="secondary">{{' ' + item}} </v-btn>
      </div>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down social" >
      <v-btn v-for="item in social" fab icon :class="item.name"  color="accent" small center>
        <v-icon color="white"  >{{item.icon}}</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: "Header",
    data: () => {
      return {
        menuItems: [
          'Sign Up',
          'Login',
          'RSS Feeds',
          'Archived News'
        ],
        social   : [
          {name: 'linkedin', icon: 'fab fa-linkedin-in'},
          {name: 'google', icon: 'fab fa-google'},
          {name: 'twitter', icon: 'fab fa-twitter'},
          {name: 'pinterest', icon: 'fab fa-pinterest'},
          {name: 'rss', icon: 'fas fa-rss'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .social, .menu {
    display     : flex;
    align-items : center;
    color: #999999;
  }

  .menu button{
    padding        : 0 10px;
    height         : 25px;
    min-width      : fit-content;
    text-transform : capitalize;
  }

 .social button {
   height: 35px;
   width: 35px;
   margin-left: 3px;

   &.linkedin:hover {
     background-color : #007bb5 !important;
   }
   &.twitter:hover {
     background-color : #1da1f2 !important;
   }
   &.pinterest:hover {
     background-color : #bd081c !important;
   }
   &.google:hover {
     background-color : #ea4335 !important;
   }
   &.rss:hover {
     background-color : #333333 !important;
   }
 }

</style>
