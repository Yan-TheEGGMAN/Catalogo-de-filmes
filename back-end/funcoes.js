function carregar(){
    fetch("../back-end/produtos.json").then(response => response.json()) //Pega os dados do JSON e converte para o formato
    .then(produtos => {
        const container =  document.getElementById("catalogo")

        const filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || []

        const todosFilmes = [...produtos, ...filmesSalvos]
        todosFilmes.map(filme =>{
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

function adicionar(){
    const form = document.querySelector("#form")

    form.addEventListener("submit",(e)=> {

        e.preventDefault()

        const nome = document.getElementById("nome").value
        const descricao = document.getElementById("descricao").value
        const imagem = document.getElementById("imagem").value
        const ano = document.getElementById("ano").value

        const novoFilme = {
            id: `produto-${Date.now()}`,
            nome: nome,
            descricao: descricao,
            imagem: imagem,
            ano: ano
        }


        let filmes = JSON.parse(localStorage.getItem("filmes")) || []

        filmes.push(novoFilme)

        localStorage.setItem("filmes", JSON.stringify(filmes))

        alert("Filme adicionado com sucesso!")

        form.reset()



    })
}
