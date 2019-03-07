import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, Tooltip, TableSortLabel } from '@material-ui/core';
const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
interface IEnchancedTabHead {
    labels: Array<any>;
    handleSelectAllClick: (event: any) => void;
    numSelected: any;
    rowCount: any;
}
const EnchancedTableHead = (props: IEnchancedTabHead) => {
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
              key={row.index}
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