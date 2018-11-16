import React, { Component } from 'react'
import { Text, View,  StyleSheet, FlatList, ActivityIndicator,AsyncStorage} from 'react-native'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
 class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        /* AsyncStorage.getItem("data",(err,data)=>{
            if(data !== null){
                data = JSON.parse(data)
                this.props.readData(data) // This reads data from localStorage and sets as state.data
            }else this.props.readData(null);
        }) */

        this.props.getData();  //This gets data from static file.
       // this.props.addData({title:"asdfasdfasd",description:"sdfasdfadsafasdfnlas"})
       // this.props.updateData(2,{title:"asdfasdfasd UPDATED",description:"sdfasdfadsafasdfnlas"})
       // this.props.deleteData(1)
    }

render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);


