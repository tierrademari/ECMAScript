//Generadores asincronos
async function* anotherGenerator() {
    yield await Promise.resolve('jaja')
    yield await Promise.resolve('jeje')
    yield await Promise.resolve('jiji')
  }

const generador = anotherGenerator();
generador.next().then(response => console.log(response.value));
generador.next().then(response => console.log(response.value));
generador.next().then(response => console.log(response.value));
generador.next().then(response => console.log(response.value)); //solo habian 3 respuestas


async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David", "Pedro", "Susana", "Miguel", "Camilo", "Angel", "Rodrigo"]
    for await (let valor of nombres) {
      console.log(valor)
    }
  }
  
  forAwait()

 function forNowait() {
    const nombres = ["Alexa", "Oscar", "David", "Pedro", "Susana", "Miguel", "Camilo", "Angel", "Rodrigo"]
    for (let valor of nombres) {
      console.log(valor)
    }
  }
  
  forNowait()