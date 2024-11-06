import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { forwardRef } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type InputProps = {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
    error?: string
}

export const Input = forwardRef<TextInput, InputProps>(({ icon, formProps, inputProps, error }, ref) => {
    return (
        <Controller
            render={({ field }) => (
                <View style={styles.container}>
                <View style={[styles.group, error ? styles.hasError : {}]}>
                        <View style={styles.icon}>
                            <Feather 
                                name={icon} 
                                size={24} 
                                color={clsx({ 
                                    ["#DC1637"]: (!!error && error?.length > 0),
                                    ["#8257E5"]: (error?.length === 0 && field?.value),
                                    ["#999"]: (!field?.value && error?.length === 0)
                                })} 
                            />
                        </View>
                        <TextInput
                            style={styles.control}
                            {...inputProps}
                            value={field.value}
                            onChangeText={field.onChange}
                            ref={ref}
                        />
                    </View>
                    {(!!error && error?.length > 0) && <Text style={styles.errorText}>
                        {error}
                    </Text>}
                </View>
            )}
            {...formProps}
        />
    )
})