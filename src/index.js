import './assets/styles/styles.css'

const player = document.getElementById('player')


let p1 = {
    mov: {
        arriba: 0,
        abajo: 0,
        izquierda: 0,
        derecha: 0,
    },

}
let enmovimiento = false
let move;

let x = player.getBoundingClientRect()




document.addEventListener('keyup', mover, false);  

function mover(event) {

    if(enmovimiento) {
        clearInterval(move)
        if(event.key === "ArrowUp") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "arriba")
        }  
        else if (event.key === "ArrowDown") {
            console.log('abajo')
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "abajo")
        }
        else if (event.key === "ArrowRight") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "derecha")
        }
        else if (event.key === "ArrowLeft") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "izquierda")
        }
    } else {
        if(event.key === "ArrowUp") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "arriba")
        }  
        else if (event.key === "ArrowDown") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "abajo")
        }
        else if (event.key === "ArrowRight") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "derecha")
        }
        else if (event.key === "ArrowLeft") {
            enmovimiento = true
            move = setInterval(moviendo, 70, p1, "izquierda")
        }

    }
    
}


function moviendo(p1, direccion) {

    if(direccion == "arriba") {
        p1.mov.arriba -= 10;
        player.style.top = `${p1.mov.arriba}px`;
    } else if (direccion == "abajo") {
        p1.mov.arriba += 10;
        player.style.top = `${p1.mov.arriba}px`;

    } else if (direccion == "izquierda") {
        p1.mov.izquierda -= 10;
        player.style.left = `${p1.mov.izquierda}px`;

    } else if (direccion == "derecha") {
        p1.mov.izquierda += 10;
        player.style.left = `${p1.mov.izquierda}px`;

    }

}