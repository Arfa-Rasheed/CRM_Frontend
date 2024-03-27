import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import dayjs from 'dayjs';
import './style.scss'

export default function Calendar(props) {
  const [value , setValue] =React.useState(null)
  const handleDateChange = (newValue) => {
    setValue(newValue); // Update local state
    props.onDateChange(newValue.format('MM/DD/YYYY')); // Pass selected date to parent component
  };

  React.useEffect(() => {
    console.log("value",props?.value);
    if (props?.value) {
      // Parse the date string into a dayjs object
      const parsedDate = dayjs(props?.value , 'M/D/YYYY');
      console.log("parsedDate",parsedDate);
      setValue(parsedDate.isValid() ? parsedDate : parsedDate ); // Set the parsed date as value if it's valid
    } else {
      setValue(null); // If props.value is null or undefined, set value state to null
    }
  }, [props?.value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DateRangePicker', 'DateRangePicker', 'DateRangePicker']}
      >
        <DatePicker
          label=""
          value={value}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}