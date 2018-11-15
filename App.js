import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'; 
import Home from './src/redux/components/Home.js' 
export default class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
     <Provider store={store}>
        <Home/>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
