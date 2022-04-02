import { FC } from "react";
import type { StockType } from "../../../types";
import { ColumnType } from "../Table";

type TableBodyProps = {
  tableData: StockType[];
  columns: ColumnType[];
}

export const TableBody: FC<TableBodyProps> = ({ tableData, columns }) => {
  return (
   <tbody>
    {tableData.map((data) => {
     return (
      <tr key={data?.symbol}>
       {columns.map((column) => {
         if (column?.Cell) {
          const col = column?.Cell(data[column?.accessor as keyof StockType], data)
          return <td key={ column.accessor }>{ col }</td>
         }
         return <td key={ column.accessor }>{ data[column?.accessor as keyof StockType] || "——" }</td>
       })}
      </tr>
     );
    })}
   </tbody>
  );
 };