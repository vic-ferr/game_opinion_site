<template>
  <div class="opiniones">
    <h1>Lista de Opiniones</h1>
    <ListadoOpinion :listaOpinion="opinionState" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListadoOpinion from "@/components/ListadoOpinion.vue";
export default {
  name: "OpinionesView",
  computed: {
    ...mapState(["opinionState"]),
  },
  components: {
    ListadoOpinion,
  },
};
</script>
