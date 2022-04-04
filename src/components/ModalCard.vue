<template>
  <div class="col-12">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Danos tu Opinion : <br />{{ titleGame.name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="guardaOpinion(game.name)"
            >
              Editar Cambios
            </button>
            <button type="button" class="btn btn-primary">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ModalCard",
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  props: {
    titleGame: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations(["PUSH_MUTATION"]),
    guardaOpinion(game) {
      const methodsOpinion = {
        name: this.nombre,
        game: game,
        opinion: this.opinion,
      };
      this.PUSH_MUTATION(methodsOpinion);
    },
  },
};
</script>
