import { createContext, useState } from "react";
import { AccountFormContextDataProps, AccountFormContextProviderProps, AccountProps } from "./account.types";

export const AccountFormContext = createContext<AccountFormContextDataProps>({} as AccountFormContextDataProps)

export function AccountFormProvider({ children }: AccountFormContextProviderProps) {
    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps)

    function updateFormData(data: AccountProps) {
        setAccountFormData((prevState) => ({...prevState, ...data}))
    }

    return (
        <AccountFormContext.Provider value={{
            accountFormData,
            updateFormData
        }}>
            {children}
        </AccountFormContext.Provider>
    )
}