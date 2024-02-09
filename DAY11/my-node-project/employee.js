var XLSX = require('xlsx');
var fs = require('fs');
let path =  require("path");
var readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('write the name of the file you want to add this features at : \n',(filePath)=>{
    rl.question('Enter the name of output excel file : ', function(fileName) {
        try {
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet); 

            function BonusPercentage(salary){
                if(salary <50000){
                    return 0.05;
                } else if(salary >=50000 && salary <=100000) { 
                    return 0.07;
                } else {
                    return  0.1;
                }
            }

            function BonusAmount(BonusPercentage,salary){
                return salary *  BonusPercentage;
            }

            data.forEach((employee)=>{
                let salary =employee.AnnualSalary;
                let bonusPrcnt = BonusPercentage(salary);
                let  bonusAmnt = BonusAmount(bonusPrcnt ,salary);
                employee.BonusPercentage = (bonusPrcnt*100).toFixed(2) + '%';
                employee.BonusAmount = bonusAmnt.toFixed(2);
            })

            let updatedSheet = XLSX.utils.json_to_sheet(data);
            updatedSheet['D1'] = { t: 's', v: 'BonusPercentage' };
            updatedSheet['E1'] = { t: 's', v: 'BonusAmount' };

            const newWorkbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(newWorkbook, updatedSheet, sheetName);

            if (!fileName){
                fileName = "Output_" + Date.now() + ".xlsx"; 
            } else if (path.extname(fileName) !== '.xlsx'){
                fileName += '.xlsx';
            }

            XLSX.writeFile(newWorkbook, fileName);
            console.log('Bonus calculation completed and saved to ',fileName);
        } catch(err){
            throw new  Error(`error :${err}`);
        }
        rl.close();
    });
});