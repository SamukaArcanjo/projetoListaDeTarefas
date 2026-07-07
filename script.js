let adicionarTarefa = document.getElementById('adiciona_tarefa')
let inputAddTarefa = document.getElementById('add')
let inputDataTarefa = document.getElementById('input-data')

let listaTarefas = document.getElementById('lista-tarefas')

let tarefas = []

// Trazendo tarefas salvas
let tarefasLocal = localStorage.getItem('tarefas')
let tarefasConvertida = JSON.parse(tarefasLocal) || []


tarefasConvertida.forEach(tarefas => {
        criarTarefaNaTela(tarefas['tarefa'],tarefas['data'])
});

adicionarTarefa.addEventListener('click', function() {

    // Chamo a função criar tarefas
    criarTarefaNaTela(inputAddTarefa.value,inputDataTarefa.value)

    // Crio um array com objetos para guardar os dados
    tarefas.push({tarefa: inputAddTarefa.value, data: inputDataTarefa.value})
    // transfomo em JSON
    const textTarefas = JSON.stringify(tarefas)
    //guardo tarefas com localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas))


    // Zero os inputs, sem deixar valores 
    inputAddTarefa.value = ''
    inputDataTarefa.value = ''
})

function criarTarefaNaTela(nome,data) {
    const [ano,mes,dia] = data.split('-')

    const li = document.createElement('li')
    const check = document.createElement('input')
    check.type = 'checkbox'
    const task = document.createElement('p')
    const dataTask = document.createElement('p')
    const remover = document.createElement('button')

    task.textContent = nome
    dataTask.textContent = `${dia}/${mes}/${ano}`
    remover.textContent = 'x'

    li.appendChild(check)
    li.appendChild(task)
    li.appendChild(dataTask)
    li.appendChild(remover)
    listaTarefas.appendChild(li)

    task.className = 'nome-tarefa'
    dataTask.className = 'data-tarefa'
    remover.className = 'btn-remover'

    //Adicionando função sublinhar ao clicar em marcado
    check.addEventListener('click',function() {
    li.classList.toggle('concluida')
    })

    //Adicionando função de remover tarefa ao clicar no botão
    remover.addEventListener('click',function() {
        listaTarefas.removeChild(li)
        localStorage.removeItem('tarefas')
    })
}