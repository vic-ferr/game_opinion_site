<template>
  <div id="app">
    <MenuNav />
    <router-view />
  </div>
</template>
<script>
import MenuNav from "@/components/MenuNav.vue";
export default {
  name: "app",
  components: {
    MenuNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon-ft {
  color: white;
  margin-right: 5px;
}
.icon-home {
  color: white;
  margin-right: 5px;
}
.icon-opinion {
  color: white;
  margin-right: 5px;
}
.icon-admin {
  color: white;
  margin-right: 5px;
}
.nav-link {
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f1f4f7;
}

nav a.router-link-exact-active {
  color: #f5faf8;
}
</style>
