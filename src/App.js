import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './App.css';

import values from './data.json';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Athlete",
          field: "athlete",
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,

        },
        {
          headerName: "Age",
          field: "age"
        },
        {
          headerName: "Country",
          field: "country"
        },
        {
          headerName: "Year",
          field: "year"
        },
        {
          headerName: "Date",
          field: "date"
        },
        {
          headerName: "Sport",
          field: "sport"
        },
        {
          headerName: "Gold",
          field: "gold"
        },
        {
          headerName: "Silver",
          field: "silver"
        },
        {
          headerName: "Bronze",
          field: "bronze"
        },
        {
          headerName: "Total",
          field: "total"
        }
      ],
      defaultColDef: {
        resizable: true,
        width: 100
      },
      rowSelection: "multiple",
      rowData: [],
      rowClassRules: {
        "selected-entity": function(params) {
          /* check in APP.css for the selected-entity */
          return  params.data.selectedEntity;
        }
      }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const updateData = data => {
      this.setState({ rowData: data },()=>{
        /* will set row as checked based on selected record */
        this.gridApi.forEachNode(function(node) {
          if (node.data.selectedEntity) {
            node.setSelected(true);
          }
        });
      });
    };
    updateData(values);

   
  };

  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(document.getElementById("quickFilter").value);
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", paddingTop: "35px", boxSizing: "border-box" }}>
          <div
            id="myGrid"
            style={{
              height: "1000px",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              suppressRowClickSelection={true}
              rowSelection={this.state.rowSelection}
              rowClassRules={this.state.rowClassRules}
              onGridReady={this.onGridReady}
              rowData={this.state.rowData}
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          <input
            type="text"
            onInput={this.onQuickFilterChanged.bind(this)}
            id="quickFilter"
            placeholder="quick filter..."
          />
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
     <GridExample />
    </div>
  );
}

export default App;
