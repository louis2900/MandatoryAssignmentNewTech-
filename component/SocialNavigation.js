import {createStackNavigator} from "react-navigation-stack";
import AnimalFriends from "./NavigationComponents/AnimalFriends";



/*Dette er den ene af vores stack navigatorer*/
const SocialStack = createStackNavigator({
        /*Her bestemmer vi hvilket view som skal vises */
        Social: { screen: AnimalFriends },


    },
    {
        /*Hvilket View skal starte hvis vi havde haft flere views*/
        initialRouteName:'Social',
        navigationOptions:{
            title:'Main'
        }
    }

);


export default SocialStack;