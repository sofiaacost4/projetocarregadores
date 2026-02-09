<template>
    <div class="container">
        <section class="secao-input">
            <div class="card">
                <h2>AVALIAÇÃO:</h2>
                <input 
                    v-model="novaAvaliacao"
                    type="text"
                    placeholder="Escreva aqui..."
                    @keyup.enter="adicionarComentario"
                    class="input"
                /> <br>
                <button class="btn-enviar" @click="adicionarComentario">ENVIAR</button>
            </div>
        </section>
        <br>
        <section class="secao-lista">
            <article v-for="item in listaComentarios" :key="item.id" class="card">
                <header>
                    <span class="bola"></span>
                    <h2>ANÔNIMO</h2>
                </header>
                <div class="caixa-texto">
                    <p>{{ item.texto }}</p>
                </div>
            </article>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const listaComentarios = ref([]);
const novaAvaliacao = ref('');
const carregarAvaliacoes = () => {
    const dados = localStorage.getItem('lista_avaliacoes');
    if (dados){
        listaComentarios.value = JSON.parse(dados);
    }
};
onMounted(() => {
    carregarAvaliacoes();
});

const adicionarComentario = () => {
    // impedir que o campo esteja vazio
    if (novaAvaliacao.value.trim() === '') return;
    const avaliacoesAtuais = JSON.parse(localStorage.getItem('lista_avaliacoes') || '[]');
    const novoItem = {
        id: Date.now(),
        texto: novaAvaliacao.value,
        data: new Date().toLocaleString('pt-BR')
    };

    avaliacoesAtuais.unshift(novoItem);
    localStorage.setItem('lista_avaliacoes', JSON.stringify(avaliacoesAtuais));

    novaAvaliacao.value = '';
    carregarAvaliacoes();
};
</script>

<style scoped>
.container{
    background-color: #004d55; 
    padding: 40px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card{
    background-color: #d2a679; 
    width: 100%;
    min-width: 800px;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
header{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
h2{
    color: rgb(66, 23, 3);
}
.input{
    width: 100%;
    padding: 25px;
    border: 1px solid #888;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 1rem;
    box-sizing: border-box;
}
.btn-enviar{
    background-color: #e0f7ff; 
    color: #1a1a80; 
    border: none;
    padding: 10px 45px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    transition: opacity 0.2s;
}
.btn-enviar:hover{
    background-color: #1a1a80;
    color: white;
    transition: 0.4s;
}
.bola{
    width: 30px;
    height: 30px;
    background-color: #7d5a3c;
    border-radius: 50%;
    margin-right: 15px;
}
.caixa-texto{
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
    min-height: 100px;
}
.caixa-texto p{
    margin: 0;
    color: #333;
    line-height: 1.5;
    text-align: justify;
    font-size: larger;
}
.secao-lista{
    width: 100%;
    max-width: 800px;
}
</style>