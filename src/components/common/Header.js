// Import libraries to make a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',   // It will justiy content in horizontal side its called FlexBox
        justifyContent: 'center',   // It will justiy content in vertical side
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative' 
    },
    textStyle: {
        fontSize: 25,
        
    }
    
};
//Make the component available to other parts of the app
export { Header };

