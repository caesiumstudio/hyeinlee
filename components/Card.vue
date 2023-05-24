<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="item.cover"
          alt="Trendy Pants and Shoes"
          class="img-fluid rounded-start"
        />
      </div>
      <div class="col-md-8">
        <div
          class="card-body h-100 d-flex flex-column align-items-start justify-content-between"
        >
          <h5 class="card-title">Article title</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <a href="#"><small>Download</small></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
}
</script>