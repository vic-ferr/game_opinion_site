<template>
  <div class="home">
    <CardGames />
  </div>
</template>

<script>
// @ is an alias to /src
import CardGames from "@/components/CardGames.vue";

export default {
  name: "HomeView",
  components: {
    CardGames,
  },
};
</script>
