<template>
  <div>
    <!-- Navigation by Router -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Sharkthoven</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/course_list" class="nav-link">Course List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create_course" class="nav-link">Create Course</router-link>
        </li>
      </div>
    </nav>

    <!-- Preview by Router -->
    <router-view></router-view>
  </div>
</template>

<script>
import { store } from "./store/store";
export default {
  store
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
</style>
