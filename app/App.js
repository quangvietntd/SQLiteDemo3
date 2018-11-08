import { createStackNavigator } from 'react-navigation';
import Login from './components/Login/Login.component';
import Register from './components/Register/Register.component';
import Main from './components/Main/Main.component';

const App = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null },
    },
    Register: {
        screen: Register,
        navigationOptions: { header: null }
    },
    Main: {
        screen: Main,
        navigationOptions: { header: null },
    }
},
    {
        initialRouteName: 'Login',
    }
);

export default App;