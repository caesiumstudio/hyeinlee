<template>
  <div>
    <div class="light-teal">
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/profile.jpeg" class="img-fluid pt-1" />
            <p class="text-muted small">© Marcus Reichmann</p>
          </div>
          <div class="col-md-8">
            <p class="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p class="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h2 text-center mt-5 mb-3">Recent Work</div>
    <hr />
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

