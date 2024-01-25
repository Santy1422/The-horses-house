import Slider from "react-native-a11y-slider";
import { View } from "react-native";


export default ReusableRangeSlider = ({ min, max, initialValues, sliderValues, increment, onChange }) => {
  function Marker() {
    return <View style={{
      backgroundColor: "#FFFFFF",
      height: 24,
      width: 24,
      borderColor: "#000000",
      borderRadius: 999,
      borderWidth: 1,
      marginBottom: 4
    }}></View>
  }
  return (
    <Slider
      min={min}
      max={max}
      values={initialValues}
      increment={increment}
      sliderValues={sliderValues}
      selectedTrackStyle={{ transform: [{ scaleY: 3 }] }}
      trackStyle={{ transform: [{ scaleY: 3 }] }}
      style={{marginTop: 10}}
      markerComponent={Marker}
      onChange={onChange}
    />
  )
}