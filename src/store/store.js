import Vue from "vue";
import VueX from "vuex";

import Axios from "axios";

let mongo_api = "http://localhost:5000/api/course/";

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        courses: []
    },

    mutations: {
        fetchCourse(state, { res }) {
            state.courses = res.data;
        },
        addCourse(state, { payload }) {
            state.courses.push(payload);
        },
        deleteCourse(state, { payload }) {
            state.courses.splice(payload.index, 1);
        },
        editCourse(state, { payload }) {
            state.courses[payload.index].name = payload.name;
            state.courses[payload.index].description = payload.description;
            state.courses[payload.index].price = payload.price;
        }
    },

    actions: {
        async fetchCourse({ commit }) {
            await Axios.get(mongo_api)
              .then(res => commit("fetchCourse", { res }))
              .catch(err => alert(err));
        },
        async addCourse({ commit }, payload) {
            alert(`Course: ${payload.name} has been added !`)
            await Axios.post(mongo_api, payload)
              .then(() => commit("addCourse", { payload }))
              .catch(err => alert(err));
        },
        async deleteCourse({ commit }, payload) {
            alert(`Course has been deleted !`);
            await Axios.delete(mongo_api + payload._id)
              .then(() => commit("deleteCourse", { payload }))
              .catch(err => alert(err));
        },
        async editCourse({ commit }, payload) {
            await Axios.put(mongo_api + payload._id, payload)
              .then(() => commit("editCourse", { payload }))
              .catch(err => alert(err));
        }
    },

    getters: {
        courses: state => state.courses
    }
})