<template>
  <div v-if="isQuizStarted">
    <h4 class="flex justify-center w-full text-2xl text-bold text-blurry">
      {{ operandLeft }} {{ operator }} {{ operandRight }}
    </h4>
    <button
      @click="selectAnswer(answer)"
      v-for="(answer, index) of answers"
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
  <div v-if="!isQuizStarted" class="flex justify-center p-2">
    <button
      @click="startQuiz"
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
      @click="$emit('onBack')"
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
      Back
    </button>
  </div>
</template>

<script>
export default {
  emits: ["onBack"],
  props: ["operator"],
  data() {
    return {
      isQuizStarted: false,
      operandLeft: null,
      operandRight: null,
      answers: [],
    };
  },
  methods: {
    shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    },
    selectAnswer(answerSelected) {
      if (answerSelected !== this.$store.state.expectedAnswer) {
        alert("WRONG ANSWER");
      }
      this.startQuiz();
    },
    startQuiz() {
      this.isQuizStarted = true;
      this.operandLeft = parseInt(Math.random() * 10);
      this.operandRight = parseInt(Math.random() * 30);
      const methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
      };
      const methodToUse = methods[this.operator];
      this.answers = [];
      this.answers.push(methodToUse(this.operandLeft, this.operandRight));
      this.answers.push(parseInt(Math.random() * 100));
      this.answers.push(parseInt(Math.random() * 100));
      this.answers.push(parseInt(Math.random() * 100));
      this.answers.push(parseInt(Math.random() * 100));
      this.answers = this.shuffle(this.answers)
      console.log(this.shuffle(this.answers))
      this.$store.state.expectedAnswer = methodToUse(this.operandLeft, this.operandRight);
      this.$store.state.expectedAnswer = this.$store.state.expectedAnswer;
    },
  },
};
</script>

<style>
</style>