// export default Dashboard;
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import profile from '../assets/190000001575.jpg';
// Tab ICons...
import home from '../assets/home.png';
import logout from '../assets/logout.png';
import checklist from '../assets/checklist.png';
import election from '../assets/election.png';
import user from '../assets/user.png';
import book from '../assets/book.png';
import enroll from '../assets/enroll.png';

// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import { ScrollView } from 'react-native-gesture-handler';



export default function DashboardScreen() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handlePress = () => { 
    Linking.openURL('https://www.google.com/gmail/about/');
  }
  const handlePress1 = () => { 
    Linking.openURL('https://research.uic.edu.ph/ojs/');
  }
  const handlePress2 = () => { 
    Linking.openURL('https://mis.uic.edu.ph/support-ticket/');
  }
  const handlePress3 = () => { 
    Linking.openURL('https://edu.google.com/workspace-for-education/classroom/');
  }
  const handlePress4 = () => { 
    Linking.openURL('https://drive.google.com/file/d/1fzvEd1Y4SJK5CZyqWNMJbq-8tS_94-ba/view?usp=sharing');
  }
  const handlePress5 = () => { 
    Linking.openURL('https://drive.google.com/drive/folders/1WRPtjbXQaDjZUzvZO1nOGKgXHlmUusAV?usp=sharing');
  }
  const handlePress6 = () => { 
    Linking.openURL('http://destiny.uic.edu.ph/');
  }
  const handlePress7 = () => { 
    Linking.openURL('https://uiclrsc.remotexs.co/user/login?dest=https://www-emerald-com.uiclrsc.remotexs.co/');
  }
  


  return (

    <SafeAreaView style={styles.container}>
            <View style={{marginLeft: 100}}>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>

        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: -50
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20,

        }}>Arjhon Tan</Text>

   
          <Text style={{
            marginTop: 6,
            color: 'white',
            marginBottom: -35
          }}>Student</Text>
   
<ScrollView>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }
<ScrollView>
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Faculty Evaluation", checklist)}
          {TabButton(currentTab, setCurrentTab, "Election", election)}
          {TabButton(currentTab, setCurrentTab, "Personalized Links", user)}
          {TabButton(currentTab, setCurrentTab, "Student Information", book)}
          {TabButton(currentTab, setCurrentTab, "Enrollment", enroll)}
          

          </ScrollView>
        </View>
        </ScrollView>


      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>
           

<View
           style={{padding: 3, alignItems: 'center', backgroundColor: '#D2334C', flexDirection: 'row', justifyContent: 'center',borderRadius: 5, }}>
           <Image source={require('../assets/logo.png')}style={{ width: 50, height: 50,margin: 10,marginLeft: -240  }}/>
           <Image source={require('../assets/uic.png')}style={{ width: 150, height: 50,margin: 10  }}/>
           <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'white',
              marginTop: -5,
              marginLeft: -300,

            }}></Image>5

            
           
          
       </View>


          </TouchableOpacity>

