import { setDoc } from 'firebase/firestore'
import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


// testimonials
const array=['john','matthew','faeez','seth','joel']
const [x, ...result] = array;
console.log(result);
let table = document.createElement('table');
console.dir(table);