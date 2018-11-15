import styled from 'styled-components';

export const BlockWrapper = styled.div`
  background: rgb(252, 249, 250);
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 5px;
  .title {
    color: #fcf9fa;
    font-size: 15px;
    line-height: 30px;
    padding: 0 0 0 10px;
    background: #d66e91;
  }
`;

export const ListWrapper = styled.ul`
  padding: 10px;
  li {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5px;
    padding-left: 20px;
    line-height: 22px;

    a {
      color: #4c4c4c;
    }
  }
`;
