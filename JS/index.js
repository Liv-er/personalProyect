let btnRequest = document.getElementById('btn-send');

let ul = document.querySelector('ul');

const dataBase = [
    { // 1er producto
        name : 'Azucar',
        // typeOf : 'Azucar',
        code : '11849'
    },
    { // 2do producto
        name : 'Huevo Blanco',
        typeOf : 'Huevo',
        code : '3223'
    },
    { // 3er producto
        name : 'Huevo Don toño',
        typeOf : 'Huevo',
        code : '25242'
    },
    { // 4to Producto
        name : 'Farolito 5',
        typeOf : 'Farolito',
        code : '1287'
    },
    { // 5to producto
        name : 'Farolito 2',
        typeOf : 'Farolito',
        code : '1286'
    },
    { // 6to producto
        name : 'Arroz',
        typeOf : 'Semilla',
        code : '612'
    },
    { // 7mo producto
        name : 'Frijol negro americano',
        typeOf : 'Semilla',
        code : '616'
    },
    { // 8vo producto
        name : 'Nescafe 350gr',
        typeOf : 'Nescafe',
        code : '18040'
    },
    { // 9no producto
        name : 'Nescafe 14gr (stick)',
        typeOf : 'Nescafe',
        code : '20528'
    },
    { // 10mo producto
        name : 'Knor suiza (50 piezas)',
        code : '167'
    },
    { // 11vo producto
        name : 'Alpura clasica',
        typeOf : 'Leche',
        code : '425'
    },
    { // 12vo producto
        name : 'Nutri leche',
        typeOf : 'Leche',
        code : '429'
    },
    { // 13vo producto
        name : 'Alpura deslactosada',
        typeOf : 'Leche',
        code : '2390'
    },
    { // 14vo producto 
        name : 'Corona Meg',
        typeOf : 'Cerveza',
        code : '14932'
    },
    { // 15vo producto
        name : 'Victoria Meg',
        typeOf : 'Cerveza',
        code : '5979'
    },
    { // 16vo producto
        name : 'Bimbollo 15 piezas',
        code : '7071'
    },
    { // 17vo producto
        name : 'Coca cola 600ml',
        typeOf : 'Refresco',
        code : '560'
    },
    { // 18vo producto
        name : 'Maruchan habanero',
        typeOf : 'Maruchan',
        code : '646'
    },
    { // 19vo producto
        name : 'Maruchan de pollo',
        typeOf : 'Maruchan',
        code : '650'
    },
    { // 20vo producto
        name : 'Santa clara entera',
        typeOf : 'Leche',
        code : '22903'
    },
    { // 21vo producto
        name : 'Santa clara deslactosada',
        typeOf : 'Leche',
        code : '22902'
    },
    { // 22vo producto
        name : 'Bonafont 1 Litro',
        typeOf : 'Agua',
        code : '44'
    },
    { // 23vo producto
        name : 'Bonafont 1.5 Litros',
        typeOf : 'Agua',
        code : '45'
    },
    { // 24vo producto
        name : 'Red cola 3 Litros',
        typeOf : 'Refresco',
        code : '15577'
    },
    { // 25vo producto
        name : 'Jarrito 2 Litros',
        typeOf : 'Refresco',
        code : '564'
    },
];

