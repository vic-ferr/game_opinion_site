<template>
  <div class="col-12">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'miModal' + id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">
              Danos tu Opinion : <br />{{ titleGame }}
            </h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label
              >nombre : <input v-model="nombre" type="text" name="nombre"
            /></label>

            <div class="form-floating">
              opinion
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
                v-model="opinion"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="borraOpinion()"
            >
              Limpiar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="guardaOpinion(titleGame)"
            >
              Guardar Opinion
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
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    ...mapMutations(["PUSH_MUTATION"]),
    guardaOpinion(game) {
      const opinionCard = {
        titleGame: this.name,
        game: game,
        opinion: this.opinion,
        name: this.nombre,
      };
      this.PUSH_MUTATION(opinionCard);
      this.borraOpinion();
    },
    borraOpinion() {
      this.nombre = "";
      this.opinion = "";
    },
  },
};
</script>
