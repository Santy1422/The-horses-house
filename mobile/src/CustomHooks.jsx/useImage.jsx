import React, { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const useImage = () => {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(null)
  
  const uploadImage = async () => {
    try {
      const resp = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images
    });
      
      const { uri } = resp.assets[0];  
      // console.log(uri)
      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'image/jpeg',
        name: 'test.jpeg',
      });
      console.log(formData)
      // formData.append('upload_preset', 'ztq7o1jj');
      const token = await AsyncStorage.getItem("token");
      let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };
      
      let response = await axios.post("/horse/uploadHorsePic", formData, { headers: headers });
      // const response = await fetch('https://api.cloudinary.com/v1_1/dvhstnw3u/image/upload?api_key=376411672781128', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const responseData = await response.json();
      
      setUrl(response?.data?.url);
      // setSize(responseData?.bytes)
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return {
    url,
    setUrl,
    uploadImage,
    size
  };
}

