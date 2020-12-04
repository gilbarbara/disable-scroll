import styled from 'styled-components';

export const Wrapper = styled.main`
  font-family: sans-serif;
  text-align: center;
`;

export const Steps = styled.div`
  margin-top: 200px;
`;

export const Step = styled.div`
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  font-size: 60px;
  height: 200px;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #000;
  border-radius: 3px;
  border: 0;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  outline: none;
  padding: 6px 10px;
  white-space: nowrap;

  &:disabled {
    background-color: #999;
    font-weight: normal;
    pointer-events: none;
  }
`;

export const Header = styled.header`
  height: 200px;
  left: 0;
  padding-top: 50px;
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
`;

export const H1 = styled.h1`
  margin-top: 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  line-height: 1;
  margin: 15px auto 0;
  padding: 4px;
  text-align: center;
  width: 200px;

  &::placeholder {
    color: #ccc;
  }
`;
