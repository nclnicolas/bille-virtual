import { Icon, Input } from "@rneui/base";
import React from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

interface InputType {
  errorMessage: boolean;
  textError: string;
  nameIcon: string;
  valueInput: string;
  typeInput?: KeyboardTypeOptions;
  secureText?: boolean;
  label: string;
  placeHolder: string;
  handleFunction: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onFocus?: () => void;
}

const Inputs = ({
  errorMessage,
  textError,
  nameIcon,
  valueInput,
  typeInput,
  label,
  placeHolder,
  secureText,
  handleFunction,
  onFocus,
}: InputType) => {
  return (
    <Input
      containerStyle={{
        minWidth: 350,
        backgroundColor: "#2e91a0",
        marginHorizontal: 10,
        marginTop: 50,
      }}
      errorMessage={errorMessage ? textError : ""}
      errorStyle={{}}
      errorProps={{}}
      label={label}
      labelStyle={{ color: "black" }}
      labelProps={{}}
      leftIcon={<Icon name={nameIcon} size={20} />}
      placeholder={placeHolder}
      secureTextEntry={secureText ? secureText : false}
      placeholderTextColor="black"
      keyboardType={typeInput ? typeInput : "default"} //Input tipo email
      autoCapitalize="none" //Evitamos mayusculas automaticas
      value={valueInput}
      onChange={handleFunction}
      onFocus={onFocus ? onFocus : () => {}}
    />
  );
};

export default Inputs;
