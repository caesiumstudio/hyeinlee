<template lang="html">
  <div class="p-5 bg-image jumbobg custom-jumbotron">
    <div class="container">
      <div class="d-flex justify-content-left align-items-left h-100">
        <div class="text-white">
          <h1 class="mb-1 responsive-font-title">
            Hyein Lee &nbsp;&nbsp;&nbsp; <small>이혜인</small>
          </h1>
          <h4 class="responsive-font-subtitle">
            Buddhism and politics in Korea
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-width {
  width: 100%;
}
.jumbobg {
  background-image: url('../assets/leafbg.png');
  height: 400px;
  background-position: bottom;
  background-repeat: no-repeat;
}
.custom-jumbotron {
  height: 24rem;
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
@media (max-width: 1199.98px) {
  .responsive-font-title {
    font-size: 24px;
    font-weight: 400;
  }
  .responsive-font-subtitle {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
