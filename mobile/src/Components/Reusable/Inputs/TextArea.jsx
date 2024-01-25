import { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Svg } from "react-native-svg";

const TextArea = ({ value, setValue, placeholder, label, hintEditable, weight, rows }) => {
  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState('invisible');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [ViewBlue, setDivBlue] = useState(false);
  const [text, setText] = useState('');

  const onFocusDivBlue = (e) => {
    if (error) return;
    setDivBlue(!ViewBlue);
  }

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  }

  const showHint = () => {
    if (visible === 'invisible') setVisible('visible');
    if (visible === 'visible') setVisible('invisible');
  };

  const validateText = (text) => {
    const textRegex = /^[a-zA-Z0-9\s]+$/;
    return textRegex.test(text);
  }

  useEffect(() => {
    if (isValid) {
      setError('');
      setValue(text);
    } else {
      setError('please enter a correct text');
      setValue('');
      setDivBlue(false);
    }
  }, [isValid, text]);

  const onChange = (e) => {
    setText(e.target.value);
    setIsValid(validateText(e.target.value));
  };

  return (
    <View className={`flex flex-col ${weight} items-start gap-1.5 `}>
      <Text className="w-10 h-5 font-primary">{label}</Text>
      <View className={`flex h-auto px-3.5 py-2.5 bg-white border rounded items-center gap-2 inline-flex w-full ${ViewBlue ? "border-blue-300" : ''} ${error ? "border-red-300" : text ? 'border-green-300' : ''}`}>
        <TextInput
          value={text}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          multiline={true}
          numberOfLines={4 || rows}
          style={{ resize: "none" }} 
          className="w-full h-auto outline-0"
          onFocus={(e) => onFocusDivBlue(e)}
          onBlur={(e) => onBlurDivBlue(e)}
        />
        {error ? (
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Error icon */}
          </Svg>
        ) : (
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showHint} className="hover:cursor-pointer">
            {/* Hint icon */}
          </Svg>
        )}
      </View>
      {error ? (
        <Text className="w-full h-4 text-gray-500 text-sm font-light leading-6 font-primary ">{error}</Text>
      ) : (
        <Text className={`w-full h-4 text-gray-500 text-sm font-light leading-6 font-primary  ${visible}`} >{hint}</Text>
      )}
    </View>
  );
};

export default TextArea;
