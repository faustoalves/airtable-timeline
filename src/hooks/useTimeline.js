import {useMemo} from "react";
import {getDateRange} from "../utils/dateUtils";
import {calculateTimelineWidth} from "../utils/timelineUtils";

export const useTimeline = (items, containerWidth) => {
  // Calculate the date range
  const dateRange = useMemo(() => getDateRange(items), [items]);

  // Calculate the effective container width
  const effectiveContainerWidth = containerWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);

  // Calculate the pixels per day
  const pixelsPerDay = useMemo(() => {
    const totalDays = Math.max(1, new Date(dateRange.end) - new Date(dateRange.start)) / (1000 * 60 * 60 * 24) + 1;
    return Math.round(effectiveContainerWidth / totalDays);
  }, [dateRange, effectiveContainerWidth]);

  // Calculate the timeline width
  const timelineWidth = useMemo(
    () => calculateTimelineWidth(dateRange.start, dateRange.end, pixelsPerDay),
    [dateRange, pixelsPerDay]
  );

  return {
    dateRange,
    pixelsPerDay,
    timelineWidth,
  };
};
