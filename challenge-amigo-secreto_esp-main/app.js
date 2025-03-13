let nombres = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre');
    } else {
        nombres.push(nombreAmigo);
        agregarLista();
    }
    limpiarCaja();
    console.log(nombres);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarLista() { 
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = nombres[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado')
    if (nombres.length === 0) {
        alert('No hay nombres en la lista')
    }

    let nombreAleatorio = Math.floor(Math.random()* nombres.length);
    let amigoSeleccionado = nombres[nombreAleatorio];
    nombres.splice(nombreAleatorio, 1);
    amigoSorteado.textContent = `🎉 Amigo seleccionado: ${amigoSeleccionado}`
    agregarLista();
}