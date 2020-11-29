<template>
  <div class="home">
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
