<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4 py-4"
        v-for="(game, i) in games"
        :key="i"
      >
        <ModalCard :titleGame="game.name" :id="i" />
        <div class="card" style="width: 18rem">
          <img
            :src="game.background_image"
            class="card-img-top"
            alt="video·juegos"
          />
          <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ game.rating }}</li>
            <li class="list-group-item">{{ game.released }}</li>
            <li class="list-group-item">{{ game.updated }}</li>
          </ul>

          <div class="card-body">
            <button
              class="btn btn-primary"
              @click="addopinion(game)"
              data-bs-toggle="modal"
              :data-bs-target="'#miModal' + i"
            >
              Opinar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalCard from "./ModalCard.vue";
export default {
  name: "CardGames",
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addopinion(game) {
      console.log(game);
    },
  },
  components: {
    ModalCard,
  },
};
</script>
