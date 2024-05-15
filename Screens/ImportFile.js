import React from "react";
import { View } from "react-native";   

export default class ImportFile extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.route.params)
    }
    render(){
        return(
            <View></View>
        );
        
    }
}