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

//2.2 --> Função que é chamada se clicar no adicionar
function adicionarNovaTarefa(){

    //add no array 
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false // 5 PASSO -> quando cria uma função ela n ta concluida
    });
    

    // limpando o input depois de digitar uma tarefa
    input.value = ' '
    mostrartarefas();
}

/*

    3 PASSO
    -> mostrar tarefas

*/
function mostrartarefas(){
    let novaLi = ''

    //ao inves de guardar apenas o texto, vai guardar se a tarefa está concluida ou não

    minhaListaDeItens.forEach((item, indice ) =>{ // forEach -> um de cada vez do array

        novaLi += `  <li class="task ${item.concluida && "done"}">
                        <img src="img/checked.png" alt="check-na-tarefa" onclick= "concluirTarefa(${indice})">
                        <p>${item.tarefa}</p>
                        <img src="img/trash.png" alt="tarefa-na-lixeira" class = "delet-img" onclick ="deletarItem(${indice})"> 
                     </li>` //  4.2 esse onclick -> está chamando a função deletartem
    })
    listaCompleta.innerHTML = novaLi //add la no html

    //6 PASSO -> Manter os dados no local storage para que mesmo ao atualizar a página os dados permaneçam lá 

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens)) //lista= nome que se deu. Aceita apenas texto ent JSON.stringfy
}



// 4 PASSO 
// -> deletar tarefa
function deletarItem(indice){
    minhaListaDeItens.splice(indice, 1)
    // apos deletar eu preciso, chmar a função 'mostrartarefas' novamente prara imprimir na tela apenas os indices que ficaram

    mostrartarefas()
}
//5 PASSO
//-> CONCLUIR tarefa

function concluirTarefa(indice){
    console.log(indice)
    minhaListaDeItens[indice].concluida = ! minhaListaDeItens[indice].concluida
    // estava false -> ! inverte e fica true

    mostrartarefas()
}


//7 PASSO -> pagar intens do local storage 
function recarregarTarefas (){
    const tarefasDoLocalStrorage = localStorage.getItem('lista') // lista = nome que foi dado quando colocados no local storage

    if(tarefasDoLocalStrorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStrorage)
}
    mostrartarefas();

}

// vai ficar de olho no "button" e quando acontecer o 'click vai ser chamada uma função
//2.1

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);
