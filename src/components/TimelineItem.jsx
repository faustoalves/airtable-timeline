import React, {useRef} from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";

const ItemContainer = styled.div`
  position: absolute;
  height: ${CONFIG.ITEM_HEIGHT}px;
  user-select: none;
  box-shadow: ${CONFIG.COLORS.shadow};
  border-radius: ${CONFIG.ITEM_BORDER}px;
  color: ${CONFIG.COLORS.primary};
  background-color: ${CONFIG.COLORS.background};

  &:hover {
    background-color: #027381;
    box-shadow: ${CONFIG.COLORS.shadow};
    color: ${CONFIG.COLORS.background};
    z-index: 10;
    transform: translateY(-2px);
  }
`;
const ItemContent = styled.div`
  padding: 3px 3px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const ItemName = styled.div`
  font-weight: 600;
  white-space: nowrap;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const ItemDates = styled.div`
  font-weight: 300;
  white-space: nowrap;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimelineItem = ({item, laneIndex, position}) => {
  const nodeRef = useRef(null);
  const topPosition = laneIndex * CONFIG.LANE_HEIGHT + CONFIG.LANE_PADDING;
  return (
    <ItemContainer
      style={{top: `${topPosition}px`, left: `${position.left}px`, width: `${position.width}px`}}
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
