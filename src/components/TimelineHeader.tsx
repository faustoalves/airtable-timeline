import React from "react";
import styled from "styled-components";
import {CONFIG} from "../constants/constants";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: ${CONFIG.COLORS.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${CONFIG.COLORS.primary};
  color: ${CONFIG.COLORS.background};
  font-size: 24px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 10px;
`;

const TimelineHeader = () => {
  return <TitleContainer>Project Airtable - Timeline</TitleContainer>;
};

export default TimelineHeader;
