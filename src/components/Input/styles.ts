import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    group: {
        width: "100%",
        height: 56,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    control: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16
    },
    icon: {
        height: 56,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRightWidth: 3,
        borderRightColor: "#F4F5F6"
    },
    errorText: {
        fontSize: 14,
        marginTop: 7,
        color: "#DC1637"
    },
    hasError: {
        borderWidth: 1,
        borderColor: "#DC1637"
    }
})