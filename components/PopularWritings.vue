<template>
  <div class="container">
    <div v-for="item in this.items" :key="item.cover">
      <div class="h2 text-center">{{ item.category }}</div>
      <div v-for="publication in item.publications" :key="publication.cover">
        <Publication :item="publication" />
      </div>
    </div>
  </div>
</template>

  <script>
import Publication from './Publication.vue';

export default {
  name: "NuxtTutorial",
  components: { Publication },
  data: () => {
    return {
      items: []
    };
  },
  created() {
    this._data.items = this.$store.state.popularWritings.items;
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

