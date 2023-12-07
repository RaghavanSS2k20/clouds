import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../../screens/Home";
import DraftsScreen from "../../screens/Drafts";
import SearchScreen from "../../screens/Search";
import SettingScreen from "../../screens/Settings";
import LinearGradient from "react-native-linear-gradient";
import { CustomAddButton } from "../CustomAddButton";
import { SearchSVGComponent, DraftsSVGComponent, HomeSVGComponent, SettingsSVGComponent, AddSVGComponent } from "../../assets/Icons/SVG";
import { moderateScale, verticalScale, horizontalScale } from "../../helpers/Metrics";
const Tabs = ()=>{
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'#404140',
                position:'absolute',
                bottom:verticalScale(25),
                left:horizontalScale(20),
                right:horizontalScale(20),
                elevation:10,
                borderRadius:moderateScale(25),
                height:verticalScale(60),
                borderColor:'black',           
                

                
            },
           
        }}
                  >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown:false,
                tabBarIcon:({focused})=>{
                     {
                        return focused?(
                            <HomeSVGComponent size={moderateScale(20)} fill="#5FD4EE" strokeWidth={moderateScale(3)}/>
                        ):(
                            <HomeSVGComponent size={moderateScale(20)} fill="white" strokeWidth={moderateScale(3)}/>
                        )
                     }
                }
                }}/>

            <Tab.Screen name="Search" component={SearchScreen}
            options={{
                tabBarIcon:({focused})=>{
                   { return focused?(
                    <SearchSVGComponent
                    size={moderateScale(25)} fill="#5FD4EE" strokeWidth={moderateScale(3)}/>

                    ):(
                        <SearchSVGComponent
                    size={moderateScale(25)} fill="white" strokeWidth={moderateScale(3)}/>

                    )
                    }
                }
            }}
            />
            <Tab.Screen name="Settings" component={SettingScreen}
            options={{
                tabBarIcon:({focused})=>(
                    focused ?(
                        <AddSVGComponent size={20} fill="#54D4EE"/>

                    ):(
                        <AddSVGComponent size={20} fill="white"/>

                    )
                ),
                tabBarButton:(props)=>(
                    <CustomAddButton {...props}/>
                )

                
            }}
            />
            <Tab.Screen name="Drafts" component={DraftsScreen}
            options={{
                tabBarIcon:({focused})=>{
                    {
                        return focused?(
                            <DraftsSVGComponent
                                size={moderateScale(25)}
                                fill="#5FD4EE"
                                strokeWidth={moderateScale(3)}
                                />


                        ):(
                            <DraftsSVGComponent
                            size={moderateScale(25)}
                            fill="white"
                            strokeWidth={moderateScale(3)}
                            />
                            

                        )
                    }
                }
            }}  
            />            
            <Tab.Screen name = "Setting" component={SettingScreen}
            options={{
                tabBarIcon:({focused})=>{
                    {
                        return focused?(
                            <SettingsSVGComponent
                                size={moderateScale(25)}
                                fill="#5FD4EE"
                                strokeWidth={moderateScale(3)}
                                />


                        ):(
                            <SettingsSVGComponent
                            size={moderateScale(25)}
                            fill="white"
                            strokeWidth={moderateScale(3)}
                            />
                            

                        )
                    }
                }
            }}  

            />
        </Tab.Navigator>
    )
}
export default Tabs