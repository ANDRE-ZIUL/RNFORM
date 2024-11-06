import { NavigationContainer } from "@react-navigation/native";
import { AccountRoutes } from "./accounts.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <AccountRoutes />
        </NavigationContainer>
    )
}