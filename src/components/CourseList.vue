<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>Course List</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">No</th>
                <th style="width: 25%">Name</th>
                <th style="width: 46%">Description</th>
                <th style="width: 10.66%">Price &lpar;Baht&rpar;</th>
                <th style="width: 10%">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(course, index) in $store.getters.courses"
                :key="index"
              >
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ course.name }}</td>
                <td v-if="index !== editIndex">{{ course.description }}</td>
                <td v-if="index !== editIndex">{{ course.price }}</td>
                <td v-if="editMode == 0">
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteCourse(index, course._id)"
                  >
                    Delete
                  </button>
                  <button v-if="editMode == 0"
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index, course)"
                  >
                    Edit
                  </button>
                </td>

                <!-- Edit Button -->
                <td v-if="index === editIndex">
                  <input type="text" :value="course.name" class="form-control" v-on:change="name = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <input type="text" :value="course.description" class="form-control" v-on:change="description = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <input type="number" :value="course.price" class="form-control" v-on:change="price = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <button type="button" class="btn btn-success mr-2" v-on:click="editCourse(course._id)">Confirm</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit(index)"
                  >
                    Cancle
                  </button>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      name: "",
      description: "",
      price: 0,
      editMode: 0,
    };
  },
  created() {
    this.fetchCourse();
  },
  methods: {
    fetchCourse() {
      this.$store.dispatch("fetchCourse");
    },
    deleteCourse(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteCourse", payload);
    },
    openEdit(index, course) {
      this.editIndex = index;
      this.name = course.name;
      this.description = course.description;
      this.price = course.price;
      this.editMode = 1;
    },
    closeEdit() {
      this.editIndex = -1;
      this.name = "";
      this.description = "";
      this.price = 0;
      this.editMode = 0;
    },
    editCourse(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        name: this.name,
        description: this.description,
        price: this.price
      };
      this.$store.dispatch("editCourse", payload).then(this.closeEdit());
    }
  }
};
</script>