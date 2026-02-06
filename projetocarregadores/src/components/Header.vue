<template>
  <header class="topo">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/carregue">Carregue</RouterLink>
      <RouterLink to="/procure">Procure</RouterLink>
      <RouterLink to="/avalie">Avalie</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.topo {
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: rgb(73, 29, 12);
}
</style>
