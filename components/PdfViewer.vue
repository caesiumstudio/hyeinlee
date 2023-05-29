<template>
  <!-- Modal -->

  <div v-if="showModal" class="pdf-container h-100 w-100 shadow-strong">
    <div class="h-100 shadow-strong">
      <div class="d-flex flex-row justify-content-end bg-white top-bar">
        <button type="button" class="btn-close" aria-label="Close" @click="hide()"></button>
      </div>

      <iframe height="100%" width=100% :src="'/pdfjs/web/viewer.html?file=' + this.filePath"></iframe>
    </div>
  </div>
  <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen p-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ fileName }}</h5>
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="pdf-container h-100">
            <iframe height="100%" width=100% :src="'/pdfjs/web/viewer.html?file=' + this.filePath"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
  
<script>

export default {

  data() {
    return {
      filePath: '',
      showModal: false,
      pdfViewerId: '#pdf-viewer'
    }
  },
  methods: {
    hide: function () {
      this.showModal = false;
    },

    show: function (path) {
      this.filePath = path;
      this.showModal = true;

      if (window.location.href.search(this.pdfViewerId) < 0) {
        window.location.href += this.pdfViewerId;
      }
    }
  },
  mounted() {
    window.addEventListener('popstate', () => {
      if (window.location.href.search(this.pdfViewerId) < 0) {
        this.showModal = false;
      }
    });
  }

}
</script>
<style scoped>
.pdf-container {
  position: fixed;
  top: 0;
  z-index: 10000;
}

.top-bar {
  padding: 4px;
  border-bottom: 1px solid #eaeaea;
}
</style>