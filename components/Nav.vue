<template lang="html">
  <nav class="navbar navbar-expand-lg mt-3 mb-3">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#basicExampleNav"
      aria-controls="basicExampleNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="basicExampleNav">
      <ul class="navbar-nav w-100 justify-content-between" >
        <li :class="isActive(`/home`)">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li :class="isActive(`/cv`)">
          <a class="nav-link" href="/">CV</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Publications</a
          >
          <div
            class="dropdown-menu dropdown-primary"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a class="dropdown-item" href="/popular-writings">
              Popular Writings
            </a>
            <a class="dropdown-item" href="/academic-work">
              Academic Work
            </a>
          </div>
        </li>
        <li :class="isActive(`/blogs/`)">
          <a class="nav-link" href="/my-academic-life">My Academic Life</a>
        </li>
        <li :class="isActive(`/alumni`)">
          <a class="nav-link" href="/resources">Resources</a>
        </li>
        <li :class="isActive(`/faqs`)">
          <a class="nav-link" href="/musings-on-east-asian-buddhism">Musings on East Asian Buddhism</a>
        </li>
        <li :class="isActive(`/about`)">
          <a class="nav-link" href="/contactme">Contact Me</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return { cddLogo: "" };
  },
  methods: {
    isActive: function (route) {
      return route == this.$route.path ? 'nav-item active' : 'nav-item';
    },
  },
}
</script>

<style scoped>
ul li a {
  color: teal !important;
  font-weight: 400;
}
.navbar {
  box-shadow: none;
}
</style>