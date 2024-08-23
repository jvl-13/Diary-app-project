import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

// Styled PickersDay for custom colors
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'customColors',
})(({ customColors }) => ({
  ...(customColors && {
    backgroundColor: customColors.backgroundColor,
    color: customColors.color,
    '&:hover': {
      backgroundColor: customColors.backgroundColor,
    },
  }),
}));

const initialValue = dayjs();

function ServerDay(props) {
  const { highlightedDays = {}, day, outsideCurrentMonth, ...other } = props;
  const formattedDay = day.format('YYYY-MM-DD');
  const dayColor = highlightedDays[formattedDay];

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={undefined}
    >
      <CustomPickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        customColors={dayColor ? { backgroundColor: dayColor, color: 'white' } : {}}
      />
    </Badge>
  );
}

export default function DateCalendarServerRequest({ onDateChange }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState({});
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user?._id);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };
  const fetchHighlightedDays = () => {
    setIsLoading(true);
    axios.get(`http://localhost:8000/api/get-all-journal?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((response) => {
        const colorsMap = {};
        response.data.forEach((entry) => {
          const formattedDate = dayjs(entry.date).format('YYYY-MM-DD');
          colorsMap[formattedDate] = entry.template_id.color; // Assuming entry.template_id.color is correctly fetched
        });
        setHighlightedDays(colorsMap);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching journal entries:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchHighlightedDays();
  }, [userId, accessToken]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        onChange={handleDateChange}
        value={selectedDate}
        loading={isLoading}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
