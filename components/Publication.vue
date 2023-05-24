<template>
  <div class="mb-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 text-center bg-lightgray py-4">
          <img :src="item.cover" class="img-fluid shadow-bottom cover-img" />
        </div>
        <div class="col-md-6 mt-4 mt-md-0 text-center">
          <div class="img-wrapper">
            <a :href="'/academic-work/#' + item.id">
              <img :src="item.pdf" class="img-fluid shadow-bottom" />
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
.cover-img {
  height: 450px;
}
</style>
