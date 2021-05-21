import './assets/styles/styles.css'

let canvas = document.getElementById('canvas')
let lienzo = canvas.getContext('2d')

let p1 = {
    mov: {
        enmovimiento: false,
        lastMov: "",
        contrMov: "",
        movimiento: 10,
    },
    tamaño: {
        width: 10,
        heigth: 10,
    },
    cuerpos: [
        {
            xi: canvas.width / 2,
            yi: canvas.height / 2,
        },
        // {
        //     xi : (canvas.width / 2) -( p1.tamaño.width ),
        //     yi: canvas.height / 2,
        // },
        // {
        //     xi : (canvas.width / 2) -( p1.tamaño.width * 2 ),
        //     yi: canvas.height / 2,
        // }
    ]

}

let move

console.log(canvas)

function dibujaInicio ({tamaño , cuerpos}) {
    
    //console.log(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth)
    lienzo.fillRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth)
    document.addEventListener('keyup', direccion, false);  

}
dibujaInicio(p1)

function direccion(event) {
    let { cuerpos, tamaño, mov } = p1
    lienzo.clearRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth);

    if(!(mov.enMovimiento)) {
        
        if(event.key === "ArrowUp") {
            move = setInterval(moverRecto, 70, "ArrowUp", p1);
        }  
        else if (event.key === "ArrowDown") {
            move = setInterval(moverRecto, 70, "ArrowDown", p1);
        }
        else if (event.key === "ArrowRight") {
            move = setInterval(moverRecto, 70, "ArrowRight", p1);
        }
        else if (event.key === "ArrowLeft") {
            move = setInterval(moverRecto, 70, "ArrowLeft", p1);
        }
    } else {
        if(!(event.key === mov.lastMov)) {
            console.log('no')
        }  
        else if (!(event.key === mov.contrMov)) {
            console.log('no')
            
        }
        else if (event.key === "ArrowRight") {
            console.log('si')
        }
        else if (event.key === "ArrowLeft") {
            console.log('si')
    }
    // } else {
    
    
        
    
       
    //}
}

    



function moverRecto (direccion, { mov, tamaño, cuerpos }) {

    if (direccion === 'ArrowUp') {
        lienzo.clearRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth);
        lienzo.fillRect(cuerpos[0].xi, cuerpos[0].yi - mov.movimiento, tamaño.width ,tamaño.heigth);
        cuerpos[0].yi = (cuerpos[0].yi - mov.movimiento);
        mov.enMovimiento = true
        mov.lastMov = 'ArrowUp'
        mov.contrMov = 'ArrowDown'
    }
    else if (direccion === 'ArrowDown') {
        lienzo.clearRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth);
        lienzo.fillRect(cuerpos[0].xi, cuerpos[0].yi + mov.movimiento, tamaño.width ,tamaño.heigth);
        cuerpos[0].yi = (cuerpos[0].yi + mov.movimiento);
        mov.enMovimiento = true
        mov.lastMov = 'ArrowDown'
        mov.contrMov = 'ArrowUp'
    }
    else if (direccion === 'ArrowLeft') {
        lienzo.clearRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth);
        lienzo.fillRect(cuerpos[0].xi - mov.movimiento, cuerpos[0].yi , tamaño.width ,tamaño.heigth);
        cuerpos[0].xi = (cuerpos[0].xi - mov.movimiento);
        mov.enMovimiento = true
        mov.lastMov = 'ArrowLeft'
        mov.contrMov = 'ArrowRight'
    }
    else if (direccion === 'ArrowRight') {
        lienzo.clearRect(cuerpos[0].xi, cuerpos[0].yi, tamaño.width, tamaño.heigth);
        lienzo.fillRect(cuerpos[0].xi + mov.movimiento, cuerpos[0].yi , tamaño.width ,tamaño.heigth);
        cuerpos[0].xi = (cuerpos[0].xi + mov.movimiento);
        mov.enMovimiento = true
        mov.lastMov = 'ArrowRight'
        mov.contrMov = 'ArrowLeft'
    }
}


function moverCurva () {

}