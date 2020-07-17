import React, { useState } from 'react';
import { makeStyles, Card } from '@material-ui/core';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const useStyles = makeStyles(theme => ({
  calendar: {
    fontSize: theme.spacing(2.5),
    backgroundColor: theme.palette.common.white,
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day, { selected }) => {
    if (selected) {
      setSelectedDays(
        selectedDays.find(selectedDay => !DateUtils.isSameDay(selectedDay, day))
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };
  return (
    <div>
      <Card>
        <DayPicker
          className={classes.calendar}
          onDayClick={handleDayClick}
          modifiers={{ selected: selectedDays }}
          firstDayOfWeek={1}
        />
      </Card>
    </div>
  );
};

export default Calendar;
