import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import UserItem from "../Api/UserItem";


const USERS_URL = 'https://randomuser.me/api?results=10';

export default class animalFriends extends React.Component {

    state = {
        animalUsers: null,
        isLoading: false,
        error: null,
    };


    componentDidMount = () => {
        this.loadUserProfiles();
    };


    startLoading = () => this.setState({ isLoading: true });


    stopLoading = () => this.setState({ isLoading: false });


    setError = message => this.setState({ error: message });


    clearError = () => this.setState({ error: null });


    loadUserProfiles = async () => {
        try {
            this.startLoading();
            const response = await fetch(USERS_URL);
            const json = await response.json();
            console.log('json response from network', json);
            this.setState({ animalUsers: json.results });
            this.stopLoading();
            this.clearError();
        } catch (error) {
            this.stopLoading();
            this.setError(error.message);
        }
    };

    handleSelectUser = user => {
        this.props.navigation.navigate('UserProfile', { user });
    };

    render() {
        const { isLoading, animalUsers, error } = this.state;
        return (
            <View style={styles.container}>

                {isLoading && <ActivityIndicator />}

                {animalUsers && (
                    <FlatList
                        data={animalUsers}

                        renderItem={({ item }) => (
                            <UserItem user={item} onSelect={this.handleSelectUser} />
                        )}
                        keyExtractor={item => item.login.uuid}
                    />
                )}
                {error && <Text style={styles.error}>Error: {error}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'lightyellow',
        padding: 8,
    },
    error: {
        color: 'red',
    },
});