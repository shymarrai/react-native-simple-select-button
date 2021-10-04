import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const SimpleSelectButton = ({ 
  text,
  textSize,
  iconName,
  iconColor,
  iconSize,
  buttonDefaultColor,
  buttonSelectedColor,
  buttonSelectWidthBorder,
  buttonDefaultWidthBorder,
  buttonSelectBorderColor,
  buttonDefaultBorderColor,
  buttonWidth,
  textDefaultColor,
  textSelectedColor,
  isChecked,
  ...props
 }) => {

    return (
      <TouchableOpacity
        {...props}
        style={{ paddingVertical: 10, }}
        >

        <View 
          style={{ 
            flexDirection: 'row',
            width: buttonWidth,
            borderRadius: 5,
            overflow: 'hidden',
            justifyContent: 'center',
            borderWidth: isChecked === true ? buttonSelectWidthBorder : buttonDefaultWidthBorder,
            borderColor: isChecked === true ? buttonSelectBorderColor : buttonDefaultBorderColor,
            backgroundColor: isChecked === true ? buttonSelectedColor : buttonDefaultColor 
          }}>
            <Text
              style={[styles.button_item, { fontSize: textSize, color: isChecked === true ? textSelectedColor : textDefaultColor } ]}>
              {text}
            </Text>
            <Text 
              style={[styles.button_item, { position: 'absolute', right: 25, }]}>{isChecked === true ?
              <AntDesign name={iconName} size={iconSize} color={iconColor} /> : null}
            </Text>
        </View>

      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button_item: {
        padding: 8,
        marginVertical: 5,
        borderRadius: 5,
        textAlign: 'center'
    },

})

export default SimpleSelectButton;
