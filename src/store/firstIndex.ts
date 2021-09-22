// This is the way to handle 'store' without modules 

import { createStore } from 'vuex';
import getRandomInt from '../helpers/getRandomInt';

const store = createStore({
    state() {
        return {
            count: 0,
            message: 'Hello World',
            isLoading: false,
            randomNumber: 0 // it just helps me know the random number
        }
    },
    // Mutations always are sync. They modify the 'state'
    mutations: {
        increment(state: any) {
            state.count++;
            state.message = 'Increment Mutation';
        },
        incrementBy(state: any, value: number) {
            state.count += value;
            state.message = 'IncrementBy Mutation';
            state.randomNumber = value;
        },
        setLoading(state: any, value: boolean) {
            state.isLoading = value;
        }
    },
    // Actions can be async, and they never can apply changes directly to 'state', they do it through of 'mutations'
    // For more information see the next link: https://next.vuex.vuejs.org/#what-is-a-state-management-pattern
    actions: {
        async incrementRandomInt(context: any) {
            context.commit('setLoading', true);

            const randomInt = await getRandomInt();

            context.commit('incrementBy', randomInt)
            context.commit('setLoading', false);
        }
    },
    // They are similar to 'computed properties', and can also call them in any part of my app
    getters: {
        squareCounter(state: any) {
            return state.count * state.count;
        }
    }
});


export default store;

// FORMA EN LA QUE ESTÁ EN EL VIDEO
// export default createStore({
//     state: {
//         count: 1
//     }
// })