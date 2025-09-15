import {parseISO, differenceInDays} from "date-fns";

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
