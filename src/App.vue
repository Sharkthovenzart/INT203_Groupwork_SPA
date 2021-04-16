<template>
  <div>
    <!-- Navigation by Router -->
    <div>
      <router-link to="/">Sharkthoven</router-link>
    </div>
    <div>
      <router-link to="/course_list">Course List</router-link>
    </div>
    <div>
      <router-link to="/create_course">Add Course</router-link>
    </div>

    <!-- Preview by Router -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
