import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';
import MembersScreen from '../screens/MembersScreen';

// export type RootTabParamList = {
//   Home: undefined;
//   About: undefined;
// };

export type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
  Gallery: undefined;
  Contact: undefined;
  Members: undefined;
};

// const Tab = createBottomTabNavigator<RootTabParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootTabs() {
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: true,
    //   }}
    // >
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="About" component={AboutScreen} />
      // </Tab.Navigator>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'CPFINT',
          headerStyle: { backgroundColor: '#092b62' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { color: '#ffffff' },
              headerTitleAlign: 'center',
          headerTitleContainerStyle: { flex: 1 },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{ marginRight: 12 }}
              accessibilityLabel="Admin"
              accessibilityRole="button"
            >
              <Text style={{ fontSize: 18, color: '#ffffff' }}>👤</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Gallery" component={GalleryScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
          <Drawer.Screen name="Members" component={MembersScreen} />
      </Drawer.Navigator>
  );
}