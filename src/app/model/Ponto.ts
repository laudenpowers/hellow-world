export class Ponto{
    
    //Ao adicionar em um construtor o termo '?' após o nome do parâmetro 
    //o torna opcional. Uma vez que um parâmetro seja opcional, todos os
    //demais também precisam ser. Essa é uma regra to typescript.
    //É possível declarar os atributos de uma classe no próprio construtor
    //da mesma. Nesse caso ao declarar já se realiza a atribuição de valor
    //também, evitando o código 'this.x = x'.
    constructor(private x?: number, private y?: number, private qtdeDePixels?: number){

    }

    desenhar(){
        //Logica para desenhar o ponto
        console.log('Desenhando: X -> ' + this.x + ', Y: ' + this.y);
    }

    //Mecanismos padrão de outras linguagens para expor membros privados de classe
    getX(){
        return this.x;
    }

    setX(valor){
        if (valor < 0){
            throw new Error('O valor não pode ser menor que zero');
        }
        this.x = valor;
    }

    //Declaração de properties em typescript. Isso obriga o dev a adotar a notação 
    //húngara no código. Se depender de mim é mais fácil eu dar o CÚ do que usar
    //essa merda no código. Esse código só vai ficar aqui para referencia mesmo.
    get QtdeDePixels(){
        return this.qtdeDePixels;
    }

    set QtdeDePixels(valor){
        if (valor < 0){
            throw new Error('O valor não pode ser menor que zero');
        }
        this.qtdeDePixels = valor;
    }

}