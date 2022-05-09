<template>
  <div class="flex flex-col justify-center p-2">
    <p
      class="
        font-avenir
        text-2xl
        font-bold
        mb-8
        antialiased
        mt-5
        text-center text-blurry
      "
    >
      You had {{ correctAnswers }} correct answers out of {{ numberOfQuestions }} questions.
    </p>
    <button
      @click="$store.dispatch('newQuiz')"
      class="
        inline-flex
        justify-center
        items-center
        p-2.5
        w-40
        m-auto
        h-20
        bg-btn-blue
        text-2xl text-white
        cursor-pointer
      "
    >
      Start again
    </button>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    correctAnswers() {
      return store.getters.getCorrectAnswers
    },
    numberOfQuestions() {
      return store.getters.getNumberOfQuestions
    }
  },
};
</script>