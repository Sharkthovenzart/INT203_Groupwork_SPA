import Vue from "vue";
import VueRouter from "vue-router";

//Import Axios
import VueAxios from "vue-axios";
import Axios from "axios";

Vue.use(VueRouter); 
Vue.use(VueAxios, Axios);

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