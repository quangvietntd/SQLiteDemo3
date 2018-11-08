import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: 'white'
    },
    loginLabel: {
        color: theme.TITLE_COLOR,
        alignSelf: 'center'
    },
    ...common
  
});

export default styles;