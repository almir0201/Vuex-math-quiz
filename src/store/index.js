import { createStore } from "vuex";
import _ from 'lodash'

const NUMBER_OF_QUESTIONS = 5;
const methods = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
};

const store = createStore({
  state: {
    operator: null,
    questions: [],
    answers: [],
    expectedAnswer: [],
    isQuizStarted: false,
    step: 0,
    isQuizFinished: false,
    correctAnswers: 0,
  },
  mutations: {
    setAnswers(state, newAnswers) {
      state.answers.push(newAnswers)
    },
    setExpectedAnswer(state, newExpectedAnswer) {
      state.expectedAnswer.push(newExpectedAnswer)
    },
    setIsQuizFinished(state) {
      state.isQuizFinished = true
    },
    setStep(state) {
      state.step++
    },
    correctAnswersCounter(state) {
      state.correctAnswers++
    },
    setOperator(state, operator) {
      state.operator = operator
    },
    setIsQuizStarted(state) {
      state.isQuizStarted = true
    },
    setQuestion(state) {
      const operandLeft = parseInt(Math.random() * 10)
      const operandRight = parseInt(Math.random() * 30)
      state.questions.push({ operandLeft, operator: state.operator, operandRight })
    },
    shuffleAnswers(state) {
      const options = _.concat(state.answers[state.step])
      state.answers[state.step] = _.shuffle(options)
    },

  },
  actions: {
    resetQuiz({ state }) {
      state.operator = null,
        state.questions = [],
        state.answers = [],
        state.expectedAnswer = [],
        state.isQuizStarted = false,
        state.step = 0
    },
    beginQuiz({ getters, commit, state }) {
      commit('setQuestion')
      commit('setIsQuizStarted')
      const methodToUse = methods[state.operator];
      const random1 = parseInt(Math.random() * 100);
      const random2 = parseInt(Math.random() * 100);
      const random3 = parseInt(Math.random() * 100);
      const random4 = parseInt(Math.random() * 100);
      const expectedAnswer = methodToUse(getters.getOperandLeft, getters.getOperandRight);
      if (expectedAnswer % 1 === 0) {
        commit('setAnswers', ([expectedAnswer, random1, random2, random3, random4]));
        commit('setExpectedAnswer', expectedAnswer);
      } else {
        commit('setAnswers', ([expectedAnswer.toFixed(2), random1, random2, random3, random4]));
        commit('setExpectedAnswer', expectedAnswer.toFixed(2));
      }
      commit('shuffleAnswers');
    },
    selectAnswer({ state, commit, dispatch, getters }, answerSelected) {
      if (answerSelected !== state.expectedAnswer[state.step]) {
        alert("WRONG ANSWER");
      } else {
        commit('correctAnswersCounter')
      };
      commit('setStep');
      if (state.expectedAnswer.length === getters.getNumberOfQuestions) {
        commit('setIsQuizFinished')
        dispatch('resetQuiz')
      } else {
        dispatch('beginQuiz');
      }
    },
    newQuiz({ state }) {
      state.isQuizFinished = false;
      state.correctAnswers = 0
    },
    clearOperator({ state }) {
      state.operator = null;
      state.correctAnswers = 0
    },
  },
  getters: {
    getQuestions(state) {
      return state.questions[state.step]
    },
    getAnswers(state) {
      return state.answers[state.step]
    },
    getOperandLeft(state) {
      return state.questions[state.step].operandLeft
    },
    getOperandRight(state) {
      return state.questions[state.step].operandRight
    },
    getOperator(state) {
      return state.operator
    },
    getIsQuizStarted(state) {
      return state.isQuizStarted
    },
    getIsQuizFinished(state) {
      return state.isQuizFinished
    },
    getCorrectAnswers(state) {
      return state.correctAnswers
    },
    getNumberOfQuestions() {
      return NUMBER_OF_QUESTIONS
    },
    getStep(state) {
      return state.step
    }
  }
})

export default store

