import axios from 'axios';
import formatCoin from '../utils/formatCoin';

const allowedVerbs = [ "Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
  "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
  "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
  "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
  "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
  "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte",
  "Canga" ]

const allowedAdjectives = [ "prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
  "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
  "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
  "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
  "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
  "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
  "windsurfista", "falso", "melhor", "terno" ]

const imageGenerator = async () => {
  try {
    return await axios.get('https://picsum.photos/200')
      .then((response) => response.request.responseURL);

  } catch (error) {
    console.log(error)
  }
}

const nameGenerator = () => {
  const verb = allowedVerbs[ Math.floor(Math.random() * allowedVerbs.length) ]
  const adjective = allowedAdjectives[ Math.floor(Math.random() * allowedAdjectives.length) ]
  return `${ verb } ${ adjective }`
}

const descriptionGenerator = async () => {
  try {
    return await axios.get('https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum')
      .then((response) => response.data.paragraphs[ 0 ].substring(20, 500))

  } catch (error) {
    console.log(error)
  }
}

const valueGenerator = (nameLength, descLength) => {
  const calc = Math.floor((10 + nameLength) * ((500 - descLength) / (3 - nameLength)) * -1);

  return formatCoin(calc);
}

const productsGenerator = async (quantity) => {
  const products = []

  for (let i = 0; i < quantity; i++) {

    const fullName = nameGenerator();
    const description = await descriptionGenerator();

    products.push({
      id: i,
      name: fullName,
      image: await imageGenerator(),
      description: description,
      price: valueGenerator(fullName.toString().length, description.toString().length),
    })
  }

  return products;
}

export default productsGenerator;

// referencie: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array