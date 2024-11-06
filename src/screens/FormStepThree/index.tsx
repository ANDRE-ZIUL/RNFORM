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

export function FormStepThree() {
    const { navigate } = useNavigation()
    const { updateFormData } = useAccountForm()
    const { control, handleSubmit, formState: { errors }, getValues } = useForm<AccountProps>()
    
    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate("finish")
    }

    function validationPasswordConfirmation(passwordConfimation: string) {
        const { password } = getValues()
        return passwordConfimation === password || 'As senhas não conferem'
    }

    const passwordConfirmationRef = useRef<TextInput>(null)

    return (
        <View style={styles.container}>
            <Progress progress={90} />
            <Text style={styles.title}>
                Escolha sua senha
            </Text>
            <Input 
                icon="key"
                error={errors?.password?.message}
                formProps={{ 
                    name: "password",
                    control,
                    rules: {
                        required: "Senha é obrigatória",
                        minLength: {
                            value: 8,
                            message: "A senha precisa ter no mínimo 8 caracteres"
                        }
                    }
                }}
                inputProps={{ 
                    placeholder: "Senha",
                    onSubmitEditing: () => passwordConfirmationRef?.current?.focus(),
                    returnKeyType: "next",
                    secureTextEntry: true
                }}
            />

            <Input 
                ref={passwordConfirmationRef}
                icon="key"
                error={errors?.passwordConfirmation?.message}
                formProps={{ 
                    name: "passwordConfirmation",
                    control,
                    rules: {
                        required: "Confirme a senha é obrigatório",
                        validate: validationPasswordConfirmation
                    }
                }}
                inputProps={{ 
                    placeholder: "Confirme a senha",
                    onSubmitEditing: () => handleSubmit(handleNextStep),
                    secureTextEntry: true
                }}
            />

            <Button 
                title="Finalizar"
                onPress={handleSubmit(handleNextStep)}
            />
        </View>
    )
}