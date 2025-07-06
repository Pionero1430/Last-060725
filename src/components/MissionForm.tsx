import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MissionOrder } from '@/types';

interface MissionFormProps {
  missionData: MissionOrder;
  onMissionDataChange: (data: Partial<MissionOrder>) => void;
}

export const MissionForm: React.FC<MissionFormProps> = ({
  missionData,
  onMissionDataChange
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Résidence Administrative :
        </label>
        <Input
          value={missionData.residence}
          onChange={(e) => onMissionDataChange({ residence: e.target.value })}
          placeholder="EPTV, 21 BOULEVARD DES MARTYRS, ALGER"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Destination :
        </label>
        <Input
          value={missionData.destination}
          onChange={(e) => onMissionDataChange({ destination: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Motif du déplacement :
        </label>
        <Input
          value={missionData.reason}
          onChange={(e) => onMissionDataChange({ reason: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Moyen de Transport :
        </label>
        <Select
          value={missionData.transport}
          onValueChange={(value) => onMissionDataChange({ transport: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Véhicule de service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vehicule-service">Véhicule de service</SelectItem>
            <SelectItem value="transport-public">Transport public</SelectItem>
            <SelectItem value="vehicule-personnel">Véhicule personnel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date de Départ :
          </label>
          <Input
            type="date"
            value={missionData.departureDate}
            onChange={(e) => onMissionDataChange({ departureDate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date de Retour :
          </label>
          <Input
            type="date"
            value={missionData.returnDate}
            onChange={(e) => onMissionDataChange({ returnDate: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Signataire :
        </label>
        <Select
          value={missionData.signature}
          onValueChange={(value) => onMissionDataChange({ signature: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="CHEF DE DÉPARTEMENT" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chef-departement">CHEF DE DÉPARTEMENT</SelectItem>
            <SelectItem value="directeur">DIRECTEUR</SelectItem>
            <SelectItem value="chef-service">CHEF DE SERVICE</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};