<script setup>
import { useStore } from 'vuex'

const store = useStore()

function resetLikes() {
  store.commit('resetLikes')
}
</script>

<template>
  <button @click="resetLikes">
    Reset likes
  </button>
</template>
