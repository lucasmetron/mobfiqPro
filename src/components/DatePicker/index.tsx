import React, { useState } from "react";
import { Button, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  type?: "date" | "time" | "datetime";
}

const DatePicker = ({ type = "date" }: DatePickerProps) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(!show);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Escolher data" />
      {show && (
        <DateTimePicker
          value={date}
          mode={type}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
