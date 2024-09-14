import React from "react";

const ShortDate = ({ date, className }) => {
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = String(dateObj.getFullYear()).slice(-2);

    return `${month}/${day}/${year}`;
  };

  return <span className={className}>{formatDate(date)}</span>;
};

export default ShortDate;
