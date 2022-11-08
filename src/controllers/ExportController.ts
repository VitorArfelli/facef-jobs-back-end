import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Worksheet Name');

class ExportController {
    public async export (
        req, res
    ): Promise<Response> {

        const headingColumnNames = [
            "Tipo de operação",
            "Valor da operação",
            "Data",
            "Saldo",
            "CPF ou CNPJ",
            "Descrição do realizador",
        ]

        let headingColumnIndex = 1; //diz que começará na primeira linha
        headingColumnNames.forEach(heading => { //passa por todos itens do array
            // cria uma célula do tipo string para cada título
            ws.cell(1, headingColumnIndex++).string(heading);
        });

        let rowIndex = 2; //começa na linha 2
        req.body.forEach(record => { //passa por cada item do data
            let columnIndex = 1; //diz para começar na primeira coluna
            //transforma cada objeto em um array onde cada posição contém as chaves do objeto (name, email, cellphone)
            const dado = {
                description: record.description,
                amount: String(record.amount),
                date: record.date,
                balance: record.balance,
                paymentData1: record.paymentData.payer.documentNumber.value,
                paymentData2: record.paymentData.payer.name,
            }
            Object.keys(dado).forEach(columnName =>{
                //cria uma coluna do tipo string para cada item
                ws.cell(rowIndex,columnIndex++)
                    .string(dado [columnName])
            });
            rowIndex++; //incrementa o contador para ir para a próxima linha
        }); 

        wb.write(`./relatorios/ArquivoExcel.xlsx`);
        return res.json({message: "Enviado com sucesso"})
    }
}

export default new ExportController()