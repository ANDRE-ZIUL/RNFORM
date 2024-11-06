import { useContext } from "react";
import { AccountFormContext } from "../contexts/AccoutFormContext";

export function useAccountForm() {
    const context = useContext(AccountFormContext)
    return context;
}