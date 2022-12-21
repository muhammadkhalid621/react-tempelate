import React from 'react'


export default function SidePannel() {
  return (
    <div
          className="row"
          id="add-products"
          style={{ float: "right", margin: "5rem 4rem", Width: "100vh" }}
          sx={{ boxShadow: 2 }}
        >
          <strong>
            {" "}
            <h1>Add Products</h1>
          </strong>
          <div className="col">
            <TextField
              id="standard-basic"
              label="Product"
              style={{ width: "50vh" }}
              variant="standard"
            />
          </div>
          <div className="col">
            <TextField
              id="standard-multiline-basic"
              multiline
              rows={4}
              style={{ width: "50vh" }}
              label="Description"
              variant="standard"
            />
            {/* <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
          /> */}
          </div>
          <div className="col">
            <TextField
              id="standard-basic"
              label="Price"
              style={{ width: "50vh" }}
              variant="standard"
            />
          </div>
          <div className="col">
            <TextField
              id="standard-basic"
              label="Quantity"
              style={{ width: "50vh" }}
              variant="standard"
            />
          </div>
        </div>
  )
}
