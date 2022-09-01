// import React, { FC, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Alert,
//   SafeAreaView,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import ScrollableTabView from 'react-native-scrollable-tab-view';
// import TabBar from "react-native-underline-tabbar";
// import styles from "./style";
// import { Searchbar } from "react-native-paper";
// import { colors } from "../../constants";
// import { Dropdown } from "react-native-element-dropdown";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Button,
//   Title,
//   Paragraph,
// } from 'react-native-paper';
// import {
//   requestPersonSearch,
//   onPersonSearchResponse,
// } from "../../redux/actions/personSearchAction";
// import {
//   Tabs,
//   TabScreen,
//   useTabIndex,
//   useTabNavigation,
// } from 'react-native-paper-tabs';
// import NetInfo from "@react-native-community/netinfo";
// // import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { TabView, SceneMap } from 'react-native-tab-view';


// const Contact = ({ navigation }) => {
//   const [searchContact, setSearchContact] = useState("");
//   const data = [
//     { label: "Client", value: "1" },
//     { label: "Vendor", value: "2" },
//     { label: "Candidate", value: "3" },
//   ];
//   const FirstRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
//   );
  
//   const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
//   );
  
//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });
//   // var CustomTabBar = require('./CustomTabBar');
//   const Search = "s";
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const [nameValue, setNameValue] = useState(null);
//   const [isNameFocus, setNameIsFocus] = useState(false);
//   const [spinner, setSpinner] = useState(false);

//   const Page = ({label}) => (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         {label}
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit index.ios.js
//       </Text>
//       <Text style={styles.instructions}>
//         Press Cmd+R to reload,{'\n'}
//         Cmd+D or shake for dev menu
//       </Text>
//     </View>
// );

// // const Example = () => {
// //   return (
// //     <Tabs
// //     >
// //       <TabScreen label="Explore" icon="compass">
// //          <ExploreWitHookExamples />
// //       </TabScreen>
// //       <TabScreen label="Flights" icon="airplane" disabled>
// //         <View style={{ backgroundColor: 'black', flex:1 }} />
// //       </TabScreen>
// //       <TabScreen
// //         label="Trips"
// //         icon="bag-suitcase"
// //         // optional props
// //         // onPressIn={() => {
// //         //   console.log('onPressIn explore');
// //         // }}
// //         // onPress={() => {
// //         //   console.log('onPress explore');
// //         // }}
// //       >
// //          <View style={{ backgroundColor: 'red', flex:1 }} />
// //       </TabScreen>
// //     </Tabs>
// //   )
// // }

// const ExploreWitHookExamples = () => {
// const goTo = useTabNavigation();
// const index = useTabIndex();
//   // const Page = ({ label }) => (
//   //   <View style={styles.container}>
//   //     <View
//   //       style={{
//   //         flexDirection: "row",
//   //         backgroundColor: colors.GhostWhite,
//   //         marginVertical: 20,
//   //       }}
//   //     >
//   //       <Dropdown
//   //         style={styles.dropdown}
//   //         placeholderStyle={styles.placeholderStyle}
//   //         // selectedTextStyle={styles.selectedTextStyle}
//   //         inputSearchStyle={styles.inputSearchStyle}
//   //         data={[
//   //           { label: "Candidate", value: "1" },
//   //           { label: "Vendor", value: "2" },
//   //           { label: "Client", value: "3" },
//   //         ]}
//   //         // input={input}
//   //         // maxHeight={300}
//   //         labelField="label"
//   //         valueField="value"
//   //         placeholder={"All Person"}
//   //         // searchPlaceholder="Mode of interview"
//   //         value={value}
//   //         onFocus={() => setIsFocus(true)}
//   //         onBlur={() => setIsFocus(false)}
//   //         onChange={(item) => {
//   //           setValue(item.value);
//   //           setIsFocus(false);
//   //         }}
//   //       />
//   //       <Dropdown
//   //         style={styles.dropdown}
//   //         placeholderStyle={styles.placeholderStyle}
//   //         // selectedTextStyle={styles.selectedTextStyle}
//   //         inputSearchStyle={styles.inputSearchStyle}
//   //         data={[
//   //           { label: "Canate", nameValue: "1" },
//   //           { label: "Vdor", nameValue: "2" },
//   //         ]}
//   //         // input={input}
//   //         // maxHeight={300}
//   //         labelField="label"
//   //         valueField="nameValue"
//   //         placeholder={"Name"}
//   //         // searchPlaceholder="Mode of interview"
//   //         value={nameValue}
//   //         onFocus={() => setNameIsFocus(true)}
//   //         onBlur={() => setNameIsFocus(false)}
//   //         onChange={(item) => {
//   //           setNameValue(item.nameValue);
//   //           setNameIsFocus(false);
//   //         }}
//   //       />
//   //     </View>
//   //     <View style={{ alignSelf: "flex-end", marginHorizontal: 30 }}>
//   //       <TouchableOpacity>
//   //         <Ionicons
//   //           name={"ios-person-circle"}
//   //           size={45}
//   //           color={colors.YankeesBlue}
//   //         />
//   //       </TouchableOpacity>
//   //     </View>
//   //   </View>
//   // );

