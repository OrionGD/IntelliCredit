/**
 * axion.ts
 * Centralized API module for IntelliCredit frontend.
 * Incorporates simulated endpoints for feature flags and form submissions.
 * Replace the setTimeout delays with proper fetch/axios calls for the backend.
 */

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface FeatureStatus {
    [featureKey: string]: boolean;
}

// Expose global state for non-React contexts
let _isBackendConnected = false;
let _globalFeatures: FeatureStatus = {};

export const isBackendConnected = (): boolean => _isBackendConnected;
export const isFeatureAvailable = (featureName: string): boolean => !!_globalFeatures[featureName];

export const updateGlobalBackendState = (connected: boolean, features: FeatureStatus) => {
    _isBackendConnected = connected;
    _globalFeatures = features;
};

// Add generic console.alert if it doesn't exist for immediate developer feedback
if (typeof console !== 'undefined' && !(console as any).alert) {
    (console as any).alert = (msg: string) => console.warn(`[ALERT] ${msg}`);
}

// Simulated backend connection state (used for testing offline mode)
let SIMULATE_OFFLINE = false;

export const setSimulateOffline = (status: boolean) => {
    SIMULATE_OFFLINE = status;
};

/**
 * HOC/Decorator pattern to wrap backend-dependent functions.
 * Prevents execution and logs a console alert if backend/feature is unavailable.
 */
export const withBackendCheck = <T extends (...args: any[]) => any>(
    featureName: string,
    action: T
): T => {
    return ((...args: any[]) => {
        if (!isBackendConnected() || !isFeatureAvailable(featureName)) {
            if ((console as any).alert) {
                (console as any).alert(`Backend not connected. Feature ${featureName} cannot run.`);
            }
            return;
        }
        return action(...args);
    }) as unknown as T;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * GET /api/feature-status
 * Checks availability for all backend-dependent features.
 */
export const fetchFeatureStatus = async (): Promise<ApiResponse<FeatureStatus>> => {
    await delay(800);
    if (SIMULATE_OFFLINE) {
        return { success: false, error: 'Backend unreachable.' };
    }

    // BACKEND INTEGRATION: Replace with `return fetch('/api/feature-status').then(r => r.json())`
    return {
        success: true,
        data: {
            'schedule-demo': true,
            'user-feedback': true,
            'advanced-analytics': false // simulated disabled feature
        }
    };
};

/**
 * GET /api/demo-config
 * Feature flag specific to the Schedule Demo feature.
 */
export const fetchDemoConfig = async (): Promise<ApiResponse<{ enabled: boolean }>> => {
    await delay(400);
    if (SIMULATE_OFFLINE) return { success: false, error: 'Offline' };

    return { success: true, data: { enabled: true } };
};

/**
 * GET /api/demo-status
 * Fetch available demo slots.
 */
export const fetchDemoStatus = async (): Promise<ApiResponse<string[]>> => {
    await delay(500);
    if (SIMULATE_OFFLINE) return { success: false, error: 'Offline' };

    // BACKEND INTEGRATION: fetch('/api/demo-status')
    return { success: true, data: ['10:00 AM', '1:00 PM', '3:30 PM'] };
};

/**
 * POST /api/schedule-demo
 * Submit demo request
 */
export const submitDemoRequest = async (payload: { name: string, email: string, date: string }): Promise<ApiResponse> => {
    await delay(1200);
    if (SIMULATE_OFFLINE) return { success: false, error: 'Connection failed. Please try again later.' };

    if (!payload.email.includes('@')) {
        return { success: false, error: 'Invalid email address provided.' };
    }

    // BACKEND INTEGRATION: fetch('/api/schedule-demo', { method: 'POST', body: JSON.stringify(payload) })
    return { success: true, data: { message: 'Demo scheduled successfully!' } };
};

/**
 * POST /api/user-action
 * General backend action handler
 */
export const submitUserAction = async (actionType: string, payload: any): Promise<ApiResponse> => {
    await delay(1000);
    if (SIMULATE_OFFLINE) return { success: false, error: 'Backend not connected.' };

    // BACKEND INTEGRATION: fetch('/api/user-action', { method: 'POST', body: JSON.stringify({ actionType, ...payload }) })
    return { success: true, data: { message: `Action ${actionType} processed.` } };
};
