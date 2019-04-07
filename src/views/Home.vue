<template>
  <div class="home">
    <WhoAmI />
    <FindMe />
  </div>
</template>

<script>
// @ is an alias to /src
import WhoAmI from "@/components/WhoAmI.vue";
import FindMe from "@/components/FindMe.vue";

export default {
  name: "home",
  components: {
    WhoAmI,
    FindMe
  }
};
</script>

<style lang="less">
.home section {
  margin-bottom: 2rem;
}
</style>
