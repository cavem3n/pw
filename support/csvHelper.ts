import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCsv(filePath: string): any[] {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const result = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    bom: true,
    trim: true,
    relax_column_count: true,
    relax_quotes: true
  });

  console.log('CSV LOADED ROWS:', result.length);

  if (result.length === 0) {
    throw new Error('CSV is empty or not parsed correctly');
  }

  return result;
}