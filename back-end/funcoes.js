function carregar(){
    fetch("../back-end/produtos.json").then(response => response.json()) //Pega os dados do JSON e converte para o formato
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
