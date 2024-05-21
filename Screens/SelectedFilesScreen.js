import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NormalText from "../global/components/NormalText";
import PrimaryButton from "../global/components/Buttons/PrimaryButton";

const { width, height } = Dimensions.get('screen');


export default class SelectedFilesScreen extends React.Component {
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
        <View style={{
            marginVertical: width * 0.05, marginHorizontal: width * 0.05,
            flexDirection: 'row', borderRadius: 20, borderColor: 'black', borderWidth: 1
        }}>
            {/* <NormalText>{data['name']}</NormalText> */}
            <Image
                width={100}
                style={{ borderRadius: 20 }}
                height={100}
                source={{
                    uri: data['uri']
                }} />
            <NormalText style={{ fontSize: 10 }}>{data['name']}</NormalText>
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
                <View style={{ flex: 0.5, marginTop: height * 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <PrimaryButton text={'Send'} onPress={async () => {
                        const documentController = new DocumentController();
                        documentController.selectDoc().then((selected) => {
                            if (selected['isSelected']) {
                                this.props.navigation.navigate('ImportFile', { "document": selected['documentSelected'] })
                            }
                        })
                        //console.log(selected)



                    }} />
                </View>
            </View>
        );

    }
}
