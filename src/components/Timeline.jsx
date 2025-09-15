import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";
import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";
import assignLanes from "../assignLanes";

const TimelineContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${CONFIG.COLORS.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Timeline = ({items: initialItems}) => {
  const [items, setItems] = useState(initialItems);

  const lanes = assignLanes(items);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <TimelineHeader />
      <TimelineContainer>
        {lanes.map((lane, laneIndex) =>
          lane.map((item) => {
            return <TimelineItem key={item.id} item={item} laneIndex={laneIndex} />;
          })
        )}
      </TimelineContainer>
    </div>
  );
};

export default Timeline;
