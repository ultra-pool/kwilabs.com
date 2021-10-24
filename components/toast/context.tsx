import React, {createContext, useCallback, useEffect, useState} from "react";

const ToastContext = createContext((text: string) => {
    console.log('Toast:', text);
});

export default ToastContext;

export function ToastContextProvider({children}) {
    const [toasts, setToasts] = useState<string[]>([]);

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(
                () => setToasts((_toasts) => _toasts.slice(1)),
                1000
            );
            return () => clearTimeout(timer);
        }
    }, [toasts]);

    const addToast = useCallback(
        function (toast: string) {
            setToasts((_toasts) => {
                if (_toasts.length >= 3) {
                    _toasts.shift();
                }

                return [..._toasts, toast];
            });
        },
        [setToasts]
    );

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="fixed right-0 bottom-0 m-16 space-y-2 transition-all">
                {toasts.map((toast) => (
                    <div className="bg-kwilabs-black text-white p-4 shadow-lg transition-all" key={toast}>
                        {toast}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
