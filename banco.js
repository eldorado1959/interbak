

const readlineSync = require('readline-sync');

class BancoProgram {
    static VALID_OPTIONS = new Set([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 
        24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 
        36, 39, 41, 99
    ]);

    wsOpcao = 0;
    wsLimpa = ' '.repeat(50);
    wsP = ' ';

    wsData = {
        ano: 0,
        mes: 0,
        dia: 0,
    };

    chamador = {
        f1: "BANCO",
        nro: 0,
        f2: ".COM"
    };

    tela() {
        console.clear();
        console.log("                               Eldorado");
        console.log("Controle Financeiro                                      /  /  .");
        console.log("<  Menu Geral  >");
        console.log("01-Inclusao Cheques");
        console.log("02-Consulta Lancamentos");
        console.log("03-Altera Lancamentos");
        console.log("04-Exclui Lancamentos");
        console.log("05-Baixa Cheque p/No.");
        console.log("06-Inclusao Titulos");
        console.log("07-CONFERENCIA CHEQ.P/NOME");
        console.log("08-Pesq.Lanc.p/dta.Vcto.");
        console.log("09-  M e n u  Relatorios");
        console.log("10-Altera ANO");
        console.log("11-PESQUISA DE CHEQ.P/VALOR");
        console.log("12-TOTAL P/MES Conf/N.Conf.");
        console.log("14-Baixa titulo p/Vcto");
        console.log("15-Imprime p/Vcto");
        console.log("16-Tot.p/dia de pgto.");
        console.log("17-Tot./depto/mes./tela");
        console.log("18-Totaliza p/conta");
        console.log("19-Pesq.p/3 Letras");
        console.log("20-Mostra p/depto c/ %");
        console.log("21-Cad.Tit.p/conf.Post.");
        console.log("22-Confere Tit.p/Nome ANO");
        console.log("23-Confere Tit.p/Nome");
        console.log("24-Confere Tit.p/Valor");
        console.log("25-Excl.c/consulta p/R$");
        console.log("26-Excl.c/cons.p/Nome");
        console.log("27-Excl.c/cons.p/ANO");
        console.log("30-Mostra/depto/% S/OUTROS");
        console.log("31-total diario tela");
        console.log("32-total diario /conta");
        console.log("33-total diario /dta.cad");
        console.log("34-ALTERA P/NAO PAGO");
        console.log("35-Malote");
        console.log("36-Malote c/juros");
        console.log("39-tot.diario NAO PG.tela");
        console.log("40-CONF.TIT.CAD.ANT.desat.");
        console.log("41-Confere p/Nome MES/ANO");
        console.log("99 - !!!  F I M  !!!");
        console.log("OPCAO : [  ]");
        
        // Getting the current date
        const date = new Date();
        this.wsData.dia = date.getDate();
        this.wsData.mes = date.getMonth() + 1;
        this.wsData.ano = date.getFullYear();

        console.log(`Dia: ${this.wsData.dia}  Mes: ${this.wsData.mes}  Ano: ${this.wsData.ano}`);
    }

    opcaoIncorreta() {
        console.log("OPCAO INCORRETA < ENTER >");
        readlineSync.question('');
        console.clear();
    }

    moveOpcao() {
        this.chamador.nro = this.wsOpcao;
        console.log(`CHAIN ${this.chamador.f1}${this.chamador.nro}${this.chamador.f2}`);
    }

    run() {
        while (true) {
            this.tela();
            this.wsOpcao = parseInt(readlineSync.question('OPCAO: '), 10);

            if (!BancoProgram.VALID_OPTIONS.has(this.wsOpcao)) {
                this.opcaoIncorreta();
                continue;
            }

            if (this.wsOpcao === 99) {
                console.log("CHAIN FINAL.COM");
                break;
            }

            if (this.wsOpcao === 9) {
                console.log("CHAIN MRELBAN.COM");
            }

            this.moveOpcao();
        }

        this.fimPrograma();
    }

    fimPrograma() {
        console.clear();
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log("!! F I M   D E   P R O G R A M A !!");
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
}

const bancoProgram = new BancoProgram();
bancoProgram.run();
