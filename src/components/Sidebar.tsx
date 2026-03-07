import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Compass, 
  Activity, 
  Menu, 
  X, 
  BrainCircuit,
  ChevronRight,
  Briefcase,
  PlusCircle,
  CheckSquare
} from 'lucide-react';
import { cn } from '../types';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { id: 'portfolio', label: 'Loan Portfolio', icon: Briefcase },
  { id: 'intake', label: 'New Application', icon: PlusCircle },
  { id: 'dashboard', label: 'Credit Dashboard', icon: LayoutDashboard },
  { id: 'explorer', label: 'Risk Explorer', icon: Compass },
  { id: 'decision', label: 'Decision Workbench', icon: CheckSquare },
  { id: 'sources', label: 'Data Sources', icon: Database },
  { id: 'modules', label: 'AI Module Monitor', icon: Activity },
];

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-forest-text/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed top-0 left-0 h-full bg-sage-bg border-r border-forest-text/10 z-50 transition-all duration-300 w-64 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img 
                src="assets/logo.png" 
                alt="IntelliCredit Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/IntelliCredit.png";
                }}
              />
            </div>
            <h1 className="text-xl font-bold tracking-tight">IntelliCredit</h1>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left",
                  activePage === item.id 
                    ? "bg-forest-text text-sage-bg" 
                    : "text-forest-text hover:bg-forest-text/5"
                )}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {activePage === item.id && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-forest-text/10">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-moss-accent/20 flex items-center justify-center text-forest-text font-bold text-xs">
                JD
              </div>
              <div>
                <p className="text-sm font-bold">John Doe</p>
                <p className="text-xs text-olive-detail">Credit Officer</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
