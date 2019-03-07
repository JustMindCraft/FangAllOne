import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@material-ui/core';

interface IEnchancedTabHeadProps {
    labels: Array<any>;
    handleSelectAllClick: (event: any) => void;
    numSelected: any;
    rowCount: any;
}
const EnchancedTableHead = (props: IEnchancedTabHeadProps) => {
  const { handleSelectAllClick, numSelected, rowCount,labels } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={(e:any)=>handleSelectAllClick(e)}
          />
        </TableCell>
        {labels.map(
          (row:any,index:number) => (
          <TableCell
              key={index}
              padding={row.disablePadding ? 'none' : 'default'}
            >
                  {row.name}
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  )
}

export default EnchancedTableHead;