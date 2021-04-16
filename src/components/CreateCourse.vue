<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>Add Course</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addCourse()">
            <div class="form-group">
              <label>Course Name</label>
              <input type="text" class="form-control" placeholder="Enter course name..." v-model="name"/>
            </div>
            <div class="form-group">
              <label>Course Description</label>
              <input type="text" class="form-control" placeholder="Enter course description..." v-model="description"/>
            </div>
            <div class="form-group">
              <label>Course Price</label>
              <input type="number" class="form-control" placeholder="Enter course price..." v-model="price"/>
            </div>
            <button type="submit" class="btn btn-primary">Add new course</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      price: 0
    };
  },
  methods: {
    addCourse() {
      if (this.name) {
        let payload = { name: this.name, description: this.description, price: this.price };
        this.$store.dispatch("addCourse", payload);
      }
    }
  }
};
</script>