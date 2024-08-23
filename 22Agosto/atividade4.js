let carrinho = []

const mercado  = {
    prateleira_1 : [
        {nome: 'Arroz', disponivel:true},
        {nome: 'Feijão', disponivel:true},
        {nome: 'Macarrão', disponivel:false},
    ],

    prateleira_2:[
        {nome: 'Café', disponivel:true},
        {nome: 'Leite', disponivel:false},
        {nome: 'Pão', disponivel:true},
    ],

    prateleira_3:[
        {nome: 'cebola', disponivel:true},
        {nome: 'Tomate', disponivel:true},
        {nome: 'Alface', disponivel:true},
    ],

    prateleira_4:[
        {nome: 'laranja', disponivel:true},
        {nome: 'maçã', disponivel:false},
        {nome: 'banana', disponivel:true},
    ]
}

carrinho .push(mercado.prateleira_1[0])
carrinho .push(mercado.prateleira_2[2])
carrinho .push(mercado.prateleira_4[0])
carrinho .push(mercado.prateleira_4[2])

console.log(carrinho)
