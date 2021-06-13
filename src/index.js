import './assets/styles/styles.css'

let canvas = document.getElementById('canvas')
let lienzo = canvas.getContext('2d')

let p1 = {
    live: true,
    mov: {
        enmovimiento: false,
        lastMov: "ArrowRight",
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
        {
            xi : (canvas.width / 2) - ( 10 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 2 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 3 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 4 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 5 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 6 ),
            yi: canvas.height / 2,
        },
        {
            xi : (canvas.width / 2) - ( 10 * 7 ),
            yi: canvas.height / 2,
        }
    ]
}
let move


function dibujaInicio ({tamaño , cuerpos}) {
    for(let i=0; i <  cuerpos.length; i++) {
        lienzo.fillRect(cuerpos[i].xi, cuerpos[i].yi, tamaño.width, tamaño.heigth)
    }
    document.addEventListener('keyup', mover, false);  

}
dibujaInicio(p1)

function mover(event) {
    cuerposalAzar()


    if (move != undefined) {
        clearInterval(move)
    } else {
    }
    let lastMov;
    switch (p1.mov.lastMov) {
        case "ArrowUp":
            lastMov = 1;
            break;
        case "ArrowDown":
            lastMov = 3;
            break;
        case "ArrowRight":
            lastMov = 2;
            break;
        case "ArrowLeft":
            lastMov = 4;
            break;
    }


    if((lastMov % 2 == 0) && (event.key == "ArrowUp" || event.key == "ArrowDown")) {
        switch (event.key) {
            case "ArrowUp":
                console.log('arriva')
                p1.mov.lastMov = "ArrowUp";
                move = setInterval(moverA, 250, p1, "ArrowUp");
                break;
            case "ArrowDown":
                console.log('abajo')
                p1.mov.lastMov = "ArrowDown";
                move = setInterval(moverA, 250, p1, "ArrowDown");
                break;
        }  

    } else if ((lastMov % 2 == 1) && (event.key == "ArrowRight" ||  event.key =="ArrowLeft")) {
        switch (event.key) {
            case "ArrowRight":
                console.log('derecha')
                p1.mov.lastMov = "ArrowRight";
                move = setInterval(moverA, 250, p1, "ArrowRight");
                break;
            case "ArrowLeft":
                console.log('izquierda')
                p1.mov.lastMov = "ArrowLeft";
                move = setInterval(moverA, 250, p1, "ArrowLeft");
                break;
        }  
    } else {
        move = setInterval(moverA, 250, p1, p1.mov.lastMov);
        console.log('no te puedes mover por allí...')
    } 
    

}

function moverA(p1, direccion) {   
    
    if(!p1.live) {
        document.write('memoriii')
    }else {
        
            switch (direccion) {
                case "ArrowUp":
                    // borra todo
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    // agrega la nueva coordenada
                    p1.cuerpos.unshift({
                        xi: p1.cuerpos[0].xi,
                        yi: p1.cuerpos[0].yi - 10,
                    })
                    // elimina la ultima coordenada
                    p1.cuerpos.pop()
                    //dibuja todo nuevamente
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    
                    console.log(p1.cuerpos)
                    break;
                case "ArrowDown":
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    p1.cuerpos.unshift({
                        xi: p1.cuerpos[0].xi,
                        yi: p1.cuerpos[0].yi + 10,
                    })
                    p1.cuerpos.pop()
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    
                    console.log(p1.cuerpos)
                    break;    
                case "ArrowRight":
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    p1.cuerpos.unshift({
                        xi: p1.cuerpos[0].xi +10,
                        yi: p1.cuerpos[0].yi,
                    })
                    p1.cuerpos.pop()
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    
                    console.log(p1.cuerpos)
                    break;
                case "ArrowLeft":
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    p1.cuerpos.unshift({
                        xi: p1.cuerpos[0].xi -10,
                        yi: p1.cuerpos[0].yi,
                    })
                    p1.cuerpos.pop()
                    for(let i=0; i <  p1.cuerpos.length; i++) {
                        lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
                    }
                    
                    console.log(p1.cuerpos)
                    break;
            }             
            let choque = p1.cuerpos.filter( function (cuerpo) {
                if ((cuerpo.xi === p1.cuerpos[0].xi) && (cuerpo.yi === p1.cuerpos[0].yi)) {
                    return cuerpo 
                }
             })
            // console.log(choque)
            if (choque.length > 1) {
                p1.live = false;
            } else {
                choque = [];
            }
            if((p1.cuerpos[0].xi == 0 && p1.cuerpos[0].yi >= 0) || (p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == 0)) {
                p1.live = false;
            } else if ((p1.cuerpos[0].xi == canvas.width && p1.cuerpos[0].yi >= 0) || (p1.cuerpos[0].xi >=0 && p1.cuerpos[0].yi == canvas.height) ) {
                p1.live = false;
            }

    }

    
}

function cuerposalAzar() {
    // setInterval()



}