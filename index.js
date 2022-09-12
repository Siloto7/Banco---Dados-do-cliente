import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Letícia", 11122233301);

const cliente2 = new Cliente("Marineide", 11122233301);

const contaCorrenteLeticia = new ContaCorrente();
contaCorrenteLeticia.agencia = 1001;
contaCorrenteLeticia.cliente = cliente1;
contaCorrenteLeticia.depositar(500);


const contaCorrenteMarineide = new ContaCorrente();
contaCorrenteMarineide.agencia = 1002;
contaCorrenteMarineide.cliente = cliente2;

contaCorrenteLeticia.transferir(200, contaCorrenteMarineide);

console.log(contaCorrenteLeticia, contaCorrenteMarineide);
