import { FC, useState } from "react";
import { SortOrderEnum } from "../enums";

type TableHeadProps = {
  columns: ColumnType[]
  handleSorting: (accessor: string, sortOrder: SortOrderEnum) => void;
};

type ColumnType = { 
  label: string;
  accessor: string; 
  sortable: boolean; 
};

export const TableHead: FC<TableHeadProps> = ({ columns, handleSorting }) => {

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState(SortOrderEnum.ASC);

  const handleSortingChange = (accessor: string) => {
    const sortOrder = accessor === sortField && order === SortOrderEnum.ASC ? SortOrderEnum.DESC : SortOrderEnum.ASC;
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleClick = (accessor: string, sortable: boolean) => () => sortable ? handleSortingChange(accessor) : null;

  return (
    <thead>
    <tr>
      {columns.map(({ label, accessor, sortable }) => {
        const cl = sortable
          ? sortField && sortField === accessor && order === SortOrderEnum.ASC
            ? "up"
            : sortField && sortField === accessor && order === SortOrderEnum.DESC
            ? "down"
            : "default"
          : "";
        return (
          <th
            key={accessor}
            onClick={handleClick(accessor, sortable)}
            className={cl}
          >
            {label}
          </th>
        );
      })}
    </tr>
  </thead>
  );
 };