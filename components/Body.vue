<template>
  <div>
    <AboutMe />
    <div class="h2 text-center mt-5 mb-3">Recent Work</div>
    <!-- <hr class="hr" /> -->
    <hr class="hr hr-blurry" />
    <Publication :item="items[0]" />
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data: () => {
    return {
      items: []
    };
  },
  created() {
    this._data.items = this.$store.state.academicWork.items;
  },
}
</script>
<style scoped>
.shadow-strong {
  box-shadow: 0px 6px 20px 0px #d7d7d7;
}
.img-wrapper {
  height: 500px;
  overflow: hidden;
}
</style>

