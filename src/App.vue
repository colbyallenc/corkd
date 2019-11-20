<template>
  <div class="projects">
    <Header />
    <home />
    <Footer />
  </div>
</template>


<script>
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Footer,
  },
};
</script>
