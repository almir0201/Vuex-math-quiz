<template>
  <transition
    enter-active-class="duration-700 ease-out"
    enter-from-class="transform opacity-0 scale-50"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-700 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-50"
    mode="out-in"
  >
    <div v-if="isQuizStarted" :key="step">
      <h4
        class="flex justify-center w-full text-2xl text-bold text-blurry mb-2"
      >
        {{ operandLeft }}
        {{ operator }}
        {{ operandRight }}
      </h4>
    </div>
  </transition>
  <transition
    enter-active-class="duration-700 ease-out"
    enter-from-class="transform opacity-0 scale-50"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-700 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-50"
    mode="out-in"
  >
    <div v-if="isQuizStarted" :key="step">
      <button
        @click="$store.dispatch('selectAnswer', answer)"
        v-for="(answer, index) in answers"
        :key="index"
        class="
          inline-flex
          justify-center
          items-center
          p-2.5
          w-40
          mr-2.5
          h-20
          bg-btn-blue
          text-2xl text-white
          cursor-pointer
        "
      >
        {{ answer }}
      </button>
    </div>
  </transition>

  <div v-if="!isQuizStarted" class="flex justify-center p-2">
    <button
      @click="$store.dispatch('beginQuiz')"
      class="
        p-2.5
        w-40
        mr-2.5
        h-20
        bg-btn-blue
        text-2xl text-white
        cursor-pointer
      "
    >
      Start
    </button>
  </div>
  <div class="flex justify-center">
    <button
      @click="
        $emit('onBack');
        $store.dispatch('resetQuiz');
      "
      class="
        p-2.5
        w-40
        mr-2.5
        mt-2
        h-20
        bg-btn-blue
        text-2xl text-white
        cursor-pointer
      "
    >
      Back
    </button>
  </div>
</template>

<script>
import store from "../store";

export default {
  emits: ["onBack"],
  computed: {
    questions() {
      return store.getters.getQuestions;
    },
    answers() {
      return store.getters.getAnswers;
    },
    operandLeft() {
      return store.getters.getOperandLeft;
    },
    operandRight() {
      return store.getters.getOperandRight;
    },
    operator() {
      return store.getters.getOperator;
    },
    isQuizStarted() {
      return store.getters.getIsQuizStarted;
    },
    step() {
      return store.getters.getStep;
    },
  },
};
</script>