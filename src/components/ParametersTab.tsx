import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export const ParametersTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Paramètres de l'application</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium">Informations générales</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom de l'organisation
            </label>
            <Input defaultValue="EPTV" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse
            </label>
            <Input defaultValue="21 BOULEVARD DES MARTYRS, ALGER" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Paramètres d'impression</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Police par défaut
            </label>
            <Input defaultValue="Arial" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taille de police
            </label>
            <Input defaultValue="12" type="number" />
          </div>
        </div>
      </div>
      
      <Button className="bg-green-600 hover:bg-green-700">
        <Save className="w-4 h-4 mr-2" />
        Sauvegarder les paramètres
      </Button>
    </div>
  );
};