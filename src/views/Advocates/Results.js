import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Table,
  TableSortLabel,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Grid,
  Avatar,
} from '@material-ui/core';
import { Facebook, LinkedIn, Instagram, ArrowDropUp } from '@material-ui/icons';

import GenericMoreButton from 'src/components/GenericMoreButton';
import Search from 'src/components/Search';
import getInitials from 'src/utils/getInitials';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'name', label: 'NAME' },
  { id: 'industry', label: 'INDUSTRY' },
  { id: 'location', label: 'LOCATION' },
  { id: 'age', label: 'AGE' },
  { id: 'gender', label: 'GENDER' },
  { id: 'reach', label: 'REACH' },
];

const useStyles = makeStyles(theme => ({
  root: {},
  header: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  delete_button: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

function Results({ className, customers, ...rest }) {
  const classes = useStyles();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked
      ? customers.map(customer => customer.id)
      : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(1)
      );
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <CardHeader
          className={classes.header}
          title={
            <Grid container spacing={2} xs={12}>
              <Grid item xs={5}>
                <Search />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                <Button
                  className={classes.delete_button}
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
              <Grid item lg={2}>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        color="primary"
                        indeterminate={
                          selectedCustomers.length > 0 &&
                          selectedCustomers.length < customers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    {headCells.map(headCell => (
                      <TableCell
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                      >
                        <TableSortLabel
                          active
                          direction={orderBy === headCell.id ? order : 'asc'}
                          onClick={e => handleRequestSort(e, headCell.id)}
                          IconComponent={ArrowDropUp}
                        >
                          {headCell.label}
                          {orderBy === headCell.id ? (
                            <span className={classes.visuallyHidden}>
                              {order === 'desc'
                                ? 'sorted descending'
                                : 'sorted ascending'}
                            </span>
                          ) : null}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stableSort(customers, getComparator(order, orderBy))
                    .slice(0, rowsPerPage)
                    .map(customer => (
                      <TableRow
                        hover
                        key={customer.id}
                        selected={selectedCustomers.indexOf(customer.id) !== -1}
                      >
                        <TableCell align="center" padding="checkbox">
                          <Checkbox
                            checked={
                              selectedCustomers.indexOf(customer.id) !== -1
                            }
                            color="primary"
                            onChange={event =>
                              handleSelectOne(event, customer.id)
                            }
                            value={
                              selectedCustomers.indexOf(customer.id) !== -1
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className={classes.nameCell}>
                            <Avatar
                              className={classes.avatar}
                              src={customer.avatar}
                            >
                              {getInitials(customer.name)}
                            </Avatar>
                            <div>
                              <div>{customer.name}</div>
                              <div className={classes.iconGroup}>
                                <Facebook fontSize="small" />
                                <LinkedIn fontSize="small" />
                                <Instagram fontSize="small" />
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className={classes.cell}>
                            <div>{customer.industry}</div>
                            <div>{customer.field}</div>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <div className={classes.cell}>
                            <div>{customer.location.split(',')[0]}</div>
                            <div>{customer.location.split(',')[1]}</div>
                          </div>
                        </TableCell>
                        <TableCell align="center">{customer.age}</TableCell>
                        <TableCell align="center">{customer.gender}</TableCell>
                        <TableCell align="center">{customer.reach}</TableCell>
                        <TableCell align="center">
                          <GenericMoreButton />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array,
};

Results.defaultProps = {
  customers: [],
};

export default Results;
