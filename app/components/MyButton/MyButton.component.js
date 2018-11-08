import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class MyButton extends Component {
    //Xác thực loại dữ liệu của prop
    static propTypes = {
        label: PropTypes.string.isRequired, //Khai báo prop là bắt buộc
        labelStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]), // labelstyle: Text.propTypes.style, // cách khác để xác thực loại dữ liệu của prop
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        onPress: TouchableOpacity.propTypes.onPress,
    }

    //Khởi tạo giá trị props mặc định cho component
    static defaultProps ={
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white'
        },
        style: {
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 4,
            margin: 20
        },

    }

    render() {
        const { label, labelStyle, style, onPress } = this.props;
        return (
            <TouchableOpacity style={style} onPress={onPress}>
                <Text style={labelStyle}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

export default MyButton;

