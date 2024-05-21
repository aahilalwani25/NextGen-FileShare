import DocumentPicker from 'react-native-document-picker';

export default class DocumentController {

    async selectDoc() {

        try {
            // const doc= await DocumentPicker.pick({
            //   type: [DocumentPicker.type.pdf],
            //   allowMultiSelection: true
            // });
            const doc = await DocumentPicker.pick({
                //allowMultiSelection,
                copyTo: "cachesDirectory",

                type: [DocumentPicker.types.allFiles]
            })
            return ({
                "isSelected": true,
                "documentSelected": doc
            })


        } catch (err) {
            if (DocumentPicker.isCancel(err))
                return ({
                    "isSelected": true,
                    "documentSelected": null
                });
        }
    }
}