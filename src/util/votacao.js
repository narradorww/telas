
const pages=[voto1,voto2,voto3,voto4,voto5]


function retornaIndiceMaiorValor() {
    let maior = pages[0];
    let indice = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        }
    }
    return indice;
}

export default function retornaGanhador() {
    if (indice===0) {
        return 'Tela1';
    } else if (indice===1) {
        return 'Tela2';
    }else if (indice===2) {
        return 'Tela3';
    }else if (indice===3) {
        return 'Tela4';
    }else if (indice===4) {
        return 'Tela5';
    }
}


