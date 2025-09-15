import {getDaysFromStart, getDaysDifference} from "./dateUtils";

export const calculateTimelineWidth = (timelineStart, timelineEnd, pixelsPerDay) => {
  const totalDays = getDaysDifference(timelineStart, timelineEnd) + 1;
  return totalDays * pixelsPerDay;
};

export const calculateItemPosition = (item, timelineStart, pixelsPerDay) => {
  const startOffset = getDaysFromStart(timelineStart, item.start);
  const duration = getDaysDifference(item.start, item.end) + 1;

  return {
    left: startOffset * pixelsPerDay,
    width: Math.max(duration * pixelsPerDay, 20), // Minimum width of 20px
  };
};
