function criarElemento(lista){  //Que deus me ajude
    let catalogo = document.getElementById("catalogo")

    lista.forEach((item, index)=> {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let nome = document.createElement("h2")
        let descricao = document.createElement("p")

        img.src = item.imagem
        nome.innerText = item.nome
        descricao.innerText = item.descricao

        card.appendChild(img)
        card.appendChild(nome)
        card.appendChild(descricao)
        card.id = `produto-${index}`

        catalogo.appendChild(card)
    })

}

let produtos=[
    {
        imagem: "https://img.elo7.com.br/product/zoom/268BA70/big-poster-sonic-o-filme-lo01-tamanho-90x60-cm-poster-cinema.jpg",
        nome:"Sonic The Fucking movie",
        descricao:"O FILME INCRIVEL DO SONIC IRADISSIMO",
        id: 01
    }
]