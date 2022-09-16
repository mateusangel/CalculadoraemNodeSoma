const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})


console.log('Calculadora em Node.js');
 
const numeroValido = (numero1) =>{
     try{
        return Number(numero1);
     }
     catch (e){
       console.error('Numero invalido!');
     }
}

const operadorValido = (operador) =>{
    switch(operador){
        case '+':
            
        case '*':
         
        case '-':
           
        case '/':
            
            return operador;
        default:
            console.log('Operador invalido')
    }

}

readline.question('favor informe o número ',(numero) => {
    const numerocerto = numeroValido(numero );

    if(numerocerto){
        readline.question('favor informe o  segundo número ',(numero2) =>{
            const numerocerto2 = numeroValido(numero2)
         
            
            if(numerocerto2){
                readline.question('Escolha um Operador! ',(operador) =>{
                    const operadorV = operadorValido(operador);

                
                    if(operadorV) {

                        switch(operadorV){
                            case '+': console.log(`Operador Selecionado adição Resultado ${numerocerto } + ${numerocerto2 } =  ${numerocerto + numerocerto2   }`)
                        }
                    }

                    
                   

                })
                
            }

        });

    }

    
})