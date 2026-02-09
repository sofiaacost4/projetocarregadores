<template>
    <main class="container-geral">
        <header>
            <h2>PROCURE SEUS LIVROS:</h2>
        </header>

        <section class="grade-livros">
            <article v-for="livro in livros" :key="livro.id" class="card-livro">
                <img :src="livro.capa" alt="Capa do livro" />
                <h3>{{ livro.titulo }}</h3>
            </article>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const livros = ref([]);

const carregarLivros = () => {
    const dados = localStorage.getItem('biblioteca_local');
    if (dados) {
        livros.value = JSON.parse(dados);
    }
};

onMounted(() => {
    carregarLivros();
});
</script>

<style scoped>
.container-geral{ 
    background-color: #004d55; 
    min-height: 100vh; 
    padding: 0; 
}

h2{ 
    background-color: rgb(189, 156, 123); 
    max-width: 100%; 
    margin: 0 auto 10px auto; 
    padding: 10px 20px; 
    color: rgb(66, 23, 3);
}

.grade-livros{ 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
    gap: 20px; 
    max-width: 1000px; 
    margin: 0 auto; 
    padding: 0.5rem;
}

.card-livro{ 
    background-color: #fdf5e6; 
    padding: 10px; 
    text-align: center; 
    border-radius: 5px;
}

.card-livro img{ 
    width: 100%; 
    min-height: 250px; 
    object-fit: cover; 
    border-radius: 3px; 
}
.card-livro h3{ 
    color: #4a3219; 
    font-size: 0.8rem; 
    margin-top: 10px; 
    text-transform: uppercase; 
}
</style>
