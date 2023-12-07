import React from "react";
import { View, Text, TouchableOpacity, StyleSheet , Dimensions, ScrollView} from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import LandingHeader from "../components/LandingHeader";
import { SearchSVGComponent, MinusSVGComponent } from "../assets/Icons/SVG";
import CarouselCloud from "../components/CarouselCloud";
import SectionHeader from "../components/SectionHeader";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { RFValue } from "react-native-responsive-fontsize";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { horizontalScale,verticalScale , moderateScale} from "../helpers/Metrics";
import Cloud from "../components/Cloud";
const SLIDER_WIDTH = Dimensions.get('window').width + 5
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.96)



interface Props {
  navigation?: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const onGestureEvent = Animated.event([{ nativeEvent: { translationX: panX } }], {
    useNativeDriver: false,
  });

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END && nativeEvent.translationX < -50) {
      // Swipe left
      navigation.navigate('Next'); // Navigate to the NextScreen
    }
  };
  const dataArray = [
    { cloud: "Cumulus", time: "10:00 AM", type: "Fluffy" },
    { cloud: "Stratus", time: "02:30 PM", type: "Layered" },
    { cloud: "Nimbostratus", time: "05:45 PM", type: "Rainy" },
    // Add more entries as needed
  ];
  return (
   <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <LandingHeader navigation={{}}/>
      <View style={styles.metabarContainer}>
        <LinearGradient
          colors={["#1EA6C6", "#9CE1F1"]}
          start={{x:1, y:0}}
          end={{x:0, y:0}}
          style ={styles.linearGradient}

        >
              <View style={styles.innerContainer}>
                <View style={styles.metricsHeader}>
                <Text style={styles.buttonText}>Clouds Passed</Text>
                <Text style={styles.counterText}>153</Text>
                </View>
                <View style={styles.searchBorContainer}>
                  <SearchSVGComponent fill="#5FD4EE" size={moderateScale(25)}/>
                </View>
              
              </View>

        </LinearGradient>
      </View>
      
      <View style={styles.celebrateSectionContainer}>
        <SectionHeader headerText={"Clouds to celebrate"} rightElement={<MinusSVGComponent size={moderateScale(25)} fill="#3D5860"/>}/>
        
        <Carousel
          layout="default"
          ref={isCarousel}
          data={dataArray}
          renderItem={CarouselCloud}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index:any) => setIndex(index)}
          useScrollView={true}
          

        />
        <Pagination
              dotsLength={dataArray.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: horizontalScale(10),
                height: verticalScale(10),
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: '#5FD4EE'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              
              useScrollView={true}

              tappableDots={true}
        />
        
       
      </View>

      <View style={styles.daysContainer}>
        <SectionHeader headerText="Days Tracked" rightElement={<></>} />
        <View style={{margin:'2%'}}>
          <Cloud cloud="adore a puppy through his eyes. This  World and hence its beautiful the world is great with mani as a good puopy " type="bad"/>
        </View>
        <View style={{margin:'2%'}}>
         <Cloud cloud="After your free trial ends and your paid subscription starts, we charge your payment method at the beginning of the following month. If your paid service starts in May, for example, we charge you at the beginning of June. After that, charges continue automatically at the beginning of each month." type="neutral"/>  
        </View>
        <View style={{margin:'2%'}}>
         <Cloud cloud="adore a puppy through his eyes. This  World" type="good"/>  
        </View>  
        <View style={{margin:'2%'}}>
         <Cloud cloud="adore a puppy through his eyes. This  World" type="good"/>  
        </View>  
        <View style={{margin:'2%'}}>
         <Cloud cloud="adore a puppy through his eyes. This  World" type="good"/>  
        </View>  
        <View style={{margin:'2%'}}>
         <Cloud cloud="We start charging your payment method at the time of purchase. If you set up your domain for automatic renewal, we renew your domain 7 days before the annual renewal date and charge your payment method at the beginning of the following month.After your free trial ends and your paid subscription starts, we charge your payment method at the beginning of the following month. If your paid service starts in May, for example, we charge you at the beginning of June. After that, charges continue automatically at the beginning of each month." type="good"/>  
        </View>    
        <View style={{margin:'2%'}}>
         <Cloud cloud="adore " type="good"/>  
        </View>    
        



      </View>
        
      
     
   </ScrollView>
  );
};
const styles = StyleSheet.create({
  daysContainer:{
    margin:'2%'

  },
  metabarContainer:{
   padding:'3%'  
  },
  celebrateSectionContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:'2%',
    
  },
  metricsHeader:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  searchBorContainer:{
    
    margin:"4%"


  },
  linearGradient:{
    height:verticalScale(45),
    width: "100%",
    borderRadius:12,
    
    backgroundColor:'transparent'

  },
  counterText:{
     fontSize: RFValue(15),
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    margin: 10,
    color: '#5FD4EE',
    backgroundColor: 'transparent',

  },
  innerContainer: {
    borderRadius: 12, // <-- Inner Border Radius
    flex: 1,
    margin: 1, // <-- Border Width
   backgroundColor:'#303030',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
    
  },
  buttonText: {
    fontSize: RFValue(15),
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
})



export default HomeScreen;
