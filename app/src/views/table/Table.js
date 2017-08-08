// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";

import moment from "moment";
import numeral from "numeral";

import {
  Grid,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from "material-ui";
import {withStyles, createStyleSheet} from "material-ui/styles";
import {Search} from "material-ui-icons";

import {MuiStickySection, MuiCustomTextField} from "react-shared";

const styleSheet = createStyleSheet(theme => ({padded: theme.padded}));

const columnData = [
  {
    id: "text",
    numeric: false,
    disablePadding: false,
    label: "Text"
  }, {
    id: "number",
    format: "0,0",
    numeric: true,
    disablePadding: false,
    label: "Numeric",
    width: "200px"
  }, {
    id: "currency",
    format: "$ 0,0.00",
    numeric: true,
    disablePadding: false,
    label: "Currency",
    width: "200px"
  }, {
    id: "date",
    format: "L",
    numeric: false,
    disablePadding: false,
    label: "Date",
    width: "200px"
  }, {
    id: "timestamp",
    format: "L LT",
    numeric: false,
    disablePadding: false,
    label: "Time",
    width: "200px"
  }
];

numeral.zeroFormat('N/A');
numeral.nullFormat('N/A');
numeral.locales.en.currency.symbol = "\u20A8";

const data = [];
for (var i = 0; i < 50; i++)
  data.push({
    id: i,
    text: "Sample Text",
    date: moment().add(Math.random() * 365 * 9, "days"),
    timestamp: moment().add(Math.random() * 24 * 60, "minutes"),
    number: Math.round(Math.random() * 99999),
    currency: parseFloat((Math.random() * 99999).toFixed(2))
  });

class _Table extends Component {
  state = {
    sortColumn: 'text',
    sortOrder: 'asc',
    filterValue: 'Filtered text...'
  }

  formatDisplay(value, format, numeric) {
    if (numeric && format)
      return numeral(value).format(format);
    else if (!numeric && format)
      return moment(value).format(format);
    else
      return value;
    }

  handleSorting(id) {
    let {sortColumn, sortOrder} = this.state;
    if (sortColumn === id)
      sortOrder = sortOrder === "asc"
        ? "desc"
        : "asc";
    else {
      sortColumn = id;
      sortOrder = "asc";
    }
    this.setState({sortOrder, sortColumn});
  }

  render() {
    const {classes} = this.props;
    const {sortColumn, sortOrder, filterValue} = this.state;
    return (
      <div className={classes.padded}>
        <MuiStickySection>
          <Toolbar disableGutters>
            <Typography type="headline" color="accent">Table Example</Typography>
            <Grid item xs/>
            <MuiCustomTextField label="Filter" size={30} icon={(<Search/>)} value={filterValue} handleChange={filterValue => this.setState({filterValue})}/>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                {columnData.map(column => (
                  <TableCell compact key={column.id} numeric={column.numeric} disablePadding={column.disablePadding} width={column.width || "auto"}>
                    <TableSortLabel active={sortColumn === column.id} direction={sortOrder} onClick={() => this.handleSorting(column.id)}>{column.label}</TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </MuiStickySection>
        <Table>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                {columnData.map(column => (
                  <TableCell compact key={column.id} numeric={column.numeric} disablePadding={column.disablePadding} width={column.width || "auto"}>
                    {this.formatDisplay(row[column.id], column.format, column.numeric)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default withStyles(styleSheet)(connect(mapStateToProps)(_Table));
