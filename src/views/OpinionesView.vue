<template>
  <div class="opiniones">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Lista de Opiniones</h2>
          <div v-if="opinionState.length === 0">
            <div class="alert alert-danger">
              <h3>No Hay Opiniones</h3>
            </div>
          </div>
          <div v-else>
            <ListadoOpinion :opiniones="opinionState" />
          </div>
        </div>
      </div>
    </div>
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
