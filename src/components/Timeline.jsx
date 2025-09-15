import React from 'react'
import styled from 'styled-components';
import { CONFIG } from '../constants/constants';
import TimelineHeader from './TimelineHeader';
import TimelineItem from './TimelineItem';



const TimelineContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${CONFIG.COLORS.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;


const Timeline = ({ items: initialItems }) => {
  return (
    <div>
      <TimelineHeader />
      <TimelineContainer>
        {initialItems.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
        <TimelineItem items={initialItems} />
      </TimelineContainer>
      
    </div>

  )
}

export default Timeline