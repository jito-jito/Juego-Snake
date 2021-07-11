import './assets/styles/styles.css'

let canvas = document.getElementById('canvas')
let lienzo = canvas.getContext('2d')
let levelContainer = document.getElementById('level')
let modalContainer = document.getElementById('modalContainer')
let modalButton = document.getElementById('modalButton')

let $ranking = document.querySelector('.ranking-table > tbody')

let p1 = {
    live: true,
    mov: {
        enmovimiento: false,
        lastMov: "ArrowRight",
        contrMov: undefined,
        movimiento: 10,
    },
    tamaño: {
        width: 10,
        heigth: 10,
    },
    cuerpos: [
        {
            xi: 100,
            yi: 50,
        },
        {
            xi : (100) - ( 10 ),
            yi: 50,
        },
        {
            xi : (100) - ( 10 * 2 ),
            yi: 50,
        },
        {
            xi : (100) - ( 10 * 3 ),
            yi: 50,
        }
        // {
        //     xi : (100) - ( 10 * 4 ),
        //     yi: 50,
        // },
        // {
        //     xi : (100) - ( 10 * 5 ),
        //     yi: 50,
        // },
        // {
        //     xi : (100) - ( 10 * 6 ),
        //     yi: 50,
        // },
        // {
        //     xi : (100) - ( 10 * 7 ),
        //     yi: 50,
        // }
    ]
}
let level = {
    coordenadas: {
        xAzar: null,
        yAzar: null
    },
    level: 1,
    dificultad: 70,
    // interval: undefined,
    cuerpo: true
}

// console.log($ranking)
// renderRanking()
fetch('http://localhost:3000/game/ranking')
    .then(response => response.json())
    .then(data => renderRank(data));
// function getRank() {
// }

// getRank()
function renderRank(data) {
    data.map((item) => {
        $ranking.insertAdjacentHTML('beforeend', `
        <tr class="ranking-item">
            <td>${item.name}</td>
            <td>${item.level}</td>
        </tr>
    `)
    })
   
}

function sendRank(lastLevel) {
    let data = {
        name: 'test',
        level: lastLevel.level
    }
    
    fetch('http://localhost:3000/game/ranking', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        console.log('datos enviados correctamente')
    })
    .catch(() => {
        console.log('error en el envio de los datos')
    })
}




function dibujaInicio () {   
    modalContainer.classList.remove("open")
    for(let i=0; i <  p1.cuerpos.length; i++) {
        lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth)
    }
    actualizarEstado(level)

    cuerposAlAzar(level, p1)
    document.addEventListener('keyup', presionoTecla, false);  
}

function cuerposAlAzar(lev, p1) {
    lev.coordenadas.xAzar = numeroAzar(1 , 38);
    lev.coordenadas.yAzar = numeroAzar(1 , 35);
    lienzo.fillRect(lev.coordenadas.xAzar, lev.coordenadas.yAzar, p1.tamaño.width, p1.tamaño.heigth)
    lev.cuerpo = true
    
}
function numeroAzar(min,max) {
    return 10 * (Math.floor(Math.random() * (max - min) + min));
}


function presionoTecla(event) {
    
    if (p1.mov.contrMov) {
        clearInterval(p1.mov.contrMov)
    }
    let lastMov = convertirKeyANumero(p1.mov.lastMov)

    if((lastMov % 2 == 0) && (event.key == "ArrowUp" || event.key == "ArrowDown")) {
        switch (event.key) {
            case "ArrowUp":
                console.log('arriva')
                p1.mov.lastMov = "ArrowUp";
                p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, "ArrowUp");
                break;
            case "ArrowDown":
                console.log('abajo')
                p1.mov.lastMov = "ArrowDown";
                p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, "ArrowDown");
                break;
        }  

    } else if ((lastMov % 2 == 1) && (event.key == "ArrowRight" ||  event.key =="ArrowLeft")) {
        switch (event.key) {
            case "ArrowRight":
                console.log('derecha')
                p1.mov.lastMov = "ArrowRight";
                p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, "ArrowRight");
                break;
            case "ArrowLeft":
                console.log('izquierda')
                p1.mov.lastMov = "ArrowLeft";
                p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, "ArrowLeft");
                break;
        }  
    } else {
        p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, p1.mov.lastMov);
        console.log('no te puedes mover por allí...')
    } 
}

