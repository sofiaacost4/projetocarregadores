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
  color: rgb(73, 29, 12);
  background-color:rgb(189, 156, 123);
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  color: rgb(9, 37, 87);
  text-align: center;
  font-weight: bold;
}
nav{
  background-color:rgb(219, 198, 180);
  padding: 2rem;
  border-radius: 5rem 5rem 0 0 ;
}
nav a{
  padding: 1rem;
  margin: 1.5rem;
}
</style>
