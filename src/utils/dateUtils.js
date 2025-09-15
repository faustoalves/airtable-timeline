import {parseISO, differenceInDays, addDays, subDays, format} from "date-fns";

const parseDate = (dateString) => parseISO(dateString);

export const getDaysDifference = (startDate, endDate) => {
  return differenceInDays(parseDate(endDate), parseDate(startDate));
};

export const getDateRange = (items) => {
  const dates = items.flatMap((item) => [item.start, item.end]);
  const sortedDates = dates.sort();
  return {
    start: sortedDates[0],
    end: sortedDates[sortedDates.length - 1],
  };
};

export const getDaysFromStart = (startDate, currentDate) => {
  return differenceInDays(parseDate(currentDate), parseDate(startDate));
};

export const addDaysToDate = (dateString, days) => {
  const date = parseDate(dateString);
  return format(addDays(date, days), "yyyy-MM-dd");
};

export const subtractDaysFromDate = (dateString, days) => {
  const date = parseDate(dateString);
  return format(subDays(date, days), "yyyy-MM-dd");
};

export const formatDate = (dateString, formatStr = "MMM dd, yyyy") => {
  return format(parseDate(dateString), formatStr);
};
