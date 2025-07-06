import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer, FileText, Download } from 'lucide-react';

export const PrintTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Impression et Export</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <Button className="h-24 flex-col bg-blue-600 hover:bg-blue-700">
          <Printer className="w-8 h-8 mb-2" />
          Imprimer OM
        </Button>
        
        <Button className="h-24 flex-col bg-green-600 hover:bg-green-700">
          <FileText className="w-8 h-8 mb-2" />
          Générer PDF
        </Button>
        
        <Button className="h-24 flex-col bg-orange-600 hover:bg-orange-700">
          <Download className="w-8 h-8 mb-2" />
          Exporter Excel
        </Button>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Aperçu du document</h3>
        <p className="text-sm text-gray-600">
          L'aperçu du document généré apparaîtra ici une fois les informations complétées.
        </p>
      </div>
    </div>
  );
};