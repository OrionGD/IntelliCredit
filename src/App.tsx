import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { RiskExplorer } from './pages/RiskExplorer';
import { DataSources } from './pages/DataSources';
import { ModuleMonitor } from './pages/ModuleMonitor';
import { Portfolio } from './pages/Portfolio';
import { Intake } from './pages/Intake';
import { DecisionWorkbench } from './pages/DecisionWorkbench';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { SystemLoader } from './components/SystemLoader';
import { NotificationProvider } from './components/shared/NotificationSystem';
import { GuidedTour } from './components/shared/GuidedTour';
import { ScenarioSwitcher } from './components/shared/ScenarioSwitcher';
import { CommandPalette } from './components/shared/CommandPalette';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [activePage, setActivePage] = useState('portfolio');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  if (!isLoaded) {
    return <SystemLoader onComplete={() => setIsLoaded(true)} />;
  }

  if (!isStarted) {
    return <LandingPage onStart={() => setIsStarted(true)} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'portfolio': return <Portfolio onSelectApplication={() => setActivePage('dashboard')} onNewApplication={() => setActivePage('intake')} />;
      case 'intake': return <Intake onComplete={() => setActivePage('dashboard')} />;
      case 'dashboard': return <Dashboard />;
      case 'explorer': return <RiskExplorer />;
      case 'decision': return <DecisionWorkbench />;
      case 'sources': return <DataSources />;
      case 'modules': return <ModuleMonitor />;
      default: return <Portfolio onSelectApplication={() => setActivePage('dashboard')} onNewApplication={() => setActivePage('intake')} />;
    }
  };

  const getPageTitle = () => {
    switch (activePage) {
      case 'portfolio': return 'Loan Portfolio';
      case 'intake': return 'New Application Intake';
      case 'dashboard': return 'Credit Analysis Dashboard';
      case 'explorer': return 'Risk Explorer';
      case 'decision': return 'Decision Workbench';
      case 'sources': return 'Intelligence Sources';
      case 'modules': return 'AI Module Monitor';
      default: return 'IntelliCredit';
    }
  };

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-sage-bg text-forest-text">
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <div className="lg:pl-64 min-h-screen flex flex-col">
          <Navbar 
            onMenuClick={() => setIsSidebarOpen(true)} 
            title={getPageTitle()}
            onSearchClick={() => setIsCommandPaletteOpen(true)}
          />
          
          <main className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        
        <GuidedTour />
        <ScenarioSwitcher />
        <CommandPalette 
          isOpen={isCommandPaletteOpen} 
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelect={(type, id) => {
            console.log('Selected:', type, id);
            if (type === 'company') setActivePage('dashboard');
            if (type === 'insight') setActivePage('explorer');
          }}
        />
      </div>
    </NotificationProvider>
  );
}
