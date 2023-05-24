<template>
  <div class="light-teal">
    <div class="container pt-5 pb-5">
      <div class="row pt-md-5 pb-md-5">
        <div class="col-md-12 col-sm-12 d-block d-md-none">
          <img
            id="hl-profile-photo"
            :src="photo"
            class="img-fluid img-thumbnail shadow-strong"
          />

          <div class="py-3">
            <div class="h1 teal">{{ contactMe.heading }}</div>
            <hr class="hr hr-blurry w-100 text-black" />
            <p
              class="contact-text pl-1 pt-4 text-black"
              v-for="p in contactMe.p"
              :key="p"
              v-html="p"
            ></p>
          </div>
          <a class="btn bgcolor-white" href="mailto:contact@hyeinlee.com">
            <span class=""><i class="far fa-envelope"></i></span>
            <span class="">Send Email</span>
          </a>
        </div>
        <div id="contact-container" class="col-md-12 col-sm-12 d-s-none">
          <table class="w-100 d-none d-md-block">
            <tbody>
              <tr>
                <td>
                  <img
                    id="hl-profile-photo"
                    :src="photo"
                    class="img-fluid img-thumbnail shadow-strong"
                  />
                </td>
                <td
                  :class="isFirefox ? 'h-100' : ''"
                  style="padding-left: 20px"
                >
                  <div
                    class="text-container d-flex flex-column align-items-start justify-content-between"
                  >
                    <div>
                      <div class="h3 teal">{{ contactMe.heading }}</div>
                      <hr class="hr hr-blurry w-100 text-black" />
                      <div
                        class="contact-text pl-1 text-black"
                        v-for="p in contactMe.p"
                        :key="p"
                      >
                        <span class="teal" v-html="p"></span>
                      </div>
                    </div>
                    <a
                      class="btn bgcolor-white"
                      href="mailto:contact@hyeinlee.com"
                    >
                      <span class=""><i class="far fa-envelope"></i></span>
                      <span class="">Send Email</span>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="small text-gray">© Marcus Reichmann</p>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      contactMe: [],
      photo: {},
      isFirefox: false
    };
  },
  created() {
    this._data.contactMe = this.$store.state.profileData.contactMe;
    this._data.photo = this.$store.state.profileData.photo.img;
  },
  mounted() {
    const scrollReveal = window.ScrollReveal();
    scrollReveal.reveal('#intro', { scale: 0.8 });
    scrollReveal.reveal('#hl-profile-photo', { scale: 0.99 });
    scrollReveal.reveal('#hl-profile-photo', { rotate: { x: 0, y: 0, z: 4 } });
    this.isFirefox = navigator.userAgent.toLowerCase().search('firefox') >= 0;
  }
}
</script>
<style scoped>
table,
tr,
td {
  /* border: 1px solid red; */
  height: 1px;
}
#hl-profile-photo {
  width: 360px;
}
.text-container {
  height: 100%;
  /* background-color: red;
  border: 1px solid red; */
}
#contact-container {
  height: 300px;
}
.contact-text {
  font-size: 1.1em;
  line-height: 2em;
}
</style>
