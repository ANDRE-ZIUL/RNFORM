import { ReactNode } from "react";

type AccountProps = {
    name?: string;
    email?: string;
    phone?: string;
    birth?: string;
    password?: string;
    passwordConfirmation?: string;
}

type AccountFormContextProviderProps = {
    children: ReactNode;
}

type AccountFormContextDataProps = {
    accountFormData: AccountProps;
    updateFormData: (value: AccountProps) => void;
}
