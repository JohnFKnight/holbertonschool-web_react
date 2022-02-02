import { RowID, RowElement } from './interface';
// import { deleteRow } from './crud';
// import { updateRow } from './crud';
// import { insertRow } from './crud';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
