import React, {useRef} from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";

const ItemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${CONFIG.ITEM_HEIGHT}px;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px 12px;
  box-sizing: border-box;
`;
const ItemContent = styled.div`
  padding: 8px 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #336699;
  overflow: hidden;
`;

const ItemName = styled.div`
  font-size: 13px;
`;

const ItemDates = styled.div`
  font-size: 11px;
`;

const TimelineItem = ({item, laneIndex}) => {
  const nodeRef = useRef(null);

  return (
    <ItemContainer style={{top: `${laneIndex * 80 + 10}px`}} ref={nodeRef}>
      <ItemContent>
        <ItemName>
          {laneIndex}-{item.name}
        </ItemName>
        <ItemDates>
          {item.start} - {item.end}
        </ItemDates>
      </ItemContent>
    </ItemContainer>
  );
};

export default TimelineItem;
