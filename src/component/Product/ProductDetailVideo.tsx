import {Layout, Text} from "@ui-kitten/components";
import {Alert, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {IMAGE_URL} from "../../utils/env";
import React, {useCallback, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import playing = Simulate.playing;
import YoutubePlayer from "react-native-youtube-iframe";


const ProductDetailVideo = ({product}: any) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: any) => {
        console.log(state)
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Layout style={styles.text}><Text category={"h6"}>Vidéos</Text></Layout>
            <FlatList
                horizontal
                data={product.productVideos}
                renderItem={({item}: any) => (
                    <TouchableOpacity
                        style={styles.video}
                    >
                        <View>
                            <YoutubePlayer
                                height={180}
                                width={300}
                                play={false}
                                videoId={"QBO0mrfbigE"}
                                onChangeState={onStateChange}
                            />
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
