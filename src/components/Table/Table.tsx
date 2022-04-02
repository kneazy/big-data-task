import {FC, ReactNode, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setSelected } from "../../store/actions/setSelected";
import {TableBody, TableHead} from "./components";
import arrowUp from './images/up_arrow.png';
import arrowDown from './images/down_arrow.png';
import defaultImage from './images/default.png';
import { SortOrderEnum } from "./enums";
import type { StockType } from "../../types";

type TableProps = {
  data: any[];
};

export type ColumnType = { 
  label: string;
  accessor: string; 
  sortable: boolean; 
  Cell?: (col: string | number, data?: StockType | undefined) => ReactNode;
};

export const Table: FC<TableProps> = ({ data }) => {
  const [tableData, setTableData] = useState<StockType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      setTableData(data);
    }
  }, [data])

  const handleRowClick = (data: any) => {
    dispatch(setSelected(data))
  } 

  const columns: ColumnType[] = [
    {
      label: "Company Name",
      accessor: "companyName",
      sortable: true,
      Cell: (col: string | number, data: StockType | undefined) => 
        <Link to={`./details/${data?.symbol}`} onClick={() => handleRowClick(data)} >{ col }</Link>
    },
    {
      label: "Symbol",
      accessor: "symbol",
      sortable: false
    },
    {
      label: "Market Cap.",
      accessor: "marketCap",
      sortable: true
    },
    {
      label: "Change",
      accessor: "change",
      sortable: false,
      Cell: (data: string | number) => <PriceChangeColor isPozitive={data > 0}>{data}</PriceChangeColor>
    }
  ];

  const handleSorting = (sortField: string, sortOrder: SortOrderEnum) => {
    if (sortField) {
      const sorted = [...tableData].sort((a: any, b: any) => {
        if (a[sortField] === null) 
          return 1;
        
        if (b[sortField] === null) 
          return -1;
        
        if (a[sortField] === null && b[sortField] === null) 
          return 0;
        
        return(a[sortField].toString().localeCompare(b[sortField].toString(), "en", {numeric: true}) * (sortOrder === SortOrderEnum.ASC ? 1 : -1));
      });
      setTableData(sorted);
    }
  };

  return (
    <TableComponent>
      <TableHead columns={columns} handleSorting={handleSorting}/>
      <TableBody columns={columns} tableData={tableData}/>
    </TableComponent>
  );
};

const PriceChangeColor = styled.div<{ isPozitive: boolean }>`
  color: ${(props) => props.isPozitive ? 'green' : 'red' }
`

const TableComponent = styled.table`
  width: 100%;
  border-spacing: 0;
  caption {
    font-style: italic;
    font-size: 90%;
    margin-bottom: 10px;
  }

  th {
    background: #fbfbfb;
    padding: 20px 10px;
    border-bottom: 1px solid #b1b1b1;
    font-weight: bold;
    text-align: left;
    position: -webkit-sticky;
    position: sticky;
    color: #707777;
    top: 0;
    z-index: 2;
  }

  th[scope=row] {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  th.up {
    background-image: url(${arrowUp});
  }
  th.down {
    background-image: url(${arrowDown});
  }
  th.default {
    background-image: url(${defaultImage});
  }
  th.up,
  th.default,
  th.down {
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center right;
  }

  td {
    border-top: 1px solid #ddd;
    padding: 16px 20px;
    font-weight: bold;
  }

  td a {
    text-decoration: none;
    color: #2288dd;
  }

  tbody tr:first-child td {
    border-top: none;
  }

  tbody tr td {
    background: #fff;

  }
`;
