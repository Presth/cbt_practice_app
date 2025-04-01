import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    Modal,
} from "react-native";

function ActiveExam() {
    const [questionModalOpen, setQuestionModalOpen] = useState(false);

    return (
        <View style={{ height: "100%", backgroundColor: "#efefef" }}>
            <View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        paddingTop: "5%",
                        paddingBottom: 20,
                        paddingHorizontal: 10,
                        elevation: 1,
                    }}
                >
                    <Text
                        style={{
                            width: "50%",
                            margin: "auto",
                            fontFamily: "Lato_Bold",
                            fontSize: 20,
                            color: "#777",
                        }}
                    >
                        Mathematics
                    </Text>
                    <View style={{ margin: "auto" }}>
                        <Pressable
                            style={{
                                backgroundColor: "#faa723",
                                borderRadius: 20,
                                padding: 5,
                                paddingHorizontal: 12,
                                paddingTop: 10,
                            }}
                        >
                            <Text style={[styles.labelText, { color: "#fff" }]}>20:00</Text>
                        </Pressable>
                    </View>
                    <View style={{ margin: "auto" }}>
                        <Pressable onPress={() => setQuestionModalOpen(!questionModalOpen)}>
                            <FontAwesome name="columns" size={24} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View
                style={{
                    height: "70%",
                    width: "90%",
                    marginHorizontal: "auto",
                    marginVertical: "8%",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                }}
            >
                <ScrollView></ScrollView>
            </View>

            <View style={styles.btnMaincontainer}>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.navBtn}>
                        <Text style={styles.navBtnText}>
                            <FontAwesome name="chevron-left" color={"#fff"} size={16} />
                            {"   "}
                            Prev
                        </Text>
                    </Pressable>
                </View>
                <View style={{ width: "24%" }}>
                    <Text style={styles.label}>Attempted</Text>
                    <Text style={styles.labelText}>20/40</Text>
                </View>
                <View style={[styles.btnContainer, { justifyContent: "flex-end" }]}>
                    <Pressable style={styles.navBtn}>
                        <Text style={styles.navBtnText}>
                            Next {"   "}
                            <FontAwesome name="chevron-right" color={"#fff"} size={16} />
                        </Text>
                    </Pressable>
                </View>
            </View>

            <Modal
                visible={questionModalOpen}
                animationType="slide"
                transparent={true}
            >
                <View
                    style={{
                        height: "100%",
                        backgroundColor: "#11111144",
                        justifyContent: "flex-end",
                    }}
                >
                    <View style={{ height: "40%", backgroundColor: "#fff" }}>
                        <View>
                            <Pressable
                                style={{ padding: 10, alignSelf: "flex-end" }}
                                onPress={() => setQuestionModalOpen(false)}
                            >
                                <FontAwesome name="close" size={24} />
                            </Pressable>
                        </View>
                        <ScrollView>
                            <View style={styles.questionBtnContainer}>
                                {[...Array(100)].map((_, index) => (
                                    <NumberBtn questionNo={index + 1} key={index} />
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const NumberBtn = ({ questionNo }) => {
    return (
        <Pressable style={styles.questionBtn}>
            <Text style={styles.questionBtnText}>{questionNo}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    label: {
        fontFamily: "Lato_Regular",
        fontSize: 14,
    },
    labelText: {
        fontFamily: "Lato_Medium",
        fontSize: 20,
        marginBottom: 8,
        marginHorizontal: "auto"
    },
    btnMaincontainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    btnContainer: {
        width: "38%",
        flexDirection: "row",
    },
    navBtn: {
        backgroundColor: "#000",
        borderRadius: 15,
        minWidth: 90,
        height: 50,
    },
    navBtnText: {
        margin: "auto",
        fontFamily: "Lato_Medium",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    questionBtnContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingVertical: 30,
    },
    questionBtn: {
        backgroundColor: "red",
        minWidth: 35,
        height: 35,
        paddingHorizontal: 8,
        borderRadius: 8,
        margin: 4,
    },
    questionBtnText: {
        fontFamily: "Lato_Medium",
        fontSize: 16,
        color: "#fff",
        margin: "auto",
    },
});

export default ActiveExam;
