 export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    cliente;

    constructor (numeroDeContas){
        ContaCorrente.numeroDeContas += 1;
    }

// _ significa privado!
    _saldo = 0;

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}