import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const LogOutBtn = styled.button`
  border-radius: 8px;

  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: rgb(161, 240, 226);
  color: rgb(53, 62, 66);
  border: 1px solid rgba(32, 26, 26, 0.715);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: rgba(87, 89, 87, 0.648) 0px 1px 3px;
  }
  &:focus {
    background-color: rgb(15, 126, 106);
  }
`;
