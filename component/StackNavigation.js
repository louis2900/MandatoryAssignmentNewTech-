import {createStackNavigator} from "react-navigation-stack";
import AnimalsPhoto from "./NavigationComponents/AnimalsPhoto";



/*Her har vi stack navigationen*/
const PhotoStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        AnimalsImagery: { screen: AnimalsPhoto },


    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'AnimalsImagery',
        navigationOptions:{
            title:'Animal'
        }
    }

);


export default PhotoStack