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
                    v-on:click="deleteCourse(index)"
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
                  <input type="text" :value="name" v-on:change="name = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <input type="text" :value="description" v-on:change="description = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <input type="number" :value="price" v-on:change="price = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <button type="button" class="btn btn-success" v-on:click="editCourse()">Confirm</button>
                  <button
                    type="button"
                    class="btn btn-secondary mr-2"
                    v-on:click="closeEdit()"
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
  methods: {
    deleteCourse(index) {
      this.$store.dispatch("deleteCourse", index);
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
    editCourse() {
      let payload = {
        index: this.editIndex,
        name: this.name,
        description: this.description,
        price: this.price
      };
      this.$store.dispatch("editCourse", payload).then(this.closeEdit());
    }
  }
};
</script>