import { Text, View } from "react-native";
import { useAccountForm } from "../../hooks/useAccountForm";
import { styles } from "./styles";

export function Finish() {
    const { accountFormData } = useAccountForm()
    return (
        <View style={styles.container}>
            <Text style={styles.text} >
               Nome: {accountFormData?.name}
            </Text>
            <Text style={styles.text} >
               Email: {accountFormData?.email}
            </Text>
            <Text style={styles.text} >
               Data de nascimento: {accountFormData?.birth}
            </Text>
            <Text style={styles.text} >
               Telefone: {accountFormData?.phone}
            </Text>
        </View>
    )
}