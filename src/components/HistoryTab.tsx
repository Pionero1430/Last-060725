import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Eye } from 'lucide-react';

export const HistoryTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Historique des missions</h2>
        <div className="flex items-center gap-2">
          <Input placeholder="Rechercher..." className="w-64" />
          <Button variant="outline" size="icon">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg">
        <div className="grid grid-cols-5 gap-4 p-4 border-b font-medium text-sm text-gray-600">
          <div>Date</div>
          <div>Destination</div>
          <div>Personnel</div>
          <div>Statut</div>
          <div>Actions</div>
        </div>
        
        <div className="p-8 text-center text-gray-500">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Aucun historique disponible</p>
          <p className="text-sm">Les missions créées apparaîtront ici</p>
        </div>
      </div>
    </div>
  );
};