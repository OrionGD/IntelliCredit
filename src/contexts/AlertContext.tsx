import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export type AlertType = 'info' | 'success' | 'error';

export interface AlertMessage {
    id: string;
    message: string;
    type: AlertType;
}

interface AlertContextProps {
    showAlert: (message: string, type?: AlertType, duration?: number) => void;
    removeAlert: (id: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [alerts, setAlerts] = useState<AlertMessage[]>([]);

    const removeAlert = useCallback((id: string) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, []);

    const showAlert = useCallback((message: string, type: AlertType = 'info', duration = 4000) => {
        const id = Math.random().toString(36).substring(2, 9);
        setAlerts((prev) => [...prev, { id, message, type }]);

        if (duration > 0) {
            setTimeout(() => {
                removeAlert(id);
            }, duration);
        }
    }, [removeAlert]);

    return (
        <AlertContext.Provider value={{ showAlert, removeAlert }}>
            {children}

            {/* Global Alert Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 font-sans w-full max-w-sm pointer-events-none">
                <AnimatePresence>
                    {alerts.map((alert) => (
                        <motion.div
                            key={alert.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border"
                            style={{
                                backgroundColor: alert.type === 'error' ? '#5A2E2E' : '#5F6F50', // Error gets distinct muted red, others get the olive dashboard theme
                                color: '#FFFFFF',
                                borderColor: 'rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="flex-1 text-sm font-medium leading-relaxed">
                                {alert.message}
                            </div>
                            <button
                                onClick={() => removeAlert(alert.id)}
                                className="opacity-50 hover:opacity-100 transition-opacity"
                                aria-label="Close alert"
                            >
                                ✕
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </AlertContext.Provider>
    );
};
