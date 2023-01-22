const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)
// addEventListener() - São os eventos da condição;

function add() {
  const  today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso 🛑")
    return
  } // Condição da logica

  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habbits", JSON.stringify(nlwSetup.data))
  // localStorage.setItem() - Armazenamento de dados 
  // JSON.stringfy() -  transforma um objeto em string
}
 
const data = JSON.parse(localStorage.getItem("NLWSetup@habbits")) || {}
// localStorage.GetItem() - Carregamento de dados armazenados
// JSON.parse() - Transforma uma string em um objeto
// || - Ou, Então

nlwSetup.setData(data)
nlwSetup.load()
















// EXEMPLOS

// ------------------------------------------------------

// const form = document.querySelector("#form-habits")
// const nlwSetup = new NLWSetup(form)

// const data = {
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//  takePills: ["01-03"],
//  journal: ["01-02"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()

// -------------------------------------------------

// document.querySelector("input").click()

// -----------------------------------------------

// const celular = {
//  cor: "preto",
//  ligar: function () {
//    const mensagem = "Ligando"
//    alert(mensagem)
//  },
// }

// celular.ligar()

// ----------------------------------------------

// declaro e atribuo valor
// - let boasVindas = "Fala, Dev!"

// reatribuo valor
// - boasVindas = `Fala, Dev! Tudo beleza?!`

// constante não pode mudar o valor
// - const serHumano = true
// - serHumano = false // Erro!
