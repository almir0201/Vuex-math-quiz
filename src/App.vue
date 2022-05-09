<template>
  <h1
    class="
      font-avenir
      text-4xl
      font-bold
      mb-8
      antialiased
      mt-15
      text-center text-blurry
    "
  >
    Math Quiz App
  </h1>
  <FinishedQuiz v-if="isQuizFinished" />
  <OperatorQuiz
    @onBack="$store.dispatch('clearOperator')"
    v-if="operator && !isQuizFinished"
  />
  <OperatorSelector v-if="!operator && !isQuizFinished" />
</template>

<script>
import OperatorSelector from "./components/OperatorSelector.vue";
import OperatorQuiz from "./components/OperatorQuiz.vue";
import FinishedQuiz from "./components/FinishedQuiz.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    OperatorSelector,
    OperatorQuiz,
    FinishedQuiz,
  },
  computed: {
    isQuizFinished() {
      return store.getters.getIsQuizFinished;
    },
    operator() {
      return store.getters.getOperator;
    },
  },
};
</script>