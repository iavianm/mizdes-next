import React from "react";
import { useField } from "formik";
import { ButtonContainer, CounterWrapper } from "./StyledComponents";

interface NumberInputProps {
  label: string;
  name: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, name }) => {
  const [field, , helpers] = useField(name);
  return (
    <CounterWrapper>
      <label>{label}</label>
      <ButtonContainer>
        <button
          type="button"
          onClick={() => helpers.setValue(Math.max(0, field.value - 1))}
          disabled={field.value <= 0}
        >
          -
        </button>
        <span>{field.value}</span>
        <button type="button" onClick={() => helpers.setValue(field.value + 1)}>
          +
        </button>
      </ButtonContainer>
    </CounterWrapper>
  );
};

export default NumberInput;
