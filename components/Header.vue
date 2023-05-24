<template lang="html">
  <div class="p-5 bg-image jumbobg custom-jumbotron">
    <div class="container">
      <div class="d-flex justify-content-left align-items-left h-100">
        <div id="name" class="text-white">
          <span class="h1 mb-1 responsive-font-title">
            Hyein Lee
          </span><span id="korean-name" class="h4">&nbsp;&nbsp;&nbsp;&nbsp;이혜인 &nbsp;李慧仁</span>
          <h4 class="responsive-font-subtitle">
            Buddhism  &nbsp;and &nbsp;politics &nbsp;in &nbsp;Korea
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const scrollReveal = window.ScrollReveal();
    // scrollReveal.reveal("#intro");
    // scrollReveal.reveal("#name", { easing: 'ease-in' });
    // scrollReveal.reveal(".frontcover", {
    //   rotate: { x: 0, y: 50, z: 0 },
    //   duration: 1000
    // });
    // scrollReveal.reveal('#profile-photo', { scale: 0.99 });
    // scrollReveal.reveal('#profile-photo', { rotate: { x: 0, y: 0, z: 4 } });
  }
}
</script>
<style scoped>
.full-width {
  width: 100%;
}
.jumbobg {
  background-image: url('../assets/leafbg2.png');
  /* height: 200px; */
  background-position: bottom;
  background-repeat: no-repeat;
}
.custom-jumbotron {
  height: 278px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: stretch;
  background-size: cover;
}
@media (min-width: 1200px) {
  .responsive-font-title {
    font-weight: 400;
  }
  .responsive-font-subtitle {
    font-weight: 400;
  }
}
/* If the screen size is smaller than 1200px, set the font-size to 80px */
@media (max-width: 768px) {
  .custom-jumbotron {
    height: 178px;
    background-size: 200%;
  }
  .responsive-font-title {
    font-size: 24px;
    font-weight: 400;
  }
  .responsive-font-subtitle {
    font-size: 16px;
    font-weight: 400;
  }
  #korean-name {
    font-size: 16px;
  }
}
</style>
