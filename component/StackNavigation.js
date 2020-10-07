import {createStackNavigator} from "react-navigation-stack";
import AnimalsPhoto from "./NavigationComponents/AnimalsPhoto";



/*Dette er den ene af vores stack navigatorer*/
const PhotoStack = createStackNavigator({
        /*Her bestemmer vi hvilket view som skal vises */
        AnimalsImagery: { screen: AnimalsPhoto },


    },
    {
        /*Hvilket View skal starte hvis vi havde haft flere views*/
        initialRouteName:'AnimalsImagery',
        navigationOptions:{
            title:'Animal'
        }
    }

);


export default PhotoStack