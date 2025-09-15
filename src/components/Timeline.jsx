import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";
import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";
import assignLanes from "../assignLanes";
import {useTimeline} from "../hooks/useTimeline";
import {calculateItemPosition} from "../utils/timelineUtils";
import {addDaysToDate} from "../utils/dateUtils";

const TimelineContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${CONFIG.COLORS.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const LanesContainer = styled.div`
  position: relative;
  background: ${CONFIG.COLORS.background};
  width: 100%;
  min-width: 100%;
`;

const LaneContainer = styled.div`
  position: relative;
  background: ${CONFIG.COLORS.background};
  width: 100%;
  min-width: 100%;
`;

const LaneBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${CONFIG.LANE_HEIGHT}px;
  background: ${(props) => (props.index % 2 === 0 ? CONFIG.COLORS.laneEven : CONFIG.COLORS.laneOdd)};
  border-bottom: 1px solid ${CONFIG.COLORS.border};
`;

const Timeline = ({items: initialItems}) => {
  const [items, setItems] = useState(initialItems);
  const [containerWidth, setContainerWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const {pixelsPerDay, timelineWidth, dateRange} = useTimeline(items, containerWidth);

  const lanes = assignLanes(items);

  const handleUpdateItem = (itemId, updates) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          let updatedItem = {...item};

          if (updates.daysMoved) {
            const newStart = addDaysToDate(item.start, updates.daysMoved);
            const newEnd = addDaysToDate(item.end, updates.daysMoved);
            updatedItem = {...updatedItem, start: newStart, end: newEnd};
          }

          if (updates.name !== undefined) {
            updatedItem = {...updatedItem, name: updates.name};
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalHeight = lanes.length * CONFIG.LANE_HEIGHT;

  return (
    <div>
      <TimelineHeader />
      <LanesContainer style={{height: totalHeight}}>
        {/* Renderiza os fundos das lanes (linhas zebradas) */}
        {lanes.map((_, index) => (
          <LaneBackground key={index} index={index} style={{top: index * CONFIG.LANE_HEIGHT}} />
        ))}

        <TimelineContainer>
          {lanes.map((lane, laneIndex) =>
            lane.map((item) => {
              const position = calculateItemPosition(item, dateRange.start, pixelsPerDay);
              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  laneIndex={laneIndex}
                  position={position}
                  pixelsPerDay={pixelsPerDay}
                  onUpdateItem={handleUpdateItem}
                  isSelected={selectedItemId === item.id}
                  onSelect={setSelectedItemId}
                />
              );
            })
          )}
        </TimelineContainer>
      </LanesContainer>
    </div>
  );
};

export default Timeline;
