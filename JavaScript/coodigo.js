
function clicar(id,linha,coluna){
    id --
    let j;
    let v_matri;
    if (!tabuleiro[id]){
        if (jogador%2==0){ // jogador 1
            dives[id].style.background = 'rgb(255, 80, 80)'
            j = 'Jogador 2'.toLocaleUpperCase()
            v_j1[linha][coluna] = 1
            v_matri = v_j1
            

        }else{ // jagador 2
            dives[id].style.background = 'blue'
            j = 'Jogador 1'.toUpperCase()
            v_j2[linha][coluna] = 1
            v_matri = v_j2

        }
        if (!verificacao_vitoria(v_matri,j)){
            if (jogador >=8){
                j = 'JOGO EMPATADO'
            }
            msm.innerHTML = `<h1>${j}<h1/>`

            tabuleiro[id] = true
            jogador ++

        }
        


    }
}

function reiniciar(){
    v_j1 = [[0,0,0],[0,0,0],[0,0,0]]
    v_j2 = [[0,0,0],[0,0,0],[0,0,0]]
    msm.innerHTML = '<h1>jogador 1</h1>'.toUpperCase()
    jogador = 0
    for (let index = 1; index <= 9; index++) {
        let a = window.document.getElementById(`a${index}`)
        a.style.background = 'aliceblue'
        dives[index-1] = a
        tabuleiro[index-1] = false
        
    }
    

}
function verificacao_vitoria(lista_jogadas,jogador){
    let diagonal = 0
    let diagonal_s = 0
    for (let linha = 0; linha < lista_jogadas.length; linha++) {
        let orizontal = 0
        let vetcal = 0
        for (let coluna = 0; coluna < lista_jogadas[linha].length; coluna++) {
            if (lista_jogadas[linha][coluna] == 1){
                 /* - - -*/
               
                orizontal ++
            }
        
            if (lista_jogadas[coluna][linha] == 1){
                /* -
                   -
                   - 
                   */
                vetcal ++
            }
            
            
        }
        if (lista_jogadas[linha][linha]==1){
            /*
           -
             -
                -*/
           diagonal ++
       }
        if (lista_jogadas[2-linha][linha]==1){
            /* -
            -
         - 
           */
           diagonal_s ++
       }

        if (diagonal == 3 || diagonal_s == 3 || orizontal==3 || vetcal==3){
            // vencel
            if (jogador == 'Jogador 2'.toUpperCase()){
                msm.innerHTML = `<h1>O JOGADOR 1 VENCEL !!</h1>`

            }else{
                msm.innerHTML = `<h1>O JOGADOR 2 VENCEL !!</h1>`

            }
            
            for (let ID = 0; ID < tabuleiro.length; ID++) {
                tabuleiro[ID]= true;   
            }
            return true

        }
        
    }
    return false

   
    

}

function selicionar(id){
    // selecionar

    if (!tabuleiro[id]){
        dives[id].style.boxShadow = '3px 3px 3px 3px black'

    }
}

function sair(id){
    //sair da selecione
    dives[id].style.boxShadow = ''
}

function selebot(){
    butao.style.boxShadow = '1px 1px 1px 1px  rgb(218, 215, 32)'


}
function sairBoto(){
    butao.style.boxShadow = '3px 3px 3px 3px black'

}



let v_j1;// verificação de vitoria no jogador 1
let v_j2;// verificação de vitoria do jogador 2

let msm = window.document.getElementById('inf')


let butao = window.document.querySelector('button')

let tabuleiro = []
let dives = []

let pessas;


let jogador;




reiniciar()













