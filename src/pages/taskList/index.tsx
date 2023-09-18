import React, { memo } from 'react'
import { ScrollView, StatusBar, Image, View, Text } from 'react-native';
import Button from '../../components/button';
import styles from './style';
import { useAppDispatch, useAppSelector } from '../../slice/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteTask } from '../../slice/card.slice.ts';
import { Routes } from '../../routes';

function TaskList({ navigation: { navigate } }: any) {
  const task = useAppSelector((state: any) => state.card);
  const dispatch = useAppDispatch();
  function edittask(index: number) {
    navigate(Routes.AddTask, { index });
  }
  function deletTask(index: any) {
    dispatch(deleteTask(index));
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor={'#eeecf2'} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Tasks.</Text>
        <Image
          resizeMode='contain'
          style={styles.img}
          source={require("../../assets/images/ellipse/Ellipse166.png")} />
      </View>
      <View style={styles.listContainer}>
        {task?.map((i: any, idx: number) => {
          return (
            <View key={idx} style={styles.card}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.cardHead}>{i?.taskName}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => edittask(idx)} style={{ marginRight: 12 }}>
                    <Icon name="pencil" size={15} color="#754cf1" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deletTask(idx)}>
                    <Icon name="trash" size={15} color="#754cf1" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.cardText}>{i?.subject}</Text>
              <View style={styles.rowEnd}>
                <View style={styles.row}>
                  <Image
                    resizeMode='contain'
                    style={styles.timeImage}
                    source={require("../../assets/images/time/time1.png")} />
                  <Text style={styles.time}>10:00 AM</Text>
                </View>
                <View style={styles.done}>
                  <Text>Done</Text>
                </View>
              </View>
            </View>
          )
        })}
        <View style={styles.card}>
          <Text style={styles.cardHead}>Lorem ipsum dolor</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor</Text>
          <View style={styles.rowEnd}>
            <View style={styles.row}>
              <Image
                resizeMode='contain'
                style={styles.timeImage}
                source={require("../../assets/images/time/time1.png")} />
              <Text style={styles.time}>10:00 AM</Text>
            </View>
            <View style={styles.inProgress}>
              <Text style={styles.inProgressText}>Inprogress</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHead}>Lorem ipsum dolor</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor</Text>
          <View style={styles.rowEnd}>
            <View style={styles.row}>
              <Image
                resizeMode='contain'
                style={styles.timeImage}
                source={require("../../assets/images/time/time1.png")} />
              <Text style={styles.time}>10:00 AM</Text>
            </View>
            <View style={styles.inProgress}>
              <Text style={styles.inProgressText}>Inprogress</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button label='Add task'
          onPress={() => navigate(Routes.AddTask, {})} />
      </View>
    </ScrollView>
  )
}

export default memo(TaskList);