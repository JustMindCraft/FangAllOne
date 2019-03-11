import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

interface IDefaultTableHead {
    labels: Array<any>;
}

const DefaultTableHead = (props: IDefaultTableHead) => {
  const { labels } = props;
  return (
    <TableHead>
      <TableRow>

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

export default DefaultTableHead;