// Importando dados do GITHHUB
const ulGit = document.getElementById("api-git")

function getApiGH() {
    //fazendo a requisição com FETCH
    fetch('https://api.github.com/users/marciotroise/repos')
        // validando as promises com THEN
        .then(async res => {
            // encontrando a api
            if(!res.ok) { // se for diferente de OK retorna erro
                throw new Error(res.status)
            }

            // se encontrar, esperar ela percorer o json
            var data = await res.json()

            // Percorrendo o data através do map, percorrer os item
            data.map(item => {
                // pra cada item na API irá criar um li
                let li = document.createElement('li')

                // Criando o HTML dessa 'li'
                // item. o nome do que quero puxar da api
                li.innerHTML = `
                    <strong>Projeto: <b>${item.name.toUpperCase()}</b></strong><br>
                    <span>Link: <a href="${item.html_url}" target="_blank">${item.html_url}</a></span>
                `
                // Inserindo a 'li' na 'ul' criada
                ulGit.appendChild(li)
            })
        })
        // Funcao que vai no console se tiver erro
        .catch(e => console.log(e))
}

getApiGH();