import { createStore } from 'vuex';
import counterStore from './counter/index';

const store = createStore({
    modules: {
        counter: counterStore
    }
});


export default store;

// FORMA EN LA QUE ESTÁ EN EL VIDEO
// export default createStore({
//     state: {
//         count: 1
//     }
// })