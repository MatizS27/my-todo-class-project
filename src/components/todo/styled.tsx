import styled from "styled-components";

export const TodoTable = styled.table`
  margin: 30px auto;
  width: 100%;
  max-width: 1200px;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    th {
      padding: 20px;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
      text-align: center;
    }
  }

  tbody tr {
    transition: all 0.3s ease;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background: linear-gradient(90deg, #f8f9ff 0%, #fff 100%);
      transform: scale(1.01);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const TodoCol = styled.td`
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #333;

  &:first-child {
    width: 80px;
  }

  &:nth-child(2) {
    text-align: left;
    font-weight: 500;
    color: #2d3748;
  }

  &:nth-child(3), &:nth-child(4) {
    color: #718096;
    font-size: 12px;
  }

  button {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(245, 87, 108, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const Input = styled.input`
  padding: 16px 24px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  margin-left: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Check = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: #667eea;
  transform: scale(1.2);

  &:hover {
    transform: scale(1.3);
  }
`;