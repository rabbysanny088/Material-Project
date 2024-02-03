import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, status, price, sales, rating) {
  return { name, status, price, sales, rating };
}

const rows = [
  createData(
    "Foundations Matte Flip Flop",
    "Active",
    "$98",
    "$500",
    "4.5 (65)"
  ),
  createData(
    "Foundations Matte Flip Flop",
    "Pending",
    "$98",
    "$500",
    "4.5 (65)"
  ),
  createData("Foundations Matte Flip Flop", "Close", "$98", "$500", "4.5 (65)"),
  createData(
    "Foundations Matte Flip Flop",
    "Active",
    "$98",
    "$500",
    "4.5 (65)"
  ),
];

export default function TableOne() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: "#eee" }}>
          <TableRow>
            <TableCell>PRODUCT</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">SALES</TableCell>
            <TableCell align="right">RATING</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={
                  row.status === "Close"
                    ? { backgroundColor: "green", color: "white", display: 'flex', alignItems: 'center',justifyContent: 'center', width: '70px', height: '20px' }
                    : {}
                }
              >
                {row.status}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
