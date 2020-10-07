import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Linking,
    FlatList,
    Button,
    Image,
} from 'react-native';
// Vi importerer en component der går os i stand til at bruge vores kamara
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';



export default class App extends React.Component {
    cameraRef = React.createRef();

    state = {
        hasCameraPermission: null,
        isClicked:false,
        cameraPosition:Camera.Constants.Type.front,
        lastPhoto:null,
        hasCameraRollPermission: null,
        galleryImages:null,
        showGallery: false
    };
    // her kalder vi metoderne updateCameraPermission og UpdateCameraRollPermission
    componentDidMount() {
        this.updateCameraPermission();
        this.updateCameraRollPermission();
    }

    /*Her får vi givet adgang til kameraet*/
    updateCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    // her giver vi adgang til vores galleri og så sætter vi metoden til 'granted'
    updateCameraRollPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    };

    /*Dette gør i stand til at tag et billede*/
    handleTakePhoto = async () => {

        if (!this.cameraRef.current) {
            return;
        }
        const result = await this.cameraRef.current.takePictureAsync();
        // vi sætter vores state til lastPhoto skal være lig uri'en
        this.setState({ lastPhoto: result.uri });
        this.handleSaveToCameraRoll(this.state.lastPhoto)
    };

    // denne metode skal Gemme billedet i galleriet
    handleSaveToCameraRoll = async uri => {
        try {
            await MediaLibrary.createAssetAsync(uri, 'photo');

        } catch (error) {
            console.error(error);
        }
    };

    /*Gør det muligt at at skifte kamera (front/back) via en button funktion */
    handleChangeCamera = () =>{
        /* vi har vi to variabler kaldt cameraPosition og isCliceked
        Derfor sætter vi start værdien til (front/back) og  clicked til at være false.
        Alt dette bliver gjort muligt via et if-else-statement.
         */
        if(this.state.isClicked){
            this.setState({cameraPosition:Camera.Constants.Type.front})
            this.setState({isClicked:false})
        }else{
            this.setState({cameraPosition:Camera.Constants.Type.back})
            this.setState({isClicked:true})
        }
    }

    /*Gå til indstillinger og få permission*/
    handleSettingLink = () =>{
        Linking.openSettings()
    }

    // Hent 3 billeder fra galleriet
    handleLoadGalleryImages = async () => {
        try {
            const result =  await MediaLibrary.getAssetsAsync({first:20});
            this.setState({ galleryImages:result.assets });
        }catch (e) {
            console.log(e)
        }
    };

 // her kan man benytte sig af button komponent til at styre kamaraet
    renderCameraView() {
        const { hasCameraPermission, type } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        }
        if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>Du har ikke adgang til kamera.</Text>
                    <Button onPress={this.handleSettingLink} title='Get permissions to access camera'> </Button>
                </View>
            );
        }
        return (
            <View>
                <Camera
                    style={styles.cameraView}
                    type={this.state.cameraPosition}
                    ref={this.cameraRef}>
                </Camera>
                <Button style={styles.btn} title="Take photo" onPress={this.handleTakePhoto} />
                <Button style={styles.btn} title="Switch camera" onPress={this.handleChangeCamera} />
            </View>
        );
    }

    renderGalleryView() {
        // Her afventer vi brugeren i det vi afventer input
        const { hasCameraRollPermission, galleryImages } = this.state;
        if (hasCameraRollPermission === null) {
            return <View />;
        }
        // Der vil komme en fejl besked vi brugeren ikke acceptere permission
        if (hasCameraRollPermission === false) {
            return (
                <View>
                    <Text>No access to camera roll.</Text>
                    <Button title="Go to settings" onPress={this.handleSettingLink} />
                </View>
            );
        }
        // Her tager vi alle billederne gennem et lop som vi gerne vil hente.
        return (
            <View>
                <Button title="Load images" onPress={this.handleLoadGalleryImages} />
                <View style={styles.galleryView}>
                    {galleryImages && (
                        <FlatList
                            horizontal
                            styles={styles.Flatlist_render}
                            data={galleryImages}

                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item.uri}}
                                    key={item.uri}
                                    style={styles.FlatList_image}
                                />
                            )}
                            keyExtractor={item => item.id}
                        />
                    )}
                </View>
            </View>
        );
    }

    renderLastPhoto() {
        // her opret en state variabel. denne her last photo. vi sætter dens værdi til null.
        const { lastPhoto } = this.state;
        if (!lastPhoto === null) {
            return <View />;
        }
        return (
            <View style={styles.lastPhotoContainer}>
                <Text style={{marginLeft: 160, fontWeight: 'bold', fontSize: 15, }} >Last photo</Text>
                <Image source={{ uri: lastPhoto }} style={styles.thumbnail} />
            </View>
        );
    }

    /* dettte er vores main render*/
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
                <View style={styles.lastPhotoContainer}>{this.renderLastPhoto()}</View>
                <View style={styles.galleryContainer}>{this.renderGalleryView()}</View>
            </SafeAreaView>);
    }
}

const containerStyle = {
    padding: 5,
    borderRadius: 1,
    margin: 4,
    borderWidth: 1,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightyellow',
    },
    btn:{
        margin:100
    },
    Flatlist_render:{
        width:'100%'
    },
    cameraContainer: {
        ...containerStyle,
        backgroundColor: 'lightyellow',

    },
    cameraView: {
        marginTop: 100,
        marginLeft: 10,
        marginBottom:15,
        aspectRatio: 1.2,
        width: '100%',
        height: 310
    },
    lastPhotoContainer: {
        backgroundColor: 'lightyellow',
        width: '100%',
        height: 130,
        margin: 0
    },
    galleryContainer: {
        ...containerStyle,
        backgroundColor: 'lightyellow',
        marginBottom: 100
    },
    thumbnail: {
        width: 110,
        height: 110,
        marginLeft: 140
    },thumbnail2: {
        width: 200,
        height: 200,
        margin: 10,
    },
    FlatList_image:{
        width: 200,
        height: 200,
        margin: 5
    },
    galleryView: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
    },
});