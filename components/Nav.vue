<template>
  <nav
    class="navbar is-shadowless"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-hidden-desktop">
      <!-- <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a> -->
      <div class="navbar-item">
        <div class="buttons">
          <a class="button">
            <strong>Contact Me</strong>
          </a>
        </div>
      </div>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start navbar-center">
        <a class="navbar-item"> Home </a>
        <a class="navbar-item"> CV </a>
        <a class="navbar-item"> Publications </a>
        <a class="navbar-item"> My Academic Life</a>
        <a class="navbar-item"> Resources</a>
        <a class="navbar-item"> Musings on East Asian Buddhism</a>
        <a class="navbar-item"> Contact</a>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div> -->
      </div>

      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {

  mounted() {
    const $ = window.$;
    $(".navbar-burger").click(function () {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });
  },
  methods: {

  }
}

</script>
<style>
@media only screen and (min-width: 760px) {
  .navbar-center {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
