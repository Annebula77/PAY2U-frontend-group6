import { useTheme } from '@mui/material/styles';

const CalendarIcon = () => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 3V5H14V3H16V5H20C20.5523
       5 21 5.44772 21 6V20C21 20.5523 20.5523
        21 20 21H4C3.44772 21 3 20.5523
         3 20V6C3 5.44772 3.44772 5 4 5H8V3H10ZM18.999
          13H4.999L5 19H19L18.999 13ZM16 15C16.5523 15
           17 15.4477 17 16C17 16.5523 16.5523 17 16 17C15.4477
            17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15ZM8
             7H5L4.999 11H18.999L19 7H16V9H14V7H10V9H8V7Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
};

export default CalendarIcon;
