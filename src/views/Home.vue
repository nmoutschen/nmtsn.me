<template>
  <div class="home">
    <WhoAmI/>
  </div>
</template>

<script>
// @ is an alias to /src
import WhoAmI from "@/components/WhoAmI.vue";

export default {
  name: "home",
  components: {
    WhoAmI
  }
};
</script>
