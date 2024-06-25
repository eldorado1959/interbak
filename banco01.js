const readlineSync = require('readline-sync');

class BancoProgram {
    constructor() {
        this.banco = [];
    }

    run() {
        while (true) {
            const regBco = this.receiveInput();
            if (regBco.numChe === '000000') {
                this.fim();
                break;
            }
            this.banco.push(regBco);
            console.log('Registro gravado com sucesso!');
        }
        this.displayRecords();
    }

    receiveInput() {
        const regBco = {
            numChe: this.prompt('Informe o No. do Documento: ', 'string', 6),
            contaChe: this.prompt('Informe a Conta: ', 'string', 10),
            descriChe: this.prompt('Informe o Favorecido: ', 'string', 20),
            diaChe: Number(this.prompt('Informe o Dia do Vencimento: ', 'number', 2)),
            mesChe: Number(this.prompt('Informe o Mês do Vencimento: ', 'number', 2)),
            anoChe: Number(this.prompt('Informe o Ano do Vencimento: ', 'number', 2)),
            valorChe: Number(this.prompt('Informe o Valor do Documento (ex: 1234.56): ', 'number')),
            obsChe: this.prompt('Informe a Observação: ', 'string', 15),
            inscrChe: this.prompt('Informe o Inscrição: ', 'string', 6),
            dataConf: this.prompt('Informe a Data de Confirmação: ', 'string', 6)
        };

        return regBco;
    }

    prompt(message, type, maxLength) {
        let input = readlineSync.question(message).trim();

        if (type === 'number') {
            while (isNaN(Number(input)) || (maxLength && input.length !== maxLength)) {
                input = readlineSync.question(`Entrada inválida. ${message}`).trim();
            }
        } else {
            while (input.length > (maxLength || input.length)) {
                input = readlineSync.question(`Entrada inválida. ${message}`).trim();
            }
        }

        return input;
    }

    fim() {
        console.log('Fim da execução.');
    }

    displayRecords() {
        console.log('Registros cadastrados:');
        this.banco.forEach((record, index) => {
            console.log(`\nRegistro ${index + 1}:`);
            console.log(`No. do Documento: ${record.numChe}`);
            console.log(`Conta: ${record.contaChe}`);
            console.log(`Favorecido: ${record.descriChe}`);
            console.log(`Dia do Vencimento: ${record.diaChe}`);
            console.log(`Mês do Vencimento: ${record.mesChe}`);
            console.log(`Ano do Vencimento: ${record.anoChe}`);
            console.log(`Valor do Documento: ${record.valorChe.toFixed(2)}`);
            console.log(`Observação: ${record.obsChe}`);
            console.log(`Inscrição: ${record.inscrChe}`);
            console.log(`Data de Confirmação: ${record.dataConf}`);
        });
    }
}

const bancoProgram = new BancoProgram();
bancoProgram.run();

