import { FC, Key } from "react";

type TableBodyProps = {
  tableData: Record<string, any>
  columns: any
}

type DataType = { 
  [x: string]: any;
  id: Key | null | undefined; 
}

export const TableBody: FC<TableBodyProps> = ({ tableData, columns }) => {
  return (
   <tbody>
    {tableData.map((data: DataType) => {
     return (
      <tr key={data?.symbol}>
       {columns.map((column: any) => {
         if (column?.Cell) {
          const col = column?.Cell(data[column.accessor], data)
          return <td key={ column.accessor }>{ col }</td>
         }
         return <td key={ column.accessor }>{ data[column.accessor] || "——" }</td>
       })}
      </tr>
     );
    })}
   </tbody>
  );
 };