<template>
  <v-app id="footer">
    <v-footer
      color="#400000"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
