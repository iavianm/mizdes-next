import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  gap: 10px;

  & > div {
    width: 48%;
  }

  @media (max-width: 600px) {
    display: block;
    & > div {
      width: calc(100% - 20px);
    }
  }
`;

export const FormRowName = styled.div`
  width: 100%;
  margin-bottom: 10px;

  & > input {
    width: calc(100% - 20px);
  }
`;

export const FormRowNumber = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.6rem;
  height: 18px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;

  & > button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin: 0;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  & > span {
    display: flex;
    margin: 0 10px;
    align-items: center;
  }

  & > div {
    align-items: center;
    justify-content: center;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0;
`;

export const FieldContainer = styled.div`
  width: 100%;
  & > input {
    width: 90%;
  }

  & > textarea {
    width: calc(100% - 20px);
  }

  @media (max-width: 600px) {
    & > input {
      width: 100%;
    }
  }
`;

export const NumberContainer = styled.div`
  width: 100%;
  margin: 0 0 18px 0;
`;

export const ErrorMessageContainer = styled.div`
  height: 18px;
  margin-top: 5px;
`;
