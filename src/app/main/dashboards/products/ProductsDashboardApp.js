// import React from 'react'
import ProductsDashboardAppHeader from "./ProductsDashboardAppHeader";
import withReducer from "app/store/withReducer";
import { useEffect, useMemo, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "@lodash";
import FusePageSimple from "@fuse/core/FusePageSimple";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import { motion } from 'framer-motion';
import reducer from "./store";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import {
  Menu,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import clsx from "clsx";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { shadows } from "@mui/material";
import menu from "./BasicExample";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BasicExample from "./BasicExample";
import { getWidgets, selectWidgets } from "./store/widgetsSlice";

import "@reach/menu-button/styles.css";

function ProductsDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [errors, setErrors] = useState({});
  const columns = ["Transaction ID", "Description", "Price", "Quantity"];
  const [selectedRow, setSelectedRow] = useState({});
  const [lists, setLists] = useState([
    { id: "528651571NT", name: "Morgan Page", amount: 1358.75, quantity: 75 },

    { id: "421436904YT", name: "Nita Hebert", amount: -1042.82, quantity: 85 },
    {
      id: "685377421YT",
      name: "Marsha Chambers",
      amount: 1828.16,
      quantity: 77,
    },

    {
      id: "884960091RT",
      name: "Charmaine Jackson",
      amount: 1647.55,
      quantity: 12,
    },
    { id: "361402213NT", name: "Maura Carey", amount: -927.43, quantity: 25 },
  ]);

  const findErrors = () => {
    const newErrors = {};

    //Id Error
    if (!id || id === "") newErrors.id = "Id is Required";

    //Name Error
    if (!name || name === "") newErrors.name = "Name is Required";

    //Id Error
    if (!quantity || quantity === "")
      newErrors.quantity = "Quantity is Required";

    //Name Error
    if (!amount || amount === "") newErrors.amount = "Amount is Required";

    return newErrors;
  };
  const sidePannel = () => {
    setOpen(!open);
  };

  const updateRow = (row) => {
    console.log(row, openUpdate);
    setFormValues(row);
    setSelectedRow(row);
    setOpenUpdate(!openUpdate);
  };

  const initialValues = {
    id: "",
    name: "",
    amount: "",
    quantity: "",
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const deleteRow = (row) => {
    const list = lists.filter(function (obj) {
      return obj.id !== row.id;
    });
    setLists(list);
  };

  const [formValues, setFormValues] = useState(initialValues);
  const { id, name, amount, quantity } = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      console.log("hello", newErrors);
      // We got errors!
      // setIsLoading(false);
      setErrors(newErrors);
    } else {
      setErrors({})
      if (open) {
        setLists((oldArray) => [...oldArray, formValues]);
        setOpen(false);
        setFormValues({});
      }
      if (openUpdate) {
        console.log(selectedRow.id);
        const list = lists.filter(function (obj) {
          console.log(obj);
          return obj.id !== formValues.id;
        });
        setLists((oldArray) => [...list, formValues]);
        setOpenUpdate(false);
        setFormValues({});
      }
    }
  };
  // const { columns, rows } = widgets?.recentTransactions;

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);
  return (
    <>
      <FusePageSimple
        header={
          <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
              <div className="flex flex-col flex-auto">
                <Typography className="text-3xl font-semibold tracking-tight leading-8">
                  Products dashboard
                </Typography>
                <Typography
                  className="font-medium tracking-tight"
                  color="text.secondary"
                >
                  Keep track of your financial status
                </Typography>
              </div>
              <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
                {/* <Button
              className="whitespace-nowrap"
              startIcon={<FuseSvgIcon size={20}>heroicons-solid:document-report</FuseSvgIcon>}
              >
              Reports
              </Button>
              <Button
              className="whitespace-nowrap"
              startIcon={<FuseSvgIcon size={20}>heroicons-solid:cog</FuseSvgIcon>}
              >
              Settings
            </Button> */}
                <Button
                  // onClick={props.sidePannel}
                  className="whitespace-nowrap"
                  variant="contained"
                  color="secondary"
                  onClick={sidePannel}
                  startIcon={
                    <FuseSvgIcon size={20}>heroicons-solid:save</FuseSvgIcon>
                  }
                >
                  {openUpdate ? "Update" : "Create"}
                </Button>
              </div>
            </div>
          </div>
        }
        content={
          <div className="w-medium px-10 md:px-32 pb-24">
            {useMemo(() => {
              const container = {
                show: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              };

              const item = {
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              };
            }, [widgets])}
            {/* <h1>Helloo</h1> */}
            {(open || openUpdate) && (
              <div
                className="row"
                id="add-products"
                style={{
                  float: "right",
                  margin: "5rem 4rem",
                  Width: "100vh",
                }}
                sx={{ boxShadow: 2 }}
              >
                <strong>
                  {" "}
                  <h1>Add Products</h1>
                </strong>
                <form onSubmit={handleSubmit}>
                  <div className="col">
                    <TextField
                      type="text"
                      name="id"
                      id="standard-basic"
                      label="Product"
                      style={{ width: "50vh" }}
                      variant="standard"
                      value={formValues.id}
                      defaultValue={selectedRow.id}
                      onChange={handleInputChange}
                    ></TextField>
                    {errors.id && <p style={{
                      fontSize: 20,
                      fontWeight: 300,
                      marginTop: '0.5rem',
                      color: 'red'

                    }}>{errors.id}</p>}
                  </div>
                  <div className="col">
                    <TextField
                      type="text"
                      name="name"
                      id="standard-multiline-basic"
                      multiline
                      rows={4}
                      style={{ width: "50vh" }}
                      label="Description"
                      variant="standard"
                      value={formValues.name}
                      defaultValue={selectedRow.name}
                      onChange={handleInputChange}
                    ></TextField>
                    {errors.name && <p style={{
                      fontSize: 20,
                      fontWeight: 300,
                      marginTop: '0.5rem',
                      color: 'red'

                    }}>{errors.name}</p>}
                  </div>
                  <div className="col">
                    <TextField
                      name="amount"
                      type="text"
                      id="standard-basic"
                      label="Price"
                      style={{ width: "50vh" }}
                      variant="standard"
                      value={formValues.amount}
                      defaultValue={selectedRow.amount}
                      onChange={handleInputChange}
                    ></TextField>
                    {errors.amount && <p style={{
                      fontSize: 20,
                      fontWeight: 300,
                      marginTop: '0.5rem',
                      color: 'red'

                    }}>{errors.amount}</p>}
                  </div>
                  <div className="col">
                    <TextField
                      type="text"
                      name="quantity"
                      id="standard-basic"
                      label="Quantity"
                      style={{ width: "50vh" }}
                      variant="standard"
                      value={formValues.quantity}
                      defaultValue={selectedRow.quantity}
                      onChange={handleInputChange}
                    ></TextField>
                    {errors.quantity && <p style={{
                      fontSize: 20,
                      fontWeight: 300,
                      marginTop: '0.5rem',
                      color: 'red'

                    }}>{errors.quantity}</p>}
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "#00a1e4",
                      margin: "5px",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            )}
            <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
              <div className="table-responsive mt-24">
                <Table className="simple w-full min-w-full">
                  <TableHead>
                    <TableRow>
                      {columns.map((column, index) => (
                        <TableCell key={index}>
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
                    {lists.map((row, index) => (
                      <TableRow key={index}>
                        {Object.entries(row).map(([key, value]) => {
                          <TableCell key={key} component="th" scope="row">
                            <Typography className="">{value}</Typography>
                          </TableCell>;
                          // <Button>H</Button>
                          switch (key) {
                            case "id": {
                              return (
                                <TableCell
                                  key={key}
                                  component="th"
                                  scope="row"
                                  style={{
                                    display: "flex",
                                  }}
                                >
                                  <EditIcon
                                    onClick={() => updateRow(row)}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                  <DeleteIcon
                                    onClick={() => deleteRow(row)}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                  <Typography
                                    className=""
                                    color="text.secondary"
                                  >
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
            </Paper>
          </div>
        }
      />
    </>
  );
}

export default withReducer(
  "productsDashboardApp",
  reducer
)(ProductsDashboardApp);
