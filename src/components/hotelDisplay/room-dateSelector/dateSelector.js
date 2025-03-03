import React from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
/* STYLE */
import "../room-dateSelector/dateSelector.scss";


const dateSelector = ({fromDate, toDate, setFromDate, setToDate}) => {

    const handleFromDateChange = (date) => {
        setFromDate(date);
        const formattedFromDate = dayjs(date).format('YYYY-MM-DD');
        console.log(formattedFromDate);
      };
    
      const handleToDateChange = (date) => {
        setToDate(date);
        const formattedToDate = dayjs(date).format('YYYY-MM-DD');
        console.log(formattedToDate);
      };


  return (
    <div className='date-selector'>
        <div className='date-selector-from'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                labelId="from"
                label="From"
                value={fromDate}
                onChange={handleFromDateChange}
                />
            </LocalizationProvider>
        </div>
        <div className='date-selector-to'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                labelId="to"
                label="To"
                value={toDate}
                onChange={handleToDateChange}
                />
            </LocalizationProvider>        
        </div>
    </div>
  )
}

export default dateSelector