import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from "react-native";
import { Svg, Path } from "react-native-svg";

const Searchbar = ({ data, localAnswer, setLocalAnswer }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //   console.log("filteredData", filteredData);
  //   console.log("text", searchText);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredResults = [...data].filter((item) =>
      item.nombre.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredResults) {
      setFilteredData([...filteredResults]);
    }
  };

  const handleSelectResult = (selectedItem) => {
    setLocalAnswer(selectedItem);
    setSearchText(selectedItem);
    setFilteredData([]);
  };

  return (
    <View className="w-[100%]">
      <View className="relative flex flex-col justify-center ">
        <View className="absolute z-50 p-2">
          <Svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="#BEBDBD"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
        <TextInput
          placeholder="Buscar club"
          onChangeText={handleSearch}
          value={searchText}
          className="text-[#23254C] relative h-11 pl-9 pr-3.5 py-2.5 bg-white rounded shadow border border-gray-300 justify-start items-center inline-flex text-base font-latoRegular leading-normal"
        ></TextInput>
      </View>

      {searchText ? (
        <View className="absolute max-h-[248px] mt-12 bg-white rounded flex flex-row z-50">
          <ScrollView
            className={`relative ${
              !localAnswer ? "border border-gray-300" : null
            } w-[100%] rounded `}
          >
            {filteredData &&
              filteredData.map((club) => {
                return (
                  <TouchableOpacity
                    key={club.nombre}
                    onPress={() => handleSelectResult(club.nombre)}
                    className="px-2.5 py-3 "
                  >
                    <Text className=" text-[#23254C] text-sm font-normal font-lato leading-tight">
                      {club.nombre}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default Searchbar;