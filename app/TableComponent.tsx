"use client";
import React, { useState } from 'react';
import './TableComponent.scss';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Pagination,
  Button,
} from '@carbon/react';
import { CheckmarkFilled, Add } from '@carbon/icons-react';
import '@carbon/styles/css/styles.css';

const headers = [
  { key: 'name', header: 'Name' },
  { key: 'age', header: 'Age' },
  { key: 'email', header: 'Email' },
];

const rows = [
  { id: '1', name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { id: '2', name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
];

const TableComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState<string>("NONE");
  const [sortColumn, setSortColumn] = useState< string | null>(null);

  const handleSort = (key: string | "asc" | "desc" | null) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortColumn === key && sortDirection === 'asc') {
      direction = 'desc';
    }
    setSortDirection(direction);
    setSortColumn(key);
  };

  const sortedRows = [...rows].sort((a: any, b: any) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredRows = sortedRows.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedRows = filteredRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleAddNew = () => {
    // Add new row logic here
    console.log('Add new row');
  };

  return (
    <TableContainer title="Data Table" className="table-container">
      <TableToolbar>
        <TableToolbarContent>
          <TableToolbarSearch
            onChange={(e: ''| React.ChangeEvent<HTMLInputElement>, value?:string |undefined) =>
              setSearchTerm(e && e.target.value)
            }
          />
          <Button
            kind="primary"
            renderIcon={Add}
            onClick={handleAddNew}
          >
            Add New
          </Button>
        </TableToolbarContent>
      </TableToolbar>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableHeader
                key={header.key}
                isSortable
                sortDirection={sortColumn === header.key ? sortDirection : "NONE"}
                onClick={() => handleSort(header.key)}
              >
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row:any) => (
            <TableRow key={row.id}>
              {headers.map(header => (
                <TableCell key={header.key}>
                  {header.key === 'email' ? (
                    <>
                      {row[header.key]} <CheckmarkFilled />
                    </>
                  ) : (
                    row[header.key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        totalItems={filteredRows.length}
        pageSize={rowsPerPage}
        pageSizes={[5, 10, 15]}
        onChange={({ page, pageSize }) => {
          setCurrentPage(page);
          setRowsPerPage(pageSize);
        }}
      />
    </TableContainer>
  );
};

export default TableComponent;