import React, {useRef} from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";

const ItemContainer = styled.div`
  position: absolute;
  height: ${CONFIG.ITEM_HEIGHT}px;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
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

const TimelineItem = ({item, laneIndex, position}) => {
  const nodeRef = useRef(null);

  return (
    <ItemContainer
      style={{top: `${laneIndex * 80 + 10}px`, left: `${position.left}px`, width: `${position.width}px`}}
      ref={nodeRef}
    >
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
