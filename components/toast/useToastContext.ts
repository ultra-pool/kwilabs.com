import {useContext} from "react";
import ToastContext from "./context";

export default function useToastContext() {
    return useContext(ToastContext);
}
