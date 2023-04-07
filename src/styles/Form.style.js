import styled from "styled-components";

export const FormWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #005149;
  padding: 50px;
  border-radius: 10px;
  width: 220px;
  height: 400px;
  box-shadow: 10px 10px 57px -3px rgba(0, 0, 0, 0.27);

  .closeIcon {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 20px;
    color: #fff;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 4px;
  outline: none;
  height: 15.5px;
`;

export const FormLabel = styled.label`
  margin: 10px 0;
  font-weight: 500;
  color: #fff;
`;

export const SubmitButton = styled.input`
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: 1.5px solid #fff;
  border-radius: 4px;
  padding: 7px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  position: absolute;
  bottom: 43px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    background-color: #005149;
    color: #fff;
    border: 1.5px solid #fff;
  }
`;

export const Error = styled.p`
  position: absolute;
  top: 10px;
  left: 25px;
  color: #ff3434;
  font-weight: 500;
  font-size: 15px;
`;

export const DropdownContainer = styled.div`
    position: relative;
    z-index: 999;

    .dropdownInput {
        position: relative;
        height: 19px;
        background-color: #fff;
        border-radius: 4px;
        padding: 4px;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        font-weight: 600;
        font-size: 14px;
        color: #000;

        :hover {
            background-color: #EFEFEF;
        }
    }

        .dropdownIcon {
            position: absolute;
            top: 4px;
            right: 4px;
            font-size: 19px;
        }

    .dropdown {
        background-color: #fff;
        border-radius: 4px;
        padding: 0 12px;
        position: absolute;
        top: 35px;
        left: 0;
        width: 100%;
        box-shadow: 10px 10px 97px -10px rgba(0,0,0,0.40);
    }
`;

export const Option = styled.h2`
    font-weight: 600;
    font-size: 14px;
    padding: 7px;
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:not(&:last-of-type) {
        margin-bottom: 12px;
    }

    &:hover {
        color: #005149;
        background-color: rgba(5, 5, 5, 0.12);
    }
`;

export const DateContainer = styled.div`
  .datepicker {
    background-color: #fff;
    border-radius: 4px;
  }
`
