import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamSelection } from '@/components/TeamSelection';
import { MissionForm } from '@/components/MissionForm';
import { ParametersTab } from '@/components/ParametersTab';
import { PrintTab } from '@/components/PrintTab';
import { HistoryTab } from '@/components/HistoryTab';
import { ImportExcelTab } from '@/components/ImportExcelTab';
import { AboutTab } from '@/components/AboutTab';
import { Technician, MissionOrder } from '@/types';

function App() {
  const [selectedTechnicians, setSelectedTechnicians] = useState<Technician[]>([]);
  const [missionData, setMissionData] = useState<MissionOrder>({
    residence: 'EPTV, 21 BOULEVARD DES MARTYRS, ALGER',
    destination: '',
    reason: '',
    transport: 'vehicule-service',
    departureDate: '',
    returnDate: '',
    signature: 'chef-departement',
    technicians: []
  });

  const handleTechnicianToggle = (technician: Technician) => {
    setSelectedTechnicians(prev => {
      const exists = prev.find(t => t.id === technician.id);
      if (exists) {
        return prev.filter(t => t.id !== technician.id);
      } else {
        return [...prev, technician];
      }
    });
  };

  const handleAddTechnician = () => {
    // Logic to add new technician
    console.log('Add technician');
  };

  const handleMissionDataChange = (data: Partial<MissionOrder>) => {
    setMissionData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OM & Lists Generator</h1>
          <p className="text-gray-600">Application de génération d'ordres de mission pour équipes techniques</p>
        </div>

        <Tabs defaultValue="interface" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="interface" className="bg-blue-500 text-white data-[state=active]:bg-blue-600">
              Interface
            </TabsTrigger>
            <TabsTrigger value="parameters">Paramètres</TabsTrigger>
            <TabsTrigger value="print">Impression</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="excel">Importer Excel</TabsTrigger>
            <TabsTrigger value="about">À propos</TabsTrigger>
          </TabsList>

          <TabsContent value="interface" className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <TeamSelection
                selectedTechnicians={selectedTechnicians}
                onTechnicianToggle={handleTechnicianToggle}
                onAddTechnician={handleAddTechnician}
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <MissionForm
                missionData={missionData}
                onMissionDataChange={handleMissionDataChange}
              />
            </div>
          </TabsContent>

          <TabsContent value="parameters">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <ParametersTab />
            </div>
          </TabsContent>

          <TabsContent value="print">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <PrintTab />
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <HistoryTab />
            </div>
          </TabsContent>

          <TabsContent value="excel">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <ImportExcelTab />
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <AboutTab />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;