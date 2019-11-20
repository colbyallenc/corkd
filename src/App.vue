<template>
  <div class="projects">
    <!-- <h1 class="subheading grey--text"> Projects</h1> -->
    <!-- <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
           <v-flex xs12 md6>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
      </v-layout> -->
    <!-- </v-container> -->
    <home />
  </div>
</template>


<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>
