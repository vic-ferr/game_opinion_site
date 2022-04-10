<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Persona</th>
              <th scope="col">Juego</th>
              <th scope="col">Opinion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(opinion, i) in opiniones" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ opinion.name }}</td>
              <td>{{ opinion.game }}</td>
              <td>{{ opinion.opinion }}</td>
              <td>
                <button class="btn bg-info text-dark">
                  <router-link
                    to="/editando/:id"
                    class="text-white text-decoration-none"
                    >Editar</router-link
                  >
                </button>
              </td>
              <td>
                <button
                  class="btn bg-danger text-white"
                  @click="BORRAR_OPINION(i)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "tablaOpinion",
  methods: {
    ...mapMutations(["BORRAR_OPINION"]),
  },
  props: {
    opiniones: {
      type: Array,
      default: () => {},
    },
  },
};
</script>
