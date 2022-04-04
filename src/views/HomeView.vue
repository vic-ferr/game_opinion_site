<template>
  <div class="home">
    <CardGames :games="gameState" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardGames from "@/components/CardGames.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["gameState"]),
  },

  components: {
    CardGames,
  },
};
</script>
