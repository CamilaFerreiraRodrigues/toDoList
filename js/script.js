
const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItens = [];
function adicionarNovaTarefa(){

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false 
    });
    
    input.value = ' '
    mostrartarefas();
}

function mostrartarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach((item, indice ) =>{ 

        novaLi += `  <li class="task ${item.concluida && "done"}">
                        <img src="img/checked.png" alt="check-na-tarefa" onclick= "concluirTarefa(${indice})">
                        <p>${item.tarefa}</p>
                        <img src="img/trash.png" alt="tarefa-na-lixeira" class = "delet-img" onclick ="deletarItem(${indice})"> 
                     </li>` 
    })
    listaCompleta.innerHTML = novaLi 

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function deletarItem(indice){
    minhaListaDeItens.splice(indice, 1)
 
    mostrartarefas()
}

function concluirTarefa(indice){
    console.log(indice)
    minhaListaDeItens[indice].concluida = ! minhaListaDeItens[indice].concluida
   
    mostrartarefas()
}

function recarregarTarefas (){
    const tarefasDoLocalStrorage = localStorage.getItem('lista')
    if(tarefasDoLocalStrorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStrorage)
}
    mostrartarefas();
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);
