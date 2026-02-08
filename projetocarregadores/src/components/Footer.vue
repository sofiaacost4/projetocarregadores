<template>
    <footer>
        <img src="../assets/carregadores-livros.PNG" alt="">
        <p>Desenvolvido por Haria Melena e Cofia Sosta</p>
    </footer>
</template>
    <style scoped>
        footer {
        background-color: rgb(8, 17, 92);
        color: white;
        padding: 1rem 2rem;
        position: relative;
        height: 120px;

        display: flex;
        align-items: center;
        }

        /* texto realmente centralizado */
        footer p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
        }

        /* imagem colada à direita */
        footer img {
        max-width: 160px;
        height: auto;
        margin-left: 26rem;
        }
    </style>

