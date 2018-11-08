import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: theme.TITLE_COLOR,
        alignSelf: 'center',
        fontSize: theme.FONT_SIZE_LARGE
    }, 
});

export default styles;