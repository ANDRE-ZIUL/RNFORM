import { View } from "react-native"
import { style } from "./styles"

type Props = {
    progress: number
}

export function Progress({ progress }: Props) {
    return (
        <View style={style.container}>
            <View style={[style.progress, { width: `${progress}%`}]} />
        </View>
    )
}