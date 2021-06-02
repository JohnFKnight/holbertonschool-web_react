import { RowID, RowElement } from './interface';
// import { deleteRow } from './crud';
// import { updateRow } from './crud';
// import { insertRow } from './crud';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
