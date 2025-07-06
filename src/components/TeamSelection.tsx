import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';
import { groups } from '@/data/groups';
import { Technician } from '@/types';

interface TeamSelectionProps {
  selectedTechnicians: Technician[];
  onTechnicianToggle: (technician: Technician) => void;
  onAddTechnician: () => void;
}

export const TeamSelection: React.FC<TeamSelectionProps> = ({
  selectedTechnicians,
  onTechnicianToggle,
  onAddTechnician
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Sélection d'équipes</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Personnel total : {selectedTechnicians.length}
          </span>
          <Button 
            onClick={onAddTechnician}
            className="bg-blue-500 hover:bg-blue-600 text-white"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter technicien
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-2">
        {groups.map((group) => (
          <Button
            key={group.id}
            variant="outline"
            className={`${group.color} border-gray-300 text-gray-800 font-medium transition-colors`}
            size="sm"
          >
            {group.name}
          </Button>
        ))}
      </div>

      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-medium">Aucun technicien sélectionné</p>
        <p className="text-sm text-gray-500 mt-1">
          Sélectionnez des techniciens dans les groupes ci-dessus
        </p>
      </div>
    </div>
  );
};