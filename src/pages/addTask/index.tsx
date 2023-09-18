import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, Text, View, KeyboardAvoidingView } from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './style';
import { useAppDispatch, useAppSelector } from '../../slice/store';
import { addTask, editTask } from '../../slice/card.slice.ts';
import DateInput from '../../components/date';
import TimeInput from '../../components/time';
import { Routes } from '../../routes';

function AddTask({ navigation: { navigate }, route }: any) {
    const dispatch = useAppDispatch();
    const task = useAppSelector((state: any) => state?.card);
    const index = route?.params?.index;
    const [value, setValue] = useState<any>({
        taskName: '',
        subject: '',
        date: '',
        beginTime: '',
        finishedTime: '',
    });
    useEffect(() => {
        if (index > -1) {
            setValue(task[index]);
        }
        return () => {
            setValue({
                taskName: '',
                subject: '',
                date: '',
                beginTime: '',
                finishedTime: '',
            });
        }
    }, [index]);
    return (
        <ScrollView style={styles.bg}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#eeecf2'} />
            <View style={styles.pencil}>
                <Image resizeMode='contain'
                    style={styles.dot}
                    source={require("../../assets/images/ellipse/Ellipse166.png")} />
                <Image resizeMode='contain'
                    source={require("../../assets/images/pencil/pencil1.png")} />
            </View>
            <View style={styles.mT15}>
                <Text style={styles.mH24}>Task name</Text>
                <Input value={value?.taskName} onChangeText={(t: string) => setValue((prev: any) => ({ ...prev, taskName: t }))}
                    image={require("../../assets/images/note/note.png")} />
            </View>
            <View style={styles.mT15}>
                <Text style={styles.mH24}>Subject</Text>
                <Input value={value?.subject} onChangeText={(t: string) => setValue((prev: any) => ({ ...prev, subject: t }))}
                    image={require("../../assets/images/subject/subject.png")} />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.mT15}>
                    <Text style={styles.mH24}>Date</Text>
                    <DateInput value={value?.date} setValue={(t: string) => setValue((prev: any) => ({ ...prev, date: t }))} />
                </View>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.mH24}>Begining time</Text>
                        <TimeInput value={value?.beginTime} setValue={(t: any) => setValue((prev: any) => ({ ...prev, beginTime: t }))} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.mH24}>Finished time</Text>
                        <TimeInput value={value?.finishedTime} setValue={(t: any) => setValue((prev: any) => ({ ...prev, finishedTime: t }))} />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.buttonContainer}>
                <Button label={index > -1 ? "Edit task" : 'Add task'}
                    onPress={() => {
                        index > -1 ?
                            dispatch(editTask({ index, value }))
                            :
                            dispatch(addTask(value))
                        navigate(Routes.TaskList);
                    }}
                />
            </View>
        </ScrollView >
    )
}

export default AddTask;