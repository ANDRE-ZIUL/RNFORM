import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Progress } from "../../components/Progress";
import { AccountProps } from "../../contexts/account.types";
import { useAccountForm } from "../../hooks/useAccountForm";
import { styles } from "./styles";

export function FormStepTwo() {
    const { updateFormData } = useAccountForm()
    const { navigate } = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>()
    
    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate("formStepThree");
    }

    const phoneRef = useRef<TextInput>(null)

    return (
        <View style={styles.container}>
            <Progress progress={60} />
            <Text style={styles.title}>
                Suas informações
            </Text>
            <Input 
                icon="calendar"
                error={errors?.birth?.message}
                formProps={{ 
                    name: "birth",
                    control,
                    rules: {
                        required: "Data de nascimento é obrigatório",
                        pattern: {
                            value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                            message: "Data de nascimento inválida"

                        } 
                    }
                }}
                inputProps={{ 
                    placeholder: "Data de nascimento",
                    onSubmitEditing: () => phoneRef?.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input 
                ref={phoneRef}
                icon="mail"
                error={errors?.phone?.message}
                formProps={{ 
                    name: "phone",
                    control,
                    rules: {
                        required: "Telefone obrigatório",
                        pattern: {
                            value: /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
                            message: "Telefone inválido"
                        }
                    }
                }}
                inputProps={{ 
                    placeholder: "Telefone",
                    onSubmitEditing: () => handleSubmit(handleNextStep)
                }}
            />

            <Button 
                title="Continuar"
                onPress={handleSubmit(handleNextStep)}
            />
        </View>
    )
}