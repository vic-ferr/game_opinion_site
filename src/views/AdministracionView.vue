<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Editar Opiniones</h1>
      </div>
      <div class="col-12" v-if="opinionState.length === 0">
        <div class="alert alert-danger m-4 text-center">
          <h3>No Existen Opiniones Que Administrar</h3>
        </div>
      </div>
      <div class="col-12" v-else>
        <TablaOpinion :opiniones="opinionState" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TablaOpinion from "@/components/TablaOpinion.vue";
export default {
  name: "AdministracionView",
  computed: {
    ...mapState(["opinionState"]),
  },
  components: {
    TablaOpinion,
  },
};
</script>
