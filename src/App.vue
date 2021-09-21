<template>
  <h1 class="font-avenir text-4xl font-bold mb-8 antialiased mt-15 text-center text-blurry">Math Quiz App</h1>
  <OperatorQuiz @onBack="clearOperator" v-if="operator" :operator="operator"/>
  <OperatorSelector v-if="!operator" @changeOperator="changeOperator" />
</template>

<script>
import OperatorSelector from './components/OperatorSelector.vue'
import OperatorQuiz from './components/OperatorQuiz.vue'

export default {
  name: 'App',
  data () {
    return {
      operator: null,
    }
  },
  methods: {
    changeOperator(operator) {
      this.operator = operator;
    },
    clearOperator() {
      this.operator = null;
    }
  },
  components: {
    OperatorSelector, OperatorQuiz
  }
}
</script>


<style>

</style>
