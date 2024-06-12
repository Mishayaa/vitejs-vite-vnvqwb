<template>
<div id="app">
  <Header />
  <RouterView />
  <Footer />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
name: 'App',
components: {
  Header,
  Footer
}
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
body {
padding-top: 56px;
}
</style>
