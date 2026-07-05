let adicionarTarefa = document.getElementById('adiciona_tarefa')
let inputAddTarefa = document.getElementById('add')
let inputDataTarefa = document.getElementById('input-data')

let listaTarefas = document.getElementById('lista-tarefas')

adicionarTarefa.addEventListener('click', function() {

    // separo as datas corretamente
    const [ano,mes,dia] = inputDataTarefa.value.split('-')

    //Crio os elementos da tarefa
    const li = document.createElement('li')
    const check = document.createElement('input')
    check.type = 'checkbox'
    const task = document.createElement('p')
    const dataTask = document.createElement('p')
    const remover = document.createElement('button')

    // Adiciono o conteudo dos inputs dentro da tarefa = task e da data = datatask, adicionando o x do remover também
    remover.textContent = 'x'
    task.textContent = inputAddTarefa.value
    dataTask.textContent = `${dia}/${mes}/${ano}`

    // Agora adiciono tudo dentro da Li e depois dentro da UL, assim criando as listas 
    li.appendChild(check)
    li.appendChild(task)
    li.appendChild(dataTask)
    li.appendChild(remover)
    listaTarefas.appendChild(li)

    // Nomeio as classes nas tarefas e datas, como esta no css
    task.className = 'nome-tarefa'
    dataTask.className = 'data-tarefa'
    remover.className = 'btn-remover'

    // Zero os inputs, sem deixar valores 
    inputAddTarefa.value = ''
    inputDataTarefa.value = ''


    //Adicionando função sublinhar ao clicar em marcado
    check.addEventListener('click',function() {
    li.classList.toggle('concluida')
    })
    //Adicionando função de remover tarefa ao clicar no botão
    remover.addEventListener('click',function() {
        listaTarefas.removeChild(li)
    })
})
