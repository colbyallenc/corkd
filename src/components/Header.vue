<template>
    <v-card
      flat
      tile
    >
      <v-toolbar
        color="#400000"
        dense
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>
          <h1>Corkd</h1>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon
           color="#f7f7f1"
          >
           mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon
           color="#f7f7f1"
          >
          mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon
          color="#f7f7f1"
          >
          mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
</template>

<script>
export default {
  name: 'Header',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>


<style>
h1 {
  color: white;
  text-transform: lowercase;
}
</style>
