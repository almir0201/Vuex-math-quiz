<template>
  <div class="flex justify-center items-center text-2xl text-white">
    <button
      @click="$store.commit('setOperator', '+')"
      class="p-2.5 w-40 mr-2.5 h-20 bg-btn-blue"
    >
      Addition<br />+
    </button>
    <button
      @click="$store.commit('setOperator', '-')"
      class="p-2.5 w-40 mr-2.5 h-20 bg-btn-blue"
    >
      Subtraction<br />-
    </button>
    <button
      @click="$store.commit('setOperator', '/')"
      class="p-2.5 w-40 mr-2.5 h-20 bg-btn-blue"
    >
      Division<br />/
    </button>
    <button
      @click="$store.commit('setOperator', '*')"
      class="p-2.5 w-40 mr-2.5 h-20 bg-btn-blue"
    >
      Multiplication<br />*
    </button>
  </div>
</template>