import React from 'react';
import { Info, Mail, Phone } from 'lucide-react';

export const AboutTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">OM & Lists Generator</h2>
        <p className="text-gray-600">Version 1.0.0</p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">À propos de l'application</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Cette application permet de générer automatiquement des ordres de mission 
              pour les équipes techniques. Elle facilite la gestion du personnel, 
              la planification des missions et l'impression des documents officiels.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium">Fonctionnalités principales</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Gestion des équipes par groupes</li>
            <li>• Génération d'ordres de mission</li>
            <li>• Export PDF et Excel</li>
            <li>• Historique des missions</li>
            <li>• Interface intuitive</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Support technique</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>support@eptv.dz</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>+213 21 XX XX XX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};