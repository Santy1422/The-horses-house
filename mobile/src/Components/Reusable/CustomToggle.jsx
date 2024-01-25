import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Asegúrate de tener instalada la biblioteca

const CustomToggle = ({ onToggle, value }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(!value)} >
      <Icon
        name={value ? 'chevron-down' : 'chevron-up'}
        size={24}
        color='gray'
      />
    </TouchableOpacity>
  );
};

export default CustomToggle;

  