//   // const Page1 = ({ label }) => (
//   //   <View style={styles.container}>
//   //     <View
//   //       style={{
//   //         flexDirection: "row",
//   //         backgroundColor: colors.GhostWhite,
//   //         marginVertical: 20,
//   //       }}
//   //     >
//   //       <Dropdown
//   //         style={styles.dropdown}
//   //         placeholderStyle={styles.placeholderStyle}
//   //         // selectedTextStyle={styles.selectedTextStyle}
//   //         inputSearchStyle={styles.inputSearchStyle}
//   //         data={[
//   //           { label: "Canate", nameValue: "1" },
//   //           { label: "Vdor", nameValue: "2" },
//   //         ]}
//   //         // input={input}
//   //         // maxHeight={300}
//   //         labelField="label"
//   //         valueField="nameValue"
//   //         placeholder={"Name"}
//   //         // searchPlaceholder="Mode of interview"
//   //         value={nameValue}
//   //         onFocus={() => setNameIsFocus(true)}
//   //         onBlur={() => setNameIsFocus(false)}
//   //         onChange={(item) => {
//   //           setNameValue(item.nameValue);
//   //           setNameIsFocus(false);
//   //         }}
//   //       />
//   //     </View>
//   //     <View style={{ alignSelf: "flex-end", marginHorizontal: 30 }}>
//   //       <TouchableOpacity>
//   //         <Ionicons
//   //           name={"ios-person-circle"}
//   //           size={45}
//   //           color={colors.YankeesBlue}
//   //         />
//   //       </TouchableOpacity>
//   //     </View>
//   //   </View>
//   // );
//   // const dispatch = useDispatch();

//   // const personSearchResponse = useSelector(
//   //   (state) => state.personSearchReducer.personSearchResponse
//   // );
//   // useEffect(() => {
//   //   console.log(
//   //     "personSearchResponse : ",
//   //     JSON.stringify(personSearchResponse)
//   //   );

//   //   const updatePersonSearch = async () => {
//   //     if (
//   //       personSearchResponse &&
//   //       Object.keys(personSearchResponse).length !== 0 &&
//   //       personSearchResponse.hasOwnProperty("status")
//   //     ) {
//   //       if (personSearchResponse?.status === 200) {
//   //         Alert.alert("Success", personSearchResponse.data.message);
//   //         navigation.navigate("Today");
//   //         var setResponse = {};
//   //         dispatch(onPersonSearchResponse(setResponse));
//   //       } else {
//   //         if (personSearchResponse.message) {
//   //           Alert.alert("Error", personSearchResponse.message);
//   //         }
//   //       }
//   //       setSpinner(false);
//   //     }
//   //   };
//   //   updatePersonSearch();
//   // }, [personSearchResponse]);

