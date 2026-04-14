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

function carregar(){
    fetch("dados.js").then(response => response.json()) //Pega os dados do JSON e converte para o formato
    .then(produtos => {
        const container =  document.getElementById("catalogo")
        
        produtos.map(filme =>{
            const card = document.createElement("div")
            card.classList.add("card")

            const img = document.createElement("img")
            img.src = filme.imagem
            img.alt = filme.nome

            const titulo = document.createElement("h3")
            titulo.textContent = filme.nome

            const desc = document.createElement("h4")
            desc.textContent = filme.descricao

            const ano = document.createElement("h3")
            ano.textContent = `Feito em ${filme.ano}`

            card.appendChild(img)
            card.appendChild(titulo)
            card.appendChild(desc)
            card.appendChild(ano)
            container.appendChild(card)
        })
    })
}
