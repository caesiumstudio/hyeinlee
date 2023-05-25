<template>
  <div>
    <Header />
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

html {
  scroll-behavior: smooth;
}

.hl-blockquote {
  border-left-color: teal;
}

.teal {
  color: #013945 !important;
}
.bgcolor-white {
  background-color: white;
}
.bg-lightgray {
  background-color: #f3f3f3;
}
.bg-darkgray {
  background-color: #70c5b9;
}
.light-teal {
  background-color: #70c5b9;
  /* background-color: #cae1db; */
}
.light-pink {
  background-color: #f9f2e5;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
.shadow-strong {
  box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 25%);
}
.shadow-bottom {
  box-shadow: 0px 10px 8px 0px rgb(0 0 0 / 60%);
}
text-black {
  color: black !important;
}
</style>
