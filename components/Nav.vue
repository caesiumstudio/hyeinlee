<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 justify-content-between">
            <li :class="isActive(`/home`)">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li :class="isActive(`/cv`)">
              <a class="nav-link" href="/">CV</a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Publications
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/academic-work">
                  Academic Work
                </a>
                <a class="dropdown-item" href="/popular-writings">
                  Popular Writing
                </a>
              </ul>
            </li>
            <li :class="isActive(`/blogs/`)">
              <a class="nav-link" href="/my-academic-life">My Academic Life</a>
            </li>
            <li :class="isActive(`/alumni`)">
              <a class="nav-link" href="/resources">Resources</a>
            </li>
            <li :class="isActive(`/faqs`)">
              <a class="nav-link" href="/musings-on-east-asian-buddhism"
                >Musings on East Asian Buddhism</a
              >
            </li>
            <li :class="isActive(`/about`)">
              <a class="nav-link" href="/contactme">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return { cddLogo: '' };
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
  color: #013945 !important;
  font-weight: 600;
}
.navbar {
  box-shadow: none;
}
</style>
