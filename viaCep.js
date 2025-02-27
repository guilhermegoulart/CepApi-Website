const readline = require('readline')

async function BuscarCep(cep) {
  if (!/^[0-9]{8}$/.test(cep)) {
    console.error('CEP inválido deve conter 8 dígitos númericos.')
    return
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()

    if (data.erro) {
      console.error('CEP não encontrado.')
    } else {
      console.log('Dados do CEP:', data)
    }
  } catch (error) {
    console.error('Erro ao Buscar CEP', error.message)
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite o CEP: ', (cep) => {
  BuscarCep(cep)
  rl.close()
})
