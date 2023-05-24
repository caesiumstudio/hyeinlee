<template>
  <div class="mb-5 shadow-inner">
    <div class="container py-5">
      <div :id="item.id" class="row">
        <div id="hl-cover" class="col-md-4 text-center bg-lightgray py-4">
          <img :src="item.cover" class="item-img shadow-bottom" />
          <div class="small mt-4">
            <a href="https://doi.org/10.1080/14639947.2021.2089426"
              >https://doi.org/10.1080/14639947.2021.2089426</a
            >
          </div>
        </div>
        <div id="hl-center" class="col-md-8 text-left px-5">
          <div class="h4 pt-4 pt-md-0">"{{ item.title }}"</div>
          <div class="text-center w-100 py-4">
            <i>Contemporary Buddhism</i>, 22:1-2 (2021): 380-397
          </div>
          <hr class="hr hr-blurry" />
          <div class="line text-black text-justify" v-html="item.text"></div>
        </div>
      </div>
    </div>
    <hr class="hr hr-blurry" />
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  mounted() {
    const scrollReveal = window.ScrollReveal();
    scrollReveal.reveal("#hl-cover", { scale: 0.9 });
    scrollReveal.reveal("#hl-center", { scale: 0.9 });
  }
}
</script>
<style scoped>
.line {
  line-height: 2em;
}
.article {
  background: #fafafa;
}
.img-wrapper {
  max-height: 500px;
  width: 100%;
  background-color: white;
  overflow: hidden;
}
.item-img {
  width: 50%;
}
</style>
