import React, { Component } from 'react'
// Her importer jeg det forskellige komponenter
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image} from 'react-native';

export default class AreaScreen extends Component {
    render(){
        return (
            // Jeg bruger <safeAreaView> for at sikre mig at det hele bliver vist på skærmen
            <SafeAreaView style={styles.container}>
                <View style ={styles.container3}>
                    <Text style ={styles.text2}>Welcome Louis</Text>
                </View>
                <View style={styles.container1}>
                    {/*tilføjer et billede for en ekstern source */}
                    <Image style={styles.images} source={{
                        width: 200,
                        height: 300,
                        uri: "https://i.picsum.photos/id/324/3888/2592.jpg?hmac=DZkyIS42bw6Me8jO8Q1TLdX2IGneZYRShExpmRrMiuU"
                    }} />
                    <Text style={styles.text}>In this section the will inform you about general information. The information varies depending on which forest you have entered</Text>
                </View>

                <View style={styles.container1}>
                    {/* Scrollview bruger jeg for at kunne vise mere test af gangen*/}
                    <ScrollView style={styles.scrollView} horizontal={false}>
                        <Text>
                            {"\n"}{"\n"}General Knowledge About Dyrehaven…_________________________________________________________________{"\n"}
                            Dyrehaven (Danish 'The Deer Park'), officially Jægersborg Dyrehave, is a forest park north of Copenhagen. It covers around 11 km2 (4.2 sq mi). Dyrehaven is noted for its mixture of huge, ancient oak trees and large populations of red and fallow deer. In July 2015, it was one of the three forests included in the UNESCO World Heritage Site inscribed as Par force hunting landscape in North Zealand.[1]

                            All entrances to the park have a characteristic red gate; one of the most popular entrances is Klampenborg gate, close to Klampenborg station. All the entrance gates have an identical gate house attached to them, which serve as the residences of the forest wardens. Dyrehaven is maintained as a natural forest, with the emphasis on the natural development of the woods over commercial forestry. Old trees are felled only if they are a danger to the public. It has herds of about 2100 deer in total, with 300 Red Deer, 1700 Fallow Deer and 100 Sika Deer.
                            Dyrehaven is also the venue for the Hermitage road race (Eremitageløbet) and the yearly Hubertus hunt (Hubertusjagten) which is held on the first Sunday in November. In former times it was home to the Fortunløbet race, later known as Ermelundsløbet, but this race was discontinued in 1960.{"\n"}{"\n"} {"\n"}History
                            {"\n"}_________________________________________________________________{"\n"}In 1669 Frederik III decided that the wood of "Boveskov" ("Beech wood") should be fenced in and wild deer from the surrounding areas driven into the newly created park. Boveskov was already well known as the former property of Valdemar the Victorious as it had been recorded in his census (the Liber Census Daniæ) of 1231. The forest lay in the westerly and southerly part of the present Dyrehaven and encompassed land used by the farmers from the village of Stokkerup,
                            which lay to the north. Fencing work consisted of excavating a ditch, the earth from which was built up in a bank on the outside walls of the ditch, on the opposite side to the centre of the park. On the top of the bank posts were driven into the ground and fences installed. This made it more difficult for the deer to leap the fence, as the rise between the ditch and the bank effectively increased the level of the fence.
                            The ditch and bank can still be seen for a long stretch in the south-easterly part of the current park. The work was never finished, as Frederik III died in 1670. The design, however, is still on record, and the area for the scheme worked out at around 3 square kilometres. When Frederik's son, Christian V, became king, he laid out new and more ambitious plans for Dyrehaven.
                            During his education Christian V had spent time at the court of Louis XIV in France. Here he had seen another type of hunting practice, parforce (hunting with dogs), that he wished to adopt. This style of hunting required a greater area of land for its practice, so Christian V increased the boundaries to include the fields up to the village of Stokkerup (the area known today as Eremitagesletten), as well as taking in the land that today is Jægersborg Hegn.
                            The additional enclosure increased the size of the park to 16 km2 (6.2 sq mi). The inhabitants of Stokkerup, whose village pond still lies within Eremitagesletten area, were ordered to tear down their houses and make use of the materials to rebuild the farms in the area that had stood empty since the Northern Wars. They were compensated for this by having a period of three years during which they were exempt from taxation.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                        </Text>

                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    };
}
// her styles vi vores side og på den måde gør den pænere
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',

    },
    text: {
        fontSize: 20,
    },

    text2: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    container3: {
        backgroundColor: 'olive',
        width: 800,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',

    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 418,
        height: 400,
    },

    scrollView: {
        width: 400,

    },


});

