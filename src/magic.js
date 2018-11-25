import React, { Component } from "react";
const TableComponent = props => {
  return (
    <table>
      <tbody>
        <tr>{props.children}</tr>
      </tbody>
    </table>
  );
};

const TableColumns = props => {
  return (
    <React.Fragment>
      <td>td A</td>
      <td>td B</td>
      <td>td C</td>
    </React.Fragment>
  );
};
export default class Magic extends Component {
  render() {
    return (
      <TableComponent>
        <TableColumns />
      </TableComponent>
    );
  }
}
