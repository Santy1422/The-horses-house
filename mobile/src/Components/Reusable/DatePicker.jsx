import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const DateInput = ({ setValue, dateLabel, hintEditable }) => {
  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [date, setdate] = useState('');

  const showHint = () => {
    setVisible(!visible);
  };

  const onFocusDivBlue = () => {
    if (error) return;
    setDivBlue(true);
  };

  const onBlurDivBlue = () => {
    setDivBlue(false);
  };

  const validatedate = (date) => {
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return dateRegex.test(date);
  };

  useEffect(() => {
    if (isValid) {
      setError('');
      setValue(date);
    } else {
      setError('Enter a correct date');
      setDivBlue(false);
      setValue('');
    }
  }, [isValid, date]);

  const onChange = (text) => {
    setdate(text);
    setIsValid(validatedate(text));
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', marginVertical: 10 }}>
      <Text style={{ width: '100%', height: 20, fontFamily: 'Arial' }}>{dateLabel}</Text>

      <View
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          borderWidth: divBlue ? 2 : 1,
          borderColor: divBlue ? 'blue' : error ? 'red' : date ? 'green' : 'gray',
        }}>
        <TextInput
          value={date}
          onChangeText={text => onChange(text)}
          placeholder={'01/01/2023'}
          style={{ flex: 1 }}
          onFocus={onFocusDivBlue}
          onBlur={onBlurDivBlue}
        />
        {error ? (
          <TouchableOpacity onPress={showHint}>
            {/* Your error icon */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={showHint}>
            {/* Your regular icon */}
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <Text style={{ width: '100%', height: 20, fontFamily: 'Arial', color: 'red' }}>{error}</Text>
      ) : (
        <Text style={{ width: '100%', height: 20, fontFamily: 'Arial', color: 'gray', visibility: visible ? 'visible' : 'hidden' }}>{hint}</Text>
      )}
    </View>
  );
};

export default DateInput;