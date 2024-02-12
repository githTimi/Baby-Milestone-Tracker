import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import AntDesign from '../../node_modules/@expo/vector-icons/AntDesign'
import { View, Platform } from 'react-native';
import Entypo from '../../node_modules/@expo/vector-icons/Entypo'
import Editing from '../screens/Editing';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 20,

        },

        tabBarActiveTintColor: 'purple',
        tabBarStyle: {
          backgroundColor: '#5856D6',

        }

      })}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <AntDesign
                name="barchart"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Add" component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Entypo
                name="plus"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Edit" component={Edit}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Entypo
                name="edit"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen name="Editing" component={Editing}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Entypo
                name="edit"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs