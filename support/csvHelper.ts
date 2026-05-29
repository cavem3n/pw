import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCsv(filePath: string): any[] {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true
  });
  
}