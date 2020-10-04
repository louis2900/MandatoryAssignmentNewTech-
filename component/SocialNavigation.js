import {createStackNavigator} from "react-navigation-stack";
import AnimalFriends from "./NavigationComponents/AnimalFriends";



/*Her har vi stack navigationen*/
const SocialStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Social: { screen: AnimalFriends },


    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Social',
        navigationOptions:{
            title:'Main'
        }
    }

);


export default SocialStack;