import DocumentPicker from 'react-native-document-picker';
import Base64 from 'react-native-base64';
import RNFS from 'react-native-fs';
import {Alert} from 'react-native';
//import RequestController from './RequestController';
import PermissionController from './PermissionController';

export default class DocumentController {
  async downloadDoc(data) {
    //clientSocket.on('file-received', async (data) => {
    try {
      // Decode the Base64 string back to binary data
      //const decodedData = await Base64.decode(data['file']);

      // Specify the path where the file will be saved
      const requestController = new PermissionController();

      if (await requestController.requestStorage()) {
        const filePath = `${RNFS.DownloadDirectoryPath}/${data['filename']}`;

        // Write the decoded data to a file
        RNFS.writeFile(filePath, data['file'], 'base64').then(() => {
          Alert.alert('Success', `File downloaded to: ${filePath}`);
        });
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
    //});
  }

  async selectDoc() {
    try {
      // const doc= await DocumentPicker.pick({
      //   type: [DocumentPicker.type.pdf],
      //   allowMultiSelection: true
      // });
      const doc = await DocumentPicker.pick({
        //allowMultiSelection,
        copyTo: 'cachesDirectory',

        type: [DocumentPicker.types.allFiles],
      });
      return {
        isSelected: true,
        documentSelected: doc,
      };
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        return {
          isSelected: true,
          documentSelected: null,
        };
    }
  }

  async sendDoc(slectedClientSocketID, document, clientSocket) {
    console.log(document);
    for (let doc of document) {
      await RNFS.readFile(doc['uri'], 'base64').then(data => {
        clientSocket.emit('send-file', {
          recipient: slectedClientSocketID,
          filename: doc['name'],
          file_data: data,
        });
      });
    }
  }
}
