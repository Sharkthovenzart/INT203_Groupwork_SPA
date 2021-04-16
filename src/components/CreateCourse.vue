<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>Add Course</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Course Name</label>
              <input type="text" class="form-control" placeholder="Enter course name..."/>
            </div>
            <div class="form-group">
              <label>Course Description</label>
              <input type="text" class="form-control" placeholder="Enter course description..."/>
            </div>
            <div class="form-group">
              <label>Course Price</label>
              <input type="number" class="form-control" placeholder="Enter course price..."/>
            </div>
            <button type="submit" class="btn btn-primary">Add new course</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>