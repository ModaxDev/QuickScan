import {Dimensions, Image, StyleSheet} from "react-native";
import {IMAGE_URL} from "../../utils/env";
import {Icon, Layout, Text} from "@ui-kitten/components";
import React from "react";

const ProductDetailHeaderInformation = ({product}:any) => {

    return (
        <Layout style={styles.description}>
            <Image style={styles.image} source={{uri: IMAGE_URL + product.fileUrl}}/>
            <Layout style={[styles.descriptionText, {flexDirection: "column", justifyContent: "space-evenly"}]}>
                <Layout style={{flexDirection: "row"}}>
                    <Text category="s1">Créer par {" "}</Text>
                    <Layout style={{flexDirection: "row", justifyContent: "center"}}>
                        <Image style={styles.iconCompany}
                               source={{uri: IMAGE_URL + product.fileUrlCompanyLogo}}/>
                        <Text style={{fontWeight: "bold"}}>{product.company}</Text>
                    </Layout>
                </Layout>
                {product.isFixable ? (
                    <Layout style={{flexDirection: "row", alignItems: "center"}}>
                        <Icon style={styles.icon} fill={"#34d92e"} name="checkmark-outline"/>
                        <Text category="s1">Réparable</Text>
                    </Layout>) : (
                    <Layout style={{flexDirection: "row", alignItems: "center"}}>
                        <Icon style={styles.icon} fill={"#de2a2a"} name="close-outline"/>
                        <Text category="s1">Pas réparable</Text>
                    </Layout>
                )}
                {product.isFixable && (<Layout style={{flexDirection: "row", alignItems: "center"}}>
                    <Text category="s1">Indice de réparabilité</Text>
                    <Text style={{fontWeight: "bold", color: product.reparabilityIndex && product.reparabilityIndex > 5 ? "#34d92e" : product.reparabilityIndex == 5 ? "#777777" : "#de2a2a" }}> {product.reparabilityIndex} / 10</Text>
                </Layout>)}
            </Layout>
        </Layout>
    )
}

export default ProductDetailHeaderInformation


const styles = StyleSheet.create({
        globalContainer: {
            flex: 1,
        },
        container: {
            margin: 20,
        },
        description: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly', // align items to the left and right
        }
        ,
        image: {
            width: 80,
            height: 80,
            resizeMode: 'contain',
        }
        ,
        iconCompany: {
            width: 20,
            height: 20,
            resizeMode: 'contain',
        }
        ,
        descriptionText: {
            maxWidth: Dimensions.get('window').width - 120,
        },
        icon: {
            width: 30,
            height: 30,
        }
    })
;
