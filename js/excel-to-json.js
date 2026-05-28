import XLSX from 'xlsx';
import fs from 'fs';

const workbook = XLSX.readFile('database1350.xlsx');

const sheetName = workbook.SheetNames[0];

const data = XLSX.utils.sheet_to_json(
  workbook.Sheets[sheetName]
);

const pesertaDB = {};

for (const row of data) {

  pesertaDB[row['ID Peserta']] = {
    password: row['Password']
  };
}

const output = `const pesertaDB = ${JSON.stringify(
  pesertaDB,
  null,
  2
)};\n\nexport default pesertaDB;`;

fs.writeFileSync(
  './data/peserta-db.js',
  output
);

console.log('Database berhasil dibuat');