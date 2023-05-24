<template>
  <div class="">
    <hr class="hr hr-blurry" />
    <div v-for="item in this.items" :key="item.cover">
      <div class="container">
        <div class="h2 mt-5 text-left">{{ item.category }}</div>
      </div>
      <div class="container">
        <!-- card view -->
        <div v-show="isCardView" class="row row-cols-1 row-cols-md-2 g-4">
          <div v-for="pub in item.publications" :key="pub.cover">
            <div class="col">
              <Card id="hl-card" :item="pub" />
            </div>
          </div>
        </div>
        <!-- academic view -->
        <div
          v-show="!isCardView"
          v-for="pub in item.publications"
          :key="pub.cover"
        >
          <div class="mb-5">
            <div class="container py-5">
              <div class="row">
                <div
                  class="col-md-4 text-center bg-lightgray d-flex justify-content-center align-items-center flex-column py-3"
                >
                  <img :src="pub.cover" class="item-img shadow-bottom" />
                </div>
                <div class="col-md-8 text-center mt-3 mt-md-0">
                  <div class="img-wrapper">
                    <img
                      :src="pub.pdf"
                      class="img-fluid px-md-5 shadow-strong"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="hr hr-blurry" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Publication from './Publication.vue';

export default {
  name: 'NuxtTutorial',
  components: { Publication },
  data: () => {
    return {
      isCardView: false,
      items: [],
    };
  },
  created() {
    this._data.items = this.$store.state.popularWritings.items;
  },
  mounted() {
    const scrollReveal = window.ScrollReveal();
    // scrollReveal.reveal("#intro");
    scrollReveal.reveal("#hl-card", { scale: 0.8 });
    // scrollReveal.reveal(".frontcover", {
    //   rotate: { x: 0, y: 50, z: 0 },
    //   duration: 1000
    // });
    // scrollReveal.reveal('#hl-card', { scale: 0.99 });
    // scrollReveal.reveal('#hl-card', { rotate: { x: 0, y: 0, z: 4 } });
  }
}
</script>
<style scoped>
.img-wrapper {
  height: 500px;
  overflow: hidden;
}
.item-img {
  width: 50%;
}
</style>