function convertirKeyANumero(key) {
    switch (key) {
        case "ArrowUp":
            return 1;
        case "ArrowDown":
            return 3;
        case "ArrowRight":
            return 2;
        case "ArrowLeft":
            return 4;
    }
}

function moverA(p1, direccion) {   
    
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
            
            break;
    }    
    pruebaDeColiciones(p1, level)         
}

function pruebaDeColiciones(p1, level) {
    let ColisionPropia = p1.cuerpos.filter( function (cuerpo) {
        if ((cuerpo.xi === p1.cuerpos[0].xi) && (cuerpo.yi === p1.cuerpos[0].yi)) {
            return cuerpo 
        }
     })

    if (ColisionPropia.length > 1) {
        p1.live = false;
    } 
   
    // colision en los bordes del canvas 
    if((p1.cuerpos[0].xi == 0 && p1.cuerpos[0].yi >= 0) || (p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == 0)) {
        p1.live = false;
    } else if ((p1.cuerpos[0].xi == canvas.width && p1.cuerpos[0].yi >= 0) || (p1.cuerpos[0].xi >=0 && p1.cuerpos[0].yi == canvas.height) ) {
        p1.live = false;
    }
    
    // colicion con un cuerpo level
    // debugger
    if ((level.coordenadas.xAzar == p1.cuerpos[0].xi) && (level.coordenadas.yAzar === p1.cuerpos[0].yi)) {
        level.level +=1;
        level.dificultad -= 3
        actualizarEstado(level)
        level.cuerpo = false
        p1.cuerpos.push(
            {
                xi: (p1.cuerpos[0].xi) * (p1.cuerpos.length+1),
                yi: (p1.cuerpos[0].yi) * (p1.cuerpos.length+1)
            }
        )
        // lienzo.clearRect(level.coordenadas.xAzar, level.coordenadas.yAzar, p1.tamaño.width, p1.tamaño.heigth)
        cuerposAlAzar(level, p1) 
    } 
   

    if(!p1.live) {
        clearInterval(p1.mov.contrMov)
        resetGame(p1, level)
        document.removeEventListener('keyup', presionoTecla);  
        muerto()
    }
}

function actualizarEstado(level) {
    levelContainer.innerHTML= level.level
    
}

function muerto() {
        modalContainer.classList.add("open")
        modalButton.addEventListener('click', dibujaInicio)

}

function resetGame(player, nivel) {
    sendRank(level)
    p1 = {
        live: true,
        mov: {
            enmovimiento: false,
            lastMov: "ArrowRight",
            contrMov: undefined,
            movimiento: 10,
        },
        tamaño: {
            width: 10,
            heigth: 10,
        },
        cuerpos: [
            {
                xi: 100,
                yi: 50,
            },
            {
                xi : (100) - ( 10 ),
                yi: 50,
            },
            {
                xi : (100) - ( 10 * 2 ),
                yi: 50,
            },
            {
                xi : (100) - ( 10 * 3 ),
                yi: 50,
            }
            // {
            //     xi : (100) - ( 10 * 4 ),
            //     yi: 50,
            // },
            // {
            //     xi : (100) - ( 10 * 5 ),
            //     yi: 50,
            // },
            // {
            //     xi : (100) - ( 10 * 6 ),
            //     yi: 50,
            // },
            // {
            //     xi : (100) - ( 10 * 7 ),
            //     yi: 50,
            // }
        ]
    };
    level = {
        coordenadas: {
            xAzar: null,
            yAzar: null
        },
        level: 1,
        dificultad: 70,
        // interval: undefined,
        cuerpo: true
    };
    // player = newPlayer;
    lienzo.clearRect(0, 0, canvas.width, canvas.height)
}


dibujaInicio(p1,level)

