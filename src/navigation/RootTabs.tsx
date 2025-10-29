import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Linking,
  ImageBackground,
} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  function CustomDrawerContent(props: any) {
    const insets = useSafeAreaInsets();
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 0,
          paddingBottom: insets.bottom,
        }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <ImageBackground
              source={require('../assets/bg-mobile.png')}
              style={{
                paddingTop: insets.top + 12,
                paddingBottom: 16,
                alignItems: 'center',
              }}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                // style={{
                //   backgroundColor: '#000000',
                // }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 20,
                    fontWeight: '800',
                    textAlign: 'center',
                  }}
                >
                  CPFINT
                </Text>
                <Text
                  style={{
                    color: '#e5e7eb',
                    marginTop: 2,
                    textAlign: 'center',
                  }}
                >
                  Care • Progress • Future
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <DrawerItemList {...props} />
          </View>
          <View style={{ paddingHorizontal: 16, paddingVertical: 16, gap: 4 }}>
            <Text
              style={{ color: '#000000', fontSize: 12, textAlign: 'center' }}
            >
              CPF Foundation is a 501(C)(3) charity organization, with Tax
              ID:87-1029937
            </Text>
            <Text
              style={{ color: '#000000', fontSize: 12, textAlign: 'center' }}
            >
              19029 Gallup Dr., Germantown, MD 20874
            </Text>
            <Text
              style={{ color: '#000000', fontSize: 12, textAlign: 'center' }}
            >
              +1(718) 316-2585
            </Text>
            <Text
              style={{ color: '#000000', fontSize: 12, textAlign: 'center' }}
            >
              support@cpfint.org
            </Text>
            <View
              style={{
                marginTop: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="Facebook"
                onPress={() =>
                  Linking.openURL(
                    'https://www.facebook.com/profile.php?id=100069204492056',
                  )
                }
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: '#1877F2',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{ color: '#fff', fontWeight: '800', fontSize: 18 }}
                >
                  f
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="YouTube"
                onPress={() =>
                  Linking.openURL('https://www.youtube.com/@CPFINC')
                }
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: '#fa0303ff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}
                >
                  ▶
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
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
      drawerContent={props => <CustomDrawerContent {...props} />}
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
