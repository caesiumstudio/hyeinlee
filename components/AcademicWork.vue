<template>
  <div>
    <div v-for="item in this.items" :key="item.cover">
      <AcademicArticle :item="item" />
    </div>
  </div>
</template>

  <script>
import AcademicArticle from './AcademicArticle.vue';

export default {
  name: "NuxtTutorial",
  components: { AcademicArticle },
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

