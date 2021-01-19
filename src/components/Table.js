  
import React from "react";
import TableBody from "../components/TableBody";
import "../index.css";

function Table({headings, users, handleSort }) {
    return (
        <div className="datatable mt-5">
            <table className="table table-striped table-hover table-condensed" id="table">
            <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
                < TableBody users={users}/>
            </table>
        </div>
    )
}
export default Table;