import React, { useState, useEffect } from 'react';
import DateCalendarServerRequest from './DateCalendar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

function Common() {
  const [journalEntries, setJournalEntries] = useState([]);
  const userId = useSelector(state => state.auth.user?._id);
  const accessToken = useSelector(state => state.auth.accessToken);

  const fetchJournalByMonthAndYear = (month, year) => {
    axios.get(`http://localhost:8000/api/get-journal/month/${month}/year/${year}`, {
      params: {
        user_id: userId
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((response) => {
        const formattedEntries = response.data.map(entry => ({
          ...entry,
          date: dayjs(entry.date).format('DD/MM/YYYY')
        }));
        // Sort entries by date in ascending order
        formattedEntries.sort((a, b) => dayjs(a.date, 'DD/MM/YYYY').valueOf() - dayjs(b.date, 'DD/MM/YYYY').valueOf());
        setJournalEntries(formattedEntries);
      })
      .catch((error) => {
        console.error('Error fetching journal entries:', error);
      });
  };

  const handleDateChange = (date) => {
    const month = date.month() + 1; // month() returns 0-indexed month (0 for January)
    const year = date.year();
    fetchJournalByMonthAndYear(month, year);
  };

  useEffect(() => {
    // Fetch initial data when component mounts
    fetchJournalByMonthAndYear(new Date().getMonth() + 1, new Date().getFullYear());
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="w-1/4">
      <div className="bg-[#f5f4f4] rounded-3xl w-80 shadow-lg">
        <DateCalendarServerRequest onDateChange={handleDateChange} />
      </div>
      <div style={{ height: "27rem" }} className="bg-[#f5f4f4] font-text rounded-3xl w-80 mt-6 mb-7 shadow-lg overflow-auto">
        {journalEntries.map((entry, index) => (
          <a key={index} href={`/detail/${entry._id}`}>
            <div className="m-4">
              {/* <hr className="border border-black h-1" /> */}
              <p className={`font-bold ${entry.template_id.color} text-base mb-2`}>{entry.date}<span> - {entry.template_id.name}</span></p>
              <p className="font-semibold text-sm underline underline-offset-1 mb-4">{entry.header}</p>
              {/* <p className="mb-3 text-sm">{entry.text}</p> */}
              <hr className="border-1 border-black h-1" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Common;
