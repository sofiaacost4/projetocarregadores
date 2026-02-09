<template>
    <div class="container-geral">
        <h2>CARREGUE SEU LIVRO:</h2>

        <section class="conteudo">
            <div class="formulario-horizontal">
                <div class="campo-bege">
                    <label>FOTO DO LIVRO:</label>
                    <input type="text" v-model="novaFoto" placeholder="Cole a URL da imagem aqui..." class="input-comum" />
                </div>

                <div class="campo-bege">
                    <label>TÍTULO DO LIVRO:</label>
                    <input type="text" v-model="novoTitulo" placeholder="Inserir nome..." class="input-comum" />
                </div>

                <button class="btn-carregar-grande" @click="salvarLivro">
                CARREGAR
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const novaFoto = ref('');
const novoTitulo = ref('');

const salvarLivro = () => {
    // Verifica se os campos não estão vazios
    if (!novaFoto.value.trim() || !novoTitulo.value.trim()) {
        alert("Preencha todos os campos!");
        return;
    }

    const listaLivros = JSON.parse(localStorage.getItem('biblioteca_local') || '[]');

    const novoLivro = {
        id: Date.now(),
        titulo: novoTitulo.value.toUpperCase(),
        capa: novaFoto.value
    };

    listaLivros.push(novoLivro);
    localStorage.setItem('biblioteca_local', JSON.stringify(listaLivros));

    novaFoto.value = '';
    novoTitulo.value = '';
    alert('Livro carregado com sucesso!');
}
</script>

<style scoped>
.container-geral{
    background-color: #004d55;
    padding: 0;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    color: rgb(66, 23, 3);
    background-color: rgb(189, 156, 123);
    padding: 10px 20px;
    margin: 0;
    width: 100%;
}
.conteudo {
    background-color: #004d55;
    width: 100%;
    max-width: 900px;
    height: 400px; 
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.formulario-horizontal{
    display: flex;
    gap: 25px;
    align-items: center;
}

.campo-bege{
    background-color: #d2a679;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: auto;
}

.campo-bege label{
    color: #4a3219;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: larger;
}

.input-comum {
    border: 1px solid #999;
    padding: 8px;
    border-radius: 2px;
    font-size: 0.9rem;
}

.btn-carregar-grande {
    background-color: #e0f7ff;
    color: #004d55;
    padding: 15px 35px;
    border-radius: 12px;
    font-size: 1.8rem;
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    transition: transform 0.2s;
}

.btn-carregar-grande:active {
    transform: scale(0.98);
}
</style>