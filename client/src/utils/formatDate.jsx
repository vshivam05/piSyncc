import React from "react";

const formatDate = (isoDate) => {
  //   const isoDate = "2025-06-17T05:40:07.572Z";
  const dateObj = new Date(isoDate);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract date parts
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Extract formatted time (hour:minute AM/PM)
  const time = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  
  const formatted = `${day}-${month}-${year} ${time}`;
//   console.log(formatted); // 
  return formatted;
};

export default formatDate;
