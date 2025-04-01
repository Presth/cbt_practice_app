import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  let [currentValue, setCurrentValue] = useState("");

  const getData = async () => {
    try {
      const value: String | null = await AsyncStorage.getItem(key);
      setCurrentValue(value);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (newvalue: string): Promise<void> => {
    try {
      console.log(newvalue);
      await AsyncStorage.setItem(key, newvalue);
      setCurrentValue(newvalue);
    } catch (e) {
      // saving error
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setCurrentValue(null);
    } catch (e) {
      // remove error
    }
  };

  return [currentValue, storeData, removeData];
};

export default useLocalStorage;
