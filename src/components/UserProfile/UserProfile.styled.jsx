import styled from 'styled-components';

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 16px rgba(255, 255, 255, 0.3);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: #333;
`;

const Tag = styled.p`
  font-size: 18px;
  color: #999;
  text-align: center;
  margin: 10px 0 0 0;
`;

const Location = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
  color: #666;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 30px 0 0 0;
  padding: 0;
  gap: 20px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatLabel = styled.span`
  font-size: 18px;
  color: #999;
`;

const StatQuantity = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export {
    ProfileCard,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatList,
    StatItem,
    StatLabel,
    StatQuantity,
  };
