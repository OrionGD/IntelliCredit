import React, { useState } from 'react';
import { useFeatures } from '../../contexts/FeatureContext';
import { useAlert } from '../../contexts/AlertContext';
import { submitDemoRequest, withBackendCheck } from '../../lib/axion';
import { Calendar, Loader2 } from 'lucide-react';

export const DemoForm: React.FC = () => {
    const { checkFeature, isReady, isBackendOffline } = useFeatures();
    const { showAlert } = useAlert();

    const [formData, setFormData] = useState({ name: '', email: '', date: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if feature is available
    // If backend is offline or feature flag is disabled, this will be false
    const isFeatureEnabled = checkFeature('schedule-demo');

    // Loading state while checking feature flags
    if (!isReady) {
        return (
            <div className="p-8 bg-forest-text/5 animate-pulse rounded-2xl flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-moss-accent" />
            </div>
        );
    }

    const handleSubmit = withBackendCheck('schedule-demo', async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.date) {
            showAlert('Please fill in all required fields.', 'error');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await submitDemoRequest(formData);

            if (response.success) {
                showAlert('Demo scheduled successfully! Check your email.', 'success');
                setFormData({ name: '', email: '', date: '' });
            } else {
                showAlert(response.error || 'Unable to process request, please try again later.', 'error');
            }
        } catch (err) {
            showAlert('Unable to process request, please try again later.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    });

    const isDisabled = !isFeatureEnabled || isBackendOffline;

    return (
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-forest-text/10 shadow-xl max-w-md w-full relative overflow-hidden">
            {!isFeatureEnabled && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center p-6 text-center">
                    <div className="bg-[#5F6F50] text-[#FFFFFF] px-6 py-4 rounded-xl shadow-2xl font-medium text-sm w-full max-w-xs border border-white/10">
                        {isBackendOffline
                            ? 'Backend not connected. Demo scheduling unavailable.'
                            : 'Feature temporarily disabled.'}
                    </div>
                </div>
            )}

            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-moss-accent/10 rounded-xl text-moss-accent">
                    <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-bold text-forest-text tracking-tight">Schedule Demo</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-olive-detail uppercase tracking-wider mb-2">Full Name</label>
                    <input
                        type="text"
                        disabled={isDisabled || isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full bg-sage-bg/50 border border-forest-text/10 rounded-xl px-4 py-3 text-forest-text focus:outline-none focus:border-moss-accent focus:ring-1 focus:ring-moss-accent transition-all disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-olive-detail uppercase tracking-wider mb-2">Work Email</label>
                    <input
                        type="email"
                        disabled={isDisabled || isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-sage-bg/50 border border-forest-text/10 rounded-xl px-4 py-3 text-forest-text focus:outline-none focus:border-moss-accent focus:ring-1 focus:ring-moss-accent transition-all disabled:opacity-50"
                        placeholder="john@enterprise.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-olive-detail uppercase tracking-wider mb-2">Preferred Date</label>
                    <input
                        type="date"
                        disabled={isDisabled || isSubmitting}
                        value={formData.date}
                        onChange={(e) => setFormData(p => ({ ...p, date: e.target.value }))}
                        className="w-full bg-sage-bg/50 border border-forest-text/10 rounded-xl px-4 py-3 text-forest-text focus:outline-none focus:border-moss-accent focus:ring-1 focus:ring-moss-accent transition-all disabled:opacity-50"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isDisabled || isSubmitting}
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all
            ${isDisabled
                            ? 'bg-[#869E2F] text-white/50 cursor-not-allowed opacity-60'
                            : 'bg-forest-text text-sage-bg hover:bg-forest-text/90 shadow-lg shadow-forest-text/20'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            <span>Processing...</span>
                        </>
                    ) : (
                        'Request Demo Access'
                    )}
                </button>
            </form>
        </div>
    );
};
