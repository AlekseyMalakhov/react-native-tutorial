import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    animation: {
        width: 300,
        height: 300,
    },
});

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar color={colors.primary} progress={progress} width={200} />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require("../assets/animations/done.json")}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}

export default UploadScreen;
