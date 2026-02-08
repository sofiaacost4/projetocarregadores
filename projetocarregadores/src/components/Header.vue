<template>
  <header class="topo">
    <h1>Carregadores de Livros</h1>
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
  padding-top: 2rem;
  color: rgb(73, 29, 12);
  background-color:rgb(189, 156, 123);
  display: flex;
  flex-direction: column;
  align-items: center;   
  gap: 1rem;
}
h1{
  color: rgb(9, 37, 87);
  text-align: center;
  font-weight: bold;
  margin-left: 4rem;
}
nav{
  background-color:rgb(219, 198, 180);
  padding: 2rem;
  padding-right: 32.9rem;
  padding-left: 32.9rem;
}
nav a{
  padding: 1rem;
  margin-left: 2rem;
}
</style>
