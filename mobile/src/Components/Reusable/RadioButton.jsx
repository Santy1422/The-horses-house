import { View } from "react-native";

const RadioButton = (props) => {
    return (
        <View style={[{
          height: 16,
          width: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#929291',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 6,
                width: 6,
                borderRadius: 6,
                backgroundColor: '#5B5B5B',
              }}/>
              : null
          }
        </View>
    );
  }

  export default RadioButton