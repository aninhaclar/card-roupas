'use strict';

const menuItems = [
    { 
        nome: 'Estilo Boiadeira', 
        descricao: 'Inspire-se no look country autêntico da Ana Castela.', 
        preco: '$50', 
        avaliacao: '★★★★★', 
        imagem: 'ana1.png', 
        cor: 'pink',
        icon: 'roupa.png'
    },
    { 
        nome: 'Hit Sertanejo', 
        descricao: 'Ouça os maiores sucessos da Ana Castela e curta o sertanejo raiz.', 
        preco: '$50', 
        avaliacao: '★★★★☆', 
        imagem: 'ana2.png', 
        cor: 'rose' ,
        icon: 'violao.png'
    },
    { 
        nome: 'Vibe Agro', 
        descricao: 'Entre na moda agro com os acessórios e estilo de Ana Castela.', 
        preco: '$50', 
        avaliacao: '★★★★☆', 
        imagem: 'ana3.png', 
        cor: 'purple' ,
        icon: 'agro.png'
    },
    { 
        nome: 'Show ao Vivo', 
        descricao: 'Sinta a energia dos shows incríveis de Ana Castela.', 
        preco: '$60', 
        avaliacao: '★★★★★', 
        imagem: 'ana4.png', 
        cor: 'gold' ,
        icon: 'microfone.png'
    },
    { 
        nome: 'Look Country', 
        descricao: 'O estilo country perfeito para qualquer ocasião.', 
        preco: '$55', 
        avaliacao: '★★★★☆', 
        imagem: 'ana5.png', 
        cor: 'blueviolet' ,
        icon: 'cavalo.png'
    }
];

function criarMenu(cardInfo) {
    const container = document.querySelector('.container');
    const novoCard = document.createElement('div');
    novoCard.classList.add('card');
    novoCard.style.borderColor = cardInfo.cor;

    const imagem = document.createElement('img');
    imagem.src = `./icon/${cardInfo.icon}`;
    imagem.alt = cardInfo.nome;

    const titulo = document.createElement('h2');
    titulo.textContent = cardInfo.nome;

    const descricao = document.createElement('p');
    descricao.textContent = cardInfo.descricao;

    const preco = document.createElement('span');
    preco.classList.add('price');
    preco.textContent = cardInfo.preco;

    const avaliacao = document.createElement('div');
    avaliacao.classList.add('rating');
    avaliacao.textContent = cardInfo.avaliacao;

    const botao = document.createElement('button');
    botao.textContent = 'Add to cart';

    novoCard.appendChild(imagem);
    novoCard.appendChild(titulo);
    novoCard.appendChild(descricao);
    novoCard.appendChild(preco);
    novoCard.appendChild(avaliacao);
    novoCard.appendChild(botao);

    container.appendChild(novoCard);
}

cards.forEach(criarCard);
