
<template>
  <header class="app-header">
    <h1>Post App</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  text-decoration: underline;
}
</style>
