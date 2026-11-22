<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const errors = ref([])

function validatePassword() {
  errors.value = []

  if (password.value.length < 8 || password.value.length > 14) {
    errors.value.push('Must contain 8–14 characters')
  }

  if (!/[A-Z]/.test(password.value)) {
    errors.value.push('Must contain an uppercase letter')
  }

  if ((password.value.match(/[a-z]/g) ?? []).length < 2) {
    errors.value.push('Must contain at least 2 lowercase letters')
  }

  if (!/[0-9]/.test(password.value)) {
    errors.value.push('Must contain a number')
  }

  if (!/^[A-Z]/.test(password.value)) {
    errors.value.push('Must start with an uppercase letter')
  }

  if (!password.value.includes('_')) {
    errors.value.push('Must contain _')
  }
}
</script>

<template>
  <main class="signup-page">
    <h1>Sign Up</h1>
    <form>
      <label for="email">Email</label>
      <input 
        id="email"
        type="email"
        v-model="email"
        required
      >

      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="password"
        required
      >

      <button type="button" @click="validatePassword">Signup</button>

      <div v-if="errors.length > 0" class="errors">
        <p>Password is not valid:</p>
        <p v-for="error in errors" :key="error">
          {{ error }}
        </p>
      </div>
    </form>
  </main>
</template>

<style scoped>
.signup-page {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
}

.signup-page form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.signup-page input {
  padding: 13px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.signup-page button {
  padding: 10px;
  cursor: pointer;
}

.errors {
  color: red;
  font-size: 14px;
}

.errors p {
  margin: 4px 0;
}
</style>