<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ThumnailCanvas />
  </div>
</template>

<script>
// @ is an alias to /src
import ThumnailCanvas from "@/components/ThumnailCanvas.vue";

export default {
  name: "Home",
  components: {
    ThumnailCanvas
  }
};
</script>
