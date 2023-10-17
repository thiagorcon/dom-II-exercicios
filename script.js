function adicionaItem(){
     
     let criarItem = document.createElement('h1')
     let criarConteudo = document.createTextNode('aqui foi criado algo')
     // let novoConteudo = criarItem.appendChild(criarConteudo)
     criarItem.appendChild(criarConteudo)
     let getItem = document.getElementById('container')     
     getItem.insertAdjacentElement('beforebegin',criarItem)
     console.log(getItem);
}