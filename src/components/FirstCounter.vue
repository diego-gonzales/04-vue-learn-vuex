<template>
  <h1>Counter - Vuex</h1>
  <p>Access Directly to counter value: {{ $store.state.count }}</p>
  <p>Access through Computed: {{ countComputer }}</p>
  <p>Access through mapState: {{ myCount }}</p>

  <h3>Mutation: <span><i>{{ myMessage }}</i></span></h3>

  <button @click="incrementCount">+1</button>
  <button @click="incrementCountBy">+5</button>
  <button @click="incrementCountRandom" :disabled="isLoading">Random</button>

  <p>Accessing to Getters directly: {{ $store.getters.squareCounter }}</p>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    // computed: mapState(['count', 'message'])
    computed: {
        countComputer() {
            return this.$store.state.count
        },
        ...mapState({
            myCount: state => state.count,
            myMessage: state => state.message,
            // myMessage: 'message', // name that have at the 'state', is another way to do it.
            isLoading: state => state.isLoading
        })
        // ...mapState(['count', 'message']),
    },
    methods: {
        incrementCount() {
            this.$store.commit('increment');
        },
        incrementCountBy() {
            this.$store.commit('incrementBy', 5);
            // this.incrementCountRandom() // calling property that there is in ...mapActions object
        },
        // First way
        /* incrementCountRandom() {
            this.$store.dispatch('incrementRandomInt')
        } */
        // Second way
        // ...mapActions(['incrementRandomInt'])
        // Third way
        ...mapActions({
            incrementCountRandom: 'incrementRandomInt'
        }),
        // ...mapGetters(['squareCounter'])
    }
}
</script>