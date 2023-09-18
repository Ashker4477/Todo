import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Input from '../input';
import moment from 'moment';

function DateInput({ value, setValue }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Input onPressIn={() => {
                setOpen(true);
            }}
                value={value ? value : ""} 
                disabled
                image={require("../../assets/images/date/date.png")} />
            <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                minimumDate={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setValue(moment(date).format("YYYY-MM-DD"))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </KeyboardAvoidingView>
    )
}

export default DateInput;