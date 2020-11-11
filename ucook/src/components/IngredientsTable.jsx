import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // maxWidth:400
  },
  container: {
    Width: '90%',
    maxHeight: 440,
    backgroundColor:'rgba(255, 255, 255, 0.274)'
  },
});

const IngredientTable = ({ column1, column2 }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rows = column1.map((ingredient, i) => (
    <TableRow key={uuid()}>
      <TableCell key={uuid()} component="th" scope="row">
        {ingredient}
      </TableCell>
      <TableCell key={uuid()} align="right">
        {column2[i]}
      </TableCell>
    </TableRow>
  ));

  return (
    // <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredients</TableCell>
              <TableCell align="right">Measures</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
      /* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */
    // </Paper>
  );
};
export default IngredientTable;
