<template>
  <h1>Counter - Vuex</h1>
  <p>Access Directly to counter value: {{ $store.state.counter.count }}</p>
  <p>Access through Computed: {{ countComputer }}</p>
  <p>Access through mapState: {{ count }}</p>

  <h3>Mutation: <span><i>{{ message }}</i></span></h3>

  <button @click="incrementCount">+1</button>
  <button @click="incrementCountBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <p>Accessing to Getters directly: {{ $store.getters['counter/squareCounter'] }}</p>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    // computed: mapState(['count', 'message'])
    computed: {
        countComputer() {
            return this.$store.state.counter.count;
        },
        // ...mapState({
        //     myCount: state => state.counter.count,
        //     myMessage: state => state.counter.message,
        //     // myMessage: 'message', // name that have at the 'state', is another way to do it.
        //     isLoading: state => state.counter.isLoading
        // })
        ...mapState('counter', ['count', 'message', 'isLoading']),
    },
    methods: {
        incrementCount() {
            this.$store.commit('counter/increment');
        },
        incrementCountBy() {
            this.$store.commit('counter/incrementBy', 5);
            // this.incrementCountRandom() // calling property that there is in ...mapActions object
        },

        // First way
        /* incrementCountRandom() {
            this.$store.dispatch('incrementRandomInt')
        } */
        // Second way
        ...mapActions('counter', ['incrementRandomInt'])
        // Third way
        // ...mapActions('counter', {
        //     incrementCountRandom: 'incrementRandomInt'
        // }),
        // ...mapGetters('counter', ['squareCounter'])
    }
}
</script>