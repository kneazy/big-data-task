import { FC, SetStateAction, useState } from "react";

type SortOrderType = "asc" | "desc";

type TableHeadProps = {
  columns: ColumnType[]
  handleSorting: (accessor: SetStateAction<string>, sortOrder: SortOrderType) => void;
};

type ColumnType = { 
  label: string;
  accessor: string; 
  sortable: any 
};

export const TableHead: FC<TableHeadProps> = ({ columns, handleSorting }) => {

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: SetStateAction<string>) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleClick = (accessor: SetStateAction<string>, sortable: any) => () => sortable ? handleSortingChange(accessor) : null;

  return (
    <thead>
    <tr>
      {columns.map(({ label, accessor, sortable }) => {
        const cl = sortable
          ? sortField && sortField === accessor && order === "asc"
            ? "up"
            : sortField && sortField === accessor && order === "desc"
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