//   // const onPersonSearchSubmit = () => {
//   //   NetInfo.addEventListener((state) => {
//   //     if (state.isConnected) {
//   //       setSpinner(true);
//   //       dispatch(requestPersonSearch());
//   //     } else {
//   //       Alert.alert("Please check your internet connection");
//   //     }
//   //   });
//   // };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.menuView}>
//             <View style={styles.titleView}>
//               <Text style={styles.headerTextDash}>Contact</Text>
//             </View>
//           </View>
//           <View style={{ flex:1 }}>
//       <Title>Explore</Title>
//       <Paragraph>Index: {index}</Paragraph>
//       <Button onPress={() => goTo(1)}>Go to Flights</Button>
//     </View>
//           {/* <Searchbar
//             placeholder="Search Person Here"
//             onChangeText={setSearchContact}
//             value={searchContact}
//             style={styles.SearchView}
//             iconColor={"green"}
//             onPress={() => onPersonSearchSubmit()    }
//           /> */}
//  {/* <View style={[styles.container, {paddingTop: 20}]}>
//           <ScrollableTabView
//               tabBarActiveTextColor="#53ac49"
//               // renderTabBar={() => <TabBar underlineColor="#53ac49" />}
//               >
//             <Page tabLabel={{label: "Page #1"}} label="Page #1"/>
//             <Page tabLabel={{label: "Page #2 aka Long!", badge: 3}} label="Page #2 aka Long!"/>
//             <Page tabLabel={{label: "Page #3"}} label="Page #3"/>
//             <Page tabLabel={{label: "Page #4 aka Page"}} label="Page #4 aka Page"/>
//             <Page tabLabel={{label: "Page #5"}} label="Page #5"/>
//           </ScrollableTabView>
 
//         </View> */}
          
//           {/* <ScrollableTabView
//             tabBarActiveTextColor="#53ac49"
//             renderTabBar={() => <TabBar underlineColor="#53ac49" />}
//           > */}
//             {/* <Page
//               tabLabel={{ label: "Person" }}
//               label="Company"
//               style={{ backgroundColor: colors.GhostWhite }}
//             />
//             <Page1 tabLabel={{ label: "Company" }} label="Company" /> */}
//           {/* </ScrollableTabView> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// };
// export default Contact;

import React, { FC, useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ScrollView,
  Animated,
  StyleSheet,
  View,
} from 'react-native';
import {
  Title,
  Searchbar,
} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
} from 'react-native-paper-tabs';

function App() {

  return (
    <SafeAreaView style={{ flex:1}}>
      <ScrollView>
      <Animated.View
          style={[
            styles.content,
            styles.contentInline,
      ]}
        >
          <Tabs>
              <TabScreen
                label="Explore">
                <ExploreWitHookExamples />
              </TabScreen>
              <TabScreen
                label="Flights">
                <ScreenWithText text={'Flights'} />
              </TabScreen>
              <TabScreen
                label="Trips">
                <ScreenWithText text={'Trips'} />
              </TabScreen>
            </Tabs>
        </Animated.View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

function ExploreWitHookExamples() {
  return (
    <View style={styles.screenWithText}>
      <Title>Explore</Title>
    </View>
  );
}

function ScreenWithText({ text }: { text: string }) {
  return (
    <View style={styles.screenWithText}>
      <Title>{text}</Title>
    </View>
  );
}

export default function Contact() {
  const [searchContact, setSearchContact] = useState("");
  return (
  
      <SafeAreaProvider>
        <App />
          <Searchbar
            placeholder="Search Person Here"
            onChangeText={setSearchContact}
            value={searchContact}
            // style={styles.SearchView}
            iconColor={"green"}
          // onPress={() => onPersonSearchSubmit()    }
          /> 
      </SafeAreaProvider>
    
  );
}


const styles = StyleSheet.create({

  screenWithText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    height: 200,
  },

  
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  content: {
    width: '100%',
    maxWidth: 500,
    marginTop: 16,
    alignSelf: 'center',

  },
  contentInline: {
    height: 900,
  },
  
});