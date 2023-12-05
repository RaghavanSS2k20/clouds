import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
interface Props {
  headerText: string;
  rightElement?: React.ReactElement;
}

const SectionHeader: React.FC<Props> = ({ headerText, rightElement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>{headerText}</Text>
      <View style={styles.rightElementContainer}>{rightElement}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    padding: "2%",
    backgroundColor: "#303030",
    width:'100%',
   
    
  },
  sectionHeader: {
    fontSize: RFValue(15),
    fontFamily: "Poppins-SemiBold",
    color: "#5FD4EE",
  },
  rightElementContainer: {
    margin: 2,
  },
});

export default SectionHeader;
