// import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { memo, useState } from "react";
// import { useSelector } from 'react-redux';
// import format from "date-fns/format";
import clsx from "clsx";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { shadows } from "@mui/material";

// import { selectWidgets } from '../store/widgetsSlice';
// import ProductsTab from 'src/app/main/apps/e-commerce/order/tabs/ProductsTab';

import { useFormControl } from "@mui/material/FormControl";
import SidePannel from "./SidePannel";

function ProductsTable(props) {
  //   const widgets = useSelector(selectWidgets);
  const columns = ["Transaction ID", "Description", "Price", "Quantity"];
  const [selectedRow, setSelectedRow] = useState({});
  console.log({ selectedRow });

  const rows = [
    { id: "571NT", name: "Page", amount: 1358.75, quantity: 75 },

    { id: "4904YT", name: "Nita Hebert", amount: -1042.82, quantity: 85 },
    {
      id: "421YT",
      name: "Marsha Chambers",
      amount: 1828.16,
      quantity: 77,
    },

    {
      id: "091RT",
      name: "Charmaine Jackson",
      amount: 1647.55,
      quantity: 12,
    },
    { id: "13NT", name: "Maura Carey", amount: -927.43, quantity: 25 },
  ];
  return (
    <>
      {props.open && (
        <SidePannel />
        )}
      <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
        <div className="table-responsive mt-24">
          <Table className="simple w-full min-w-full">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>
                    {/* <Button>hhhhh</Button> */}
                    <Typography
                      color="text.secondary"
                      className="font-semibold text-12 whitespace-nowrap"
                    >
                      {column}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} onClick={() => setSelectedRow(row)}>
                  {Object.entries(row).map(([key, value]) => {
                    <EditIcon />
                    switch (key) {
                      case "id": {
                        return (
                          <TableCell key={key} component="th" scope="row">
                            <Typography className="" color="text.secondary">
                              {value}
                            </Typography>
                          </TableCell>
                        );
                      }
                      case "name": {
                        return (
                          <TableCell key={key} component="th" scope="row">
                            <Typography>{value.toString()}</Typography>
                          </TableCell>
                        );
                      }
                      case "amount": {
                        return (
                          <TableCell key={key} component="th" scope="row">
                            <Typography className="">
                              {value.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </Typography>
                          </TableCell>
                        );
                      }
                      case "quantity": {
                        return (
                          <TableCell key={key} component="th" scope="row">
                            <Typography
                              className={clsx(
                                "inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase",
                                value === "pending" &&
                                  "bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50",
                                value === "completed" &&
                                  "bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50"
                              )}
                            >
                              {value}
                            </Typography>
                          </TableCell>
                        );
                      }
                      default: {
                        return (
                          <TableCell key={key} component="th" scope="row">
                            <Typography className="">{value}</Typography>
                          </TableCell>
                        );
                      }
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="pt-24">
            <Button variant="outlined">See all transactions</Button>
          </div>
        </div>
        {/* <>{open && <h1>Hello</h1>}</> */}
      </Paper>
    </>
  );
}

export default memo(ProductsTable);
