import React,{Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, Linking, Button,} from 'react-native';

// her laver vi en user en ny component der tager imod en prop som indholder navn og efternavn
export default class UserItem extends Component {

    sendEmail = () => {
        const { user } = this.props;
        const emailUrl = "mailto:"+user.email;
        Linking.openURL(emailUrl);
    };
    handleClick = () => {
        const { user, onSelect } = this.props;
        onSelect(user);
    };
    render() {
        const { user } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.handleClick}>
                <Image style={styles.image} source={{ uri: user.picture.large}} />
                <Text style = {{color: 'olive', fontWeight: 'bold',fontSize: 18,}}>{user.name.first} {user.name.last}</Text>
                <Button styles = {styles.btn} title={user.email} onPress={this.sendEmail} />
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    container: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',

    },

});