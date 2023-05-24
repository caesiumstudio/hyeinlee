<template>
  <div class="light-teal">
    <div class="container pt-5 pb-md-5">
      <div class="row pt-md-5 pb-md-5">
        <div class="col-md-4">
          <img
            id="profile-photo"
            :src="photo"
            class="img-thumbnail shadow-strong"
          />
          <p class="text-muted small">© Marcus Reichmann</p>
        </div>
        <div
          id="intro"
          class="col-md-8 d-flex flex-column align-items-start justify-content-between"
        >
          <p
            class="text-justify text-black"
            v-for="line in this.intro"
            :key="line.p"
            v-html="line.p"
          ></p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data: () => {
    return {
      intro: [],
      photo: {}
    };
  },
  created() {
    this._data.intro = this.$store.state.profileData.intro;
    this._data.photo = this.$store.state.profileData.photo.img;
  },
  mounted() {
    const scrollReveal = window.ScrollReveal();
    // scrollReveal.reveal("#intro");
    scrollReveal.reveal("#intro", { scale: 0.8 });
    // scrollReveal.reveal(".frontcover", {
    //   rotate: { x: 0, y: 50, z: 0 },
    //   duration: 1000
    // });
    scrollReveal.reveal('#profile-photo', { scale: 0.99 });
    scrollReveal.reveal('#profile-photo', { rotate: { x: 0, y: 0, z: 4 } });
  }
}
</script>
