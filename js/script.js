// 1 PASSO
// quando o usuario digitar algo no input e clicar no adicionar

const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")


/*
    2 PASSO
    -> Saber quando o botão foi clicado 

*/ 
//2.3
//-> criar um array para armazenar os dados de input
let minhaListaDeItens = [];

//2.2
function adicionarNovaTarefa(){
    //add no array 
    minhaListaDeItens.push(input.value);
    mostrartarefas();
}

/*

    3 PASSO
    -> mostrar tarefas

*/
function mostrartarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach((tarefa) =>{

        novaLi += `  <li class="task">
                        <img src="img/checked.png" alt="check-na-tarefa">
                        <p>${tarefa}</p>
                        <img src="img/trash.png" alt="tarefa-na-lixeira">
                     </li>`
    })

    listaCompleta.innerHTML = novaLi //add la no html

}




// vai ficar de olho no "button" e quando acontecer o 'click vai ser chamada uma função

//2.1
button.addEventListener('click', adicionarNovaTarefa)