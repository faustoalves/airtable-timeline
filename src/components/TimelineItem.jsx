import React, {useRef} from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {CONFIG} from "../constants/constants";
import {motion} from "framer-motion"; // Para animações suaves

const ItemContainer = styled.div`
  position: absolute;
  height: ${CONFIG.ITEM_HEIGHT}px;
  user-select: none;
  box-shadow: ${CONFIG.COLORS.shadow};
  border-radius: ${CONFIG.ITEM_BORDER}px;
  cursor: grab;
  color: ${CONFIG.COLORS.primary};
  background-color: ${CONFIG.COLORS.background};

  &:hover {
    background: ${CONFIG.COLORS.primary};
    box-shadow: ${CONFIG.COLORS.shadow};
    color: ${CONFIG.COLORS.background};
    z-index: 10;
    transform: translateY(-2px);
  }

  &:active {
    cursor: grabbing;
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

const TimelineItem = ({item, laneIndex, position, pixelsPerDay, onUpdateItem}) => {
  const nodeRef = useRef(null);
  const topPosition = laneIndex * CONFIG.LANE_HEIGHT + CONFIG.LANE_PADDING;

  const handleDragStop = (e, data) => {
    const newLeft = Math.max(0, data.x);
    const daysMoved = Math.round(newLeft / pixelsPerDay) - Math.round(position.left / pixelsPerDay);

    if (daysMoved !== 0) {
      onUpdateItem(item.id, {daysMoved});
    }
  };

  return (
    <Draggable
      key={`${item.id}-${position.left}`} // Key única para forçar re-render quando posição muda
      nodeRef={nodeRef}
      axis="x" // Só permite movimento horizontal
      position={{x: position.left, y: 0}} // Posição controlada
      onStop={handleDragStop} // Callback quando para de arrastar
    >
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
    </Draggable>
  );
};

export default TimelineItem;
