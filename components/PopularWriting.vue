<template>
  <div class="">
    <!-- pdf viewer -->
    <PdfViewer ref="pdfViewer" />
    <hr class="hr hr-blurry" />
    <div v-for="item in this.items" :key="item.cover">
      <div class="container">
        <div class="category h2 mt-5 text-left teal">{{ item.category }}</div>
      </div>
      <div class="container">
        <!-- academic view -->
        <div v-for="pub in item.publications" :key="pub.cover">
          <div class="mb-5">
            <div class="container py-5">
              <div class="row">
                <div
                  class="col-md-4 text-center bg-lightgray d-flex justify-content-center align-items-center flex-column py-3">
                  <img :src="pub.cover" class="item-img shadow-bottom" />
                </div>
                <div class="col-md-8 text-center">
                  <div class="img-wrapper mx-lg-2 my-5 my-md-0 px-lg-2 mx-xl-5 px-xl-5">
                    <img :src="pub.pdfPreview" @click="showPdf(pub.filePath)"
                      class="pdf-preview img-fluid px-md-5 shadow-strong" />
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
import PdfViewer from './PdfViewer.vue';
import Publication from './Publication.vue';

export default {
  name: 'NuxtTutorial',
  components: { Publication, PdfViewer },
  data: () => {
    return {
      isCardView: false,
      items: [],
      filePath: '',
      fileName: '',
      showModal: false
    };
  },
  created() {
    this._data.items = this.$store.state.popularWritings.items;
  },
  methods: {
    showPdf: function (filePath) {
      this.filePath = filePath;
      this.$refs.pdfViewer.show(filePath)
      this.showModal = true;
    },
  },
  mounted() {

    const scrollReveal = window.ScrollReveal();
    // scrollReveal.reveal("#intro");
    scrollReveal.reveal(".item-img", { scale: 0.8, rotate: { x: 0, y: 0, z: -20 } });
    scrollReveal.reveal(".pdf-preview", { scale: 0.8 });
    scrollReveal.reveal(".category", { scale: 0.8 });

    // scrollReveal.reveal(".frontcover", {
    //   rotate: { x: 0, y: 50, z: 0 },
    //   duration: 1000
    // });
    
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

@media (min-width: 768px) and (max-width: 960px) {
  .img-wrapper {
    height: 100%;
  }

}
</style>