function requesting() {
    removeOldElements();
    
    let inpProductName = document.getElementById('inp-nameOf').value;
    let typeOf = inpProductName;

     // Buscando por typeOF
    if(typeOf == 'Huevo') {
        cb2('Huevo');
    } else if(typeOf == 'Farolito') {
        cb2('Farolito');
    } else if(typeOf == 'Semilla') {
        cb2('Semilla');
    } else if(typeOf == 'Nescafe') {
        cb2('Nescafe');
    } else if(typeOf == 'Leche') {
        cb2('Leche');
    } else if(typeOf == 'Cerveza') {
        cb2('Cerveza');
    } else if(typeOf == 'Refresco') {
        cb2('Refresco');
    } else if(typeOf == 'Maruchan') {
        cb2('Maruchan');
    } else if(typeOf == 'Agua') {
        cb2('Agua');
    } else {
        // Buscando por name
        if(typeOf == 'Azucar') {
            cb3('Azucar');
        } else if(typeOf == 'Huevo blanco') {
            cb3('Huevo blanco');
        } else if(typeOf == 'Huevo don toño') {
            cb3('Huevo Don Toño');
        } else if(typeOf == 'Farolito 5') {
            cb3('Farolito 5');
        } else if(typeOf == 'Farolito 2') {
            cb3('Farolito 2');
        } else if(typeOf == 'Arroz') {
            cb3('Arroz');
        } else if(typeOf == 'Frijol negro americano' || typeOf == 'Frijol negro') {
            cb3('Frijol negro americano');
        } else if(typeOf == 'Nescafe 350gr') {
            cb3('Nescafe 350gr');
        } else if(typeOf == 'Nescafe 14gr') {
            cb3('Nescafe 14gr (stick)');
        } else if(typeOf == 'Knor suiza') {
            cb3('Knor suiza (50 piezas)');
        } else if(typeOf == 'Alpura clasica') {
            cb3('Alpura clasica');
        } else if(typeOf == 'Nutri leche') {
            cb3('Nutri leche');
        } else if(typeOf == 'Alpura deslactosada') {
            cb3('Alpura deslactosada');
        } else if(typeOf == 'Corona meg' || typeOf == 'Corona mega') {
            cb3('Corona Meg');
        } else if(typeOf == 'Victoria meg' || typeOf == 'Victoria mega') {
            cb3('Victoria Meg');
        } else if(typeOf == 'Bimbollo' || typeOf == 'Bimbollo 15pz' || typeOf == 'Bimbollo 15 piezas' || typeOf == 'Bimbollo 15') {
            cb3('Bimbollo 15 piezas');
        } else if(typeOf == 'Coca Cola' || typeOf == 'Coca' || typeOf == 'Coca Cola 600' || typeOf == 'Coca 600') {
            cb3('Coca cola 600ml');
        } else if(typeOf == 'Maruchan de habanero' || typeOf == 'Maruchan habanero') {
            cb3('Maruchan habanero');
        } else if(typeOf == 'Maruchan de pollo' || typeOf == 'Maruchan pollo') {
            cb3('Maruchan de pollo');
        } else if(typeOf == 'Santa clara entera' || typeOf == 'Santa clara ent') {
            cb3('Santa clara entera');
        } else if(typeOf == 'Santa clara deslactosada' || typeOf == 'Santa clara des') {
            cb3('Santa clara deslactosada');
        } else if(typeOf == 'Bonafont 1L' || typeOf == 'Bonafont 1l') {
            cb3('Bonafont 1 Litro');
        } else if(typeOf == 'Bonafont 1.5L' || typeOf == 'Bonafont 1.5l') {
            cb3('Bonafont 1.5 Litros');
        } else if(typeOf == 'Red cola 3L' || typeOf == 'Red cola 3l') {
            cb3('Red cola 3 Litros');
        } else if(typeOf == 'Jarrito 2L' || typeOf == 'Jarrito 2l') {
            cb3('Jarrito 2 Litros');
        }
    }

}


function cb(type, string) {
    let newLi = document.createElement('li');
    ul.appendChild(newLi);
    newLi.textContent = type + ': ' + string;
    newLi.classList.add('new-element');
}

function cb2(dataType) {
    for (let i = 0; i < dataBase.length; i++) {
        if(dataBase[i].typeOf == dataType) {
            let name = dataBase[i].name;
            let code = dataBase[i].code;
            cb('NOMBRE', name);
            cb('CODIGO', code);
        }
    }
}

function cb3(dataType) {
    for (let i = 0; i < dataBase.length; i++) {
        if(dataBase[i].name == dataType) {
            let name = dataBase[i].name;
            let code = dataBase[i].code;
            cb('NOMBRE', name);
            cb('CODIGO', code);
        }
    }
}

function removeOldElements() {
    let elements = document.querySelectorAll('.new-element');
    elements.forEach(element => element.remove());
}

btnRequest.addEventListener('click', requesting);
