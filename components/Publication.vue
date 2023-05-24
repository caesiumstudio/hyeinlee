<template>
  <div class="mb-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 text-center">
          <img :src="item.cover" class="img-fluid shadow-strong item-img" />
        </div>
        <div class="col-md-6 text-center">
          <div class="img-wrapper">
            <a :href="'/academic-work/#' + item.id">
              <img :src="item.pdf" class="img-fluid shadow-strong" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr class="hr hr-blurry" />
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  }
}
</script>
<style scoped>
.img-wrapper {
  height: 500px;
  overflow: hidden;
}
.item-img {
  height: 500px;
}
</style>
