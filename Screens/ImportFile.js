import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NormalText from "../global/components/NormalText";

const { width, height } = Dimensions.get('screen');


export default class ImportFile extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("doc: ", this.props.route.params)
    }

    renderItem = data => (
        // <View>
        //   {/* Render each name within the section */}
        //   {item.map((name, index) => (
        //     <Text key={index}>{name}</Text>
        //   ))}
        // </View>
        <View style={{ paddingLeft: width * 0.05, paddingVertical: width * 0.05 }}>
            <NormalText>{data['name']}</NormalText>
            <Image source={{
                uri: data['uri']
            }} />
        </View>
    );

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30, color: "black", justifyContent: "center", alignItems: "center" }}>
                        Selected File
                    </Text>
                    <FlatList
                        data={this.props.route.params['document']}
                        renderItem={({ item }) => this.renderItem(item)}

                    />
                </View>
            </View>
        );

    }
}