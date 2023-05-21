<template>
  <div class="">
    <div class="container">
      <div class="row p-3">
        <div class="col-md-4 mb-4">
          <img :src="item.cover" class="img-fluid shadow-strong" />
        </div>
        <div class="col-md-8 text-center">
          <a href="#">
            <div class="img-wrapper">
              <img
                :src="item.pdf"
                class="img-fluid pt-5 pb-5 pl-4 pr-4 shadow-strong"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
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
</style>
