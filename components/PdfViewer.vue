<template>
    <div class="pdf-container h-100">
      <iframe height="100%" width=100% :src="'/pdfjs/web/viewer.html?file=' + this.filePath"></iframe>
      </div>
  </template>
  
  <script>
  
  export default {
    components: {
    },
    props:{
      filePath: String
    },
  }
  </script>
  <style scoped></style>