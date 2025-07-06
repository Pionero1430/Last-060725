import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download, FileSpreadsheet } from 'lucide-react';

export const ImportExcelTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Import/Export Excel</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium">Importer des données</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <FileSpreadsheet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Glissez votre fichier Excel ici</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Choisir un fichier
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Exporter des données</h3>
          <div className="space-y-2">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Exporter liste du personnel
            </Button>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              <Download className="w-4 h-4 mr-2" />
              Exporter historique missions
            </Button>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Modèle Excel vierge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};