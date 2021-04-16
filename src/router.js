import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); 

export default new VueRouter({
    mode: "history",
    routes: [
        {
            name: "Home",
            path: "/",
            component: () => import("./components/Home")
        },
        {
            name: "CourseList",
            path: "/course_list",
            component: () => import("./components/CourseList")
        },
        {
            name: "CreateCourse",
            path: "/create_course",
            component: () => import("./components/CreateCourse")
        }
    ]
});