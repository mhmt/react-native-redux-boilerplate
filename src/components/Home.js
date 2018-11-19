import React, { Component } from 'react'
import { Text, View,  StyleSheet, FlatList, ActivityIndicator,TouchableOpacity,Image} from 'react-native'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
 class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
        this.renderPeople = this.renderPeople.bind(this);
    }

    componentDidMount() {
       
        this.props.FetchData();
       // this.props.getData();  //This gets data from static file.
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
                        data={this.props.people}
                        renderItem={this.renderPeople}
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

    renderPeople({item, index}) {
        return (
           
            <TouchableOpacity style={styles.rowPeople} 
            onPress={()=>{
                //this.props.navigation.navigate("Edit",{title:item.title,description:item.description,index,edit:true})
            }}
            
            onLongPress={()=>{
               // this.props.deleteData(index);
            }}>
            <Image source={{uri:item.picture.medium}} style={{height:60,width:60}}/>
            <View style={{marginHorizontal:10}}>
                <Text style={styles.title}>
                    {item.name.first} {item.name.last}
                </Text>
                <Text style={styles.description}>
                    {item.email}
                </Text>
            </View>
           
        </TouchableOpacity>
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

    rowPeople:{
        flexDirection:'row',
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
        data: state.dataReducer.data,
        people:state.dataReducer.people
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


