import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
`;

export const LeftWrapper = styled.div`
  width: 700px;
  margin-right: 20px;
`;

export const RightWrapper = styled.div`
  width: 280px;

`;

export const ListItem = styled.div`
  display: flex;
  background: rgb(255, 255, 255);
  padding: 15px;
  overflow: hidden;
  color: #565656;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const ItemLeft = styled.div`
  .title {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #d66e91;
    }
  }
  .description {
    width: 500px;
    line-height: 22px;
    margin-right: 20px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  .info {
    color: #d66e91;
    margin-top: 20px;
    font-size: 13px;
    line-height: 22px;
  }
`;
