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

