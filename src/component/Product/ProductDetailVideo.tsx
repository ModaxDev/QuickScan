import {Layout, Text} from "@ui-kitten/components";
import {Alert, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {IMAGE_URL} from "../../utils/env";
import React, {useCallback, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import playing = Simulate.playing;
import YoutubePlayer from "react-native-youtube-iframe";


const getVideoId = (url: string) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
    }
    return videoId;
}

const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ProductDetailVideo = ({product, categoryName, keyProp}:any) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: any) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    console.log("product", product);

    return (
        <ScrollView key={keyProp} style={styles.container}>
            <Layout style={styles.text}><Text category={"h6"}>Vidéos - {capitalize(categoryName) || 'Sans catégorie'}</Text></Layout>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={product}
                renderItem={({item,index}: any) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.video}
                    >
                        <View>
                            {item.link && (
                                <YoutubePlayer
                                    height={180}
                                    width={250}
                                    play={playing}
                                    videoId={getVideoId(item.link)}
                                    onChangeState={onStateChange}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    )
}

export default ProductDetailVideo

const styles = StyleSheet.create({
        container: {},
        text: {
            marginLeft: 20,
            paddingBottom: 6,
        },
        video: {
            marginLeft: 20,
        }
    })
;
