<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg ftco-navbar navMenu" id="ftco-navbar">  <!--ftco-navbar-light-->
    <div class="container">
      <router-link class="navbar-brand" to="/" style="color:black; font-size:16pt;text-transform: uppercase"><b>Translate</b></router-link>
      <div class="order-lg-last">
        <p class="mb-0 d-flex">
          <router-link to="/login" class="d-flex align-items-center justify-content-center" style="color:black;"><b>Login</b></router-link>
        </p>
      </div>
    </div>
  </nav>
  <router-view/>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
@import './css/chunk-vendors.3a837761.css';
@import './css/app.c17feffc.css';
@import 'https://fonts.googleapis.com/css?family=Roboto:400,100,300,700';
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import './css/A.style.css.pagespeed.cf.UkYzw701_J.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: #A569BD;
}
.navMenu{
  background-color:white;
}
</style>
