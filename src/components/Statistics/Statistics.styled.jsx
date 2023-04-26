import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  background-color: ${getRandomHexColor};
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export { Statistic, Title, StatList, StatItem, Label, Percentage };