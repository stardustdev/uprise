import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
}));

function Chart({ data: dataProp, labels, className, ...rest }) {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'This year',
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.tertiary.light,
          theme.palette.primary.main,
          theme.palette.tertiary.light,
          theme.palette.primary.main,
          theme.palette.tertiary.light,
        ],
        data: dataProp,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
    labels,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false,
    },
    layout: {
      padding: 0,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.common.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          let label = `Age ${tooltipItem.xLabel}: ${tooltipItem.yLabel}`;
          return label;
        },
      },
    },
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Bar data={data} options={options} />
    </div>
  );
}

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired,
};

export default Chart;
