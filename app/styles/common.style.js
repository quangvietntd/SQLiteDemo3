import { StyleSheet } from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
    labelInput: {
        color: 'gray',
    },
    formInput: {
        marginHorizontal: 20,
    },
    input: {
        borderWidth: theme.BORDER_WIDTH,
        fontSize: theme.FONT_SIZE_MEDIUM
    },
    header: {
        fontSize: theme.FONT_SIZE_LARGE,
        alignSelf: "center",
        marginTop: 20,
        color: theme.TITLE_COLOR,
        fontWeight: "bold"
    },
});

export default styles;