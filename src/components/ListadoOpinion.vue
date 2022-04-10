<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="accordion" id="accordionExample">
          <div
            class="accordion-item"
            v-for="(opinion, i) in opiniones"
            :key="i"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseOne' + i"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Nueva Opinion Creada Por : {{ opinion.name }} para el juego
                {{ opinion.game }}
              </button>
            </h2>
            <div
              :id="'collapseOne' + i"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="fw-bold">Opinion: </span>{{ opinion.opinion }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListadoOpinion",
  props: {
    opiniones: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
