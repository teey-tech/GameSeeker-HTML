let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let emailNews = document.querySelector('#emailNews')
let nomeOk = false
let emailOk = false
let emailNewsOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
  let txt = document.querySelector('#txtNome')
  if (nome.value.length <= 3) {
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = '#e71837'
    txt.style.marginTop = '2rem'
    txt.style.marginLeft = '2rem'
  } else {
    txt.innerHTML = 'Nome Válido'
    txt.style.color = '#90ee90'
    txt.style.marginTop = '2rem'
    txt.style.marginLeft = '2rem'

    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    txtEmail.innerHTML = 'E-mail Valido'
    txtEmail.style.color = '#90ee90'
    txtEmail.style.marginTop = '2rem'
    txtEmail.style.marginLeft = '2rem'

    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail Invalido'
    txtEmail.style.color = '#e71837'
    txtEmail.style.marginTop = '2rem'
    txtEmail.style.marginLeft = '2rem'
  }
}

function validaEmailNews() {
  let txtEmailNews = document.querySelector('#txtEmailNews')
  if (emailNews.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    txtEmailNews.innerHTML = 'E-mail Valido'
    txtEmailNews.style.color = '#90ee90'
    txtEmailNews.style.marginLeft = '-17rem'
    emailNewsOk = true
  } else {
    txtEmailNews.innerHTML = 'E-mail Invalido'
    txtEmailNews.style.color = '#e71837'
    txtEmailNews.style.marginLeft = '-17rem'
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')
  if (assunto.value.length >= 100 && assunto.value.length != 0) {
    txtAssunto.innerHTML = 'Assunto muito grande digite apenas 100 caracteres!'
    txtAssunto.style.color = '#e71837'
    txtEmailNews.style.marginLeft = '-17rem'
  } else {
    txtAssunto.innerHTML = 'Assunto Válido'
    txtAssunto.style.color = '#90ee90'
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulario enviado com sucesso')
  } else {
    alert('Preencha o formulario corretamente antes de enviar...')
  }
}

function enviarNews() {
  if (emailNewsOk == true) {
    alert('Inscrito com sucesso')
  } else {
    alert('Preencha o email corretamente antes de enviar...')
  }
}

function mapaZoom() {
  mapa.style.width = '200vh'
  mapa.style.height = '60vh'
}

function mapaNormal() {
  mapa.style.width = '100vh'
  mapa.style.height = '60vh'
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `
#trabalhos,
#clientes,
#testimonials
`,
  { interval: 100 }
)