<ScrollView>
 <View >


      
 <View>
       <Text style={{marginTop: 40, marginLeft: 30, fontWeight: 'bold',fontSize: 15}}>NOTIFCATIONS</Text>
       </View>
       <View style={{ marginLeft: 30, borderBottomWidth: .5, borderColor: 'black', marginVertical: 15,marginRight: 30, }}>
 </View>

 <View   style={{borderWidth: 1, borderColor: '#C5C5C5', borderRadius: 10, marginLeft: 30,marginRight: 30,padding: 30,alignItems: 'center',
       backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'center',}}>
       <Image source={require('../assets/bell.png')} 
       style={{width: 50,height: 50,margin: 10,marginRight: 275,marginBottom: 10,  }}/>
   </View>
 <Text style={{marginTop: 15,marginLeft: 30, fontWeight: 'bold',fontSize: 15}}>QUICKLINKS</Text>

 </View>
       <View style={{ marginLeft: 30, borderBottomWidth: .5,borderColor: 'black', marginVertical: 15, marginRight: 30, }}></View>

       <View style={{ flexDirection: 'row'}}>
       
       <TouchableOpacity onPress={handlePress}>
       <Image source={require('../assets/gmail.png')}style={{ marginLeft: 30, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress1}>
       <Image source={require('../assets/journal.png')}style={{ marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress2}>
       <Image source={require('../assets/MIS.png')}style={{ marginLeft: 60, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress3}>
       <Image source={require('../assets/gclass.png')}style={{ marginLeft: 53, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <Text style={{marginTop: 55, marginLeft: -360,fontSize: 10,}}>EMAIL</Text>
       <Text style={{marginTop: 55, marginLeft: 37,fontSize: 10,}}>Open journal system</Text>
       <Text style={{marginTop: 55, marginLeft: 21,fontSize: 10,}}>MIS support ticket</Text>
       <Text style={{marginTop: 55, marginLeft: 15,fontSize: 10,}}>Google classroom</Text>
       <TouchableOpacity onPress={handlePress4}>
       <Image source={require('../assets/HandbookUnder.png')}style={{ marginTop: 90, marginLeft: -280, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress5}>
       <Image source={require('../assets/HandbookGrad.png')}style={{ marginTop: 90, marginLeft: -130, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <Text style={{marginTop: 135, marginLeft: -325,fontSize: 10,}}>Undergraduate Handbook</Text>
       <Text style={{marginTop: 135, marginLeft: 30,fontSize: 10,}}>Graduate School Handbook</Text>

      
       </View>

<ScrollView></ScrollView>
       <View style={{ marginLeft: 30, borderBottomWidth: .5,borderColor: 'black', marginTop: 10, marginRight: 30, }}>
      
       <Text style={{marginBottom: 10,marginLeft: 2, fontWeight: 'bold',fontSize: 15}}>EDUCATIONAL RESOURCES</Text>
       </View> 
      
      
       <View style={{ flexDirection: 'row'}}>
       <TouchableOpacity onPress={handlePress6}>
       <Image source={require('../assets/destiny.jpg')}style={{marginTop: 25, marginLeft: 33, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress7}>
       <Image source={require('../assets/EmeraldInsight.jpg')}style={{marginTop: 25, marginLeft: 55, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress7}>
       <Image source={require('../assets/eric.jpg')}style={{ marginTop: 25, marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={handlePress7}>
       <Image source={require('../assets/library.jpg')}style={{ marginTop: 25, marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
       </TouchableOpacity>
       <Text style={{marginTop: 67, marginLeft: -354,fontSize: 10,}}>DESTINY</Text>
       <Text style={{marginTop: 67, marginLeft: 35,fontSize: 10,}}>EMERALD INSIGHT</Text>
       <Text style={{marginTop: 67, marginLeft: 50,fontSize: 10,}}>ERIC</Text>
       <Text style={{marginTop: 67, marginLeft: 60,fontSize: 10,}}>IG LIBRARY</Text>
       </View >
      
       <View style={{ flexDirection: 'row'}}>

       <Image source={require('../assets/pej.png')}style={{ marginTop: 25, marginLeft: 80, width: 40, height: 40,margin: 10  }}/>

       <Image source={require('../assets/proquest.jpg')}style={{marginTop: 25, marginLeft: 66, width: 40, height: 40,margin: 10  }}/> 

       <Image source={require('../assets/inforboard.jpg')}style={{marginTop: 25, marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
      
       <Text style={{marginTop: 70, marginLeft: -285,fontSize: 10,}}>PHE EJOURNAL</Text>
       <Text style={{marginTop: 70, marginLeft: 55,fontSize: 10,}}>PROQUEST</Text>
       <Text style={{marginTop: 70, marginLeft: 35,fontSize: 10,}}>THE INFOBOARD</Text>
       </View>

       </ScrollView>


        
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
    
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{ 
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2334C',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});