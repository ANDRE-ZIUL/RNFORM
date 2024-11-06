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

export function FormStepOne() {
    const { updateFormData } = useAccountForm()
    const { navigate } = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>()
    
    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate("formStepTwo");
    }

    const emailRef = useRef<TextInput>(null)

    return (
        <View style={styles.container}>
            <Progress progress={30} />
            <Text style={styles.title}>
                Criar sua conta
            </Text>
            <Input 
                icon="user"
                error={errors?.name?.message}
                formProps={{ 
                    name: "name",
                    control,
                    rules: {
                        required: "Nome é obrigatório"
                    }
                }}
                inputProps={{ 
                    placeholder: "Nome",
                    onSubmitEditing: () => emailRef?.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input 
                ref={emailRef}
                icon="mail"
                error={errors?.email?.message}
                formProps={{ 
                    name: "email",
                    control,
                    rules: {
                        required: "E-mail é obrigatório",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "E-mail inválido"
                        }
                    }
                }}
                inputProps={{ 
                    placeholder: "E-mail",
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