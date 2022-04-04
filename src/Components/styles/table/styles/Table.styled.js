
import styled from 'styled-components'

export const StyledTable = styled.table`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
`

export const THead = styled.thead`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#f3f6f8'};
  color: ${({ color }) => color || '#333'};
`

export const TFoot = styled.tfoot`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
`

export const TBody = styled.tbody`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
`

export const TR = styled.tr`
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
`

export const TH = styled.th`
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  color: ${({ color }) => color || '#333'};
`

export const TD = styled.td`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
`
