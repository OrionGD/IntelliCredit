import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchFeatureStatus, FeatureStatus, updateGlobalBackendState } from '../lib/axion';
import { useAlert } from './AlertContext';

interface FeatureContextProps {
    features: FeatureStatus;
    isReady: boolean;
    isBackendOffline: boolean;
    checkFeature: (featureKey: keyof FeatureStatus) => boolean;
}

const FeatureContext = createContext<FeatureContextProps | undefined>(undefined);

export const useFeatures = () => {
    const context = useContext(FeatureContext);
    if (!context) {
        throw new Error('useFeatures must be used within a FeatureProvider');
    }
    return context;
};

export const FeatureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { showAlert } = useAlert();
    const [features, setFeatures] = useState<FeatureStatus>({});
    const [isReady, setIsReady] = useState(false);
    const [isBackendOffline, setIsBackendOffline] = useState(false);

    useEffect(() => {
        let mounted = true;

        const initializeFeatures = async () => {
            try {
                const response = await fetchFeatureStatus();

                if (!mounted) return;

                if (response.success && response.data) {
                    setFeatures(response.data);
                    setIsBackendOffline(false);
                    updateGlobalBackendState(true, response.data);
                } else {
                    // Fallback state: Backend unreachable
                    setIsBackendOffline(true);
                    updateGlobalBackendState(false, {});
                    showAlert('Backend not connected. Some features are unavailable.', 'info', 6000);
                }
            } catch (err) {
                if (!mounted) return;
                setIsBackendOffline(true);
                updateGlobalBackendState(false, {});
                showAlert('Backend not connected. Some features are unavailable.', 'error', 6000);
            } finally {
                if (mounted) {
                    setIsReady(true);
                }
            }
        };

        initializeFeatures();

        return () => {
            mounted = false;
        };
    }, [showAlert]);

    const checkFeature = (featureKey: string) => {
        // If backend offline, defensive return false
        if (isBackendOffline) return false;

        // Default to false if feature flag is undefined
        return !!features[featureKey];
    };

    return (
        <FeatureContext.Provider value={{ features, isReady, isBackendOffline, checkFeature }}>
            {children}
        </FeatureContext.Provider>
    );
};
