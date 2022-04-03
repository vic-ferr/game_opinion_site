<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link to="/games" class="nav-link"
            ><i class="fa-solid fa-headset fa-lg icon-ft"></i>Games
            Opiniones</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link"
                  ><i class="fa-solid fa-house fa-lg icon-home"></i
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/opinion" class="nav-link"
                  ><i class="fa-solid fa-comments fa-lg icon-opinion"></i
                  >Opiniones</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/administracion" class="nav-link"
                  ><i class="fas fa-users-cog mx-1 icon-opinion"></i
                  >Administracion</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuNav",
};
</script>

<style></style>
