import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        courses: []
    },

    mutations: {
        addCourse(state, { payload }) {
            state.courses.push(payload);
        },
        deleteCourse(state, { index }) {
            state.courses.splice(index, 1);
        },
        editCourse(state, { payload }) {
            state.courses[payload.index] = { name: payload.name, description: payload.description, price: payload.price };
        }
    },

    actions: {
        addCourse({ commit }, payload) {
            commit("addCourse", { payload });
        },
        deleteCourse({ commit }, index) {
            commit("deleteCourse", { index });
        },
        editCourse({ commit }, payload) {
            commit("editCourse", { payload });
        }
    },

    getters: {
        courses: state => state.courses
    }
})