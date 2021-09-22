import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const counterStore = {
    namespaced: true,  // important put it when we work with modules
    state,
    mutations,
    actions,
    getters
};


export default counterStore;


/* NOTES:
    - Mutations always are sync. They modify the 'state'
    - Actions can be async, and they never can apply changes directly to 'state', they do it through of 'mutations'
    - For more information see the next link: https://next.vuex.vuejs.org/#what-is-a-state-management-pattern
    - Getters are similar to 'computed properties', and can also call them in any part of the app
*/
