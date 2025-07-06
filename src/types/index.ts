export interface Technician {
  id: string;
  name: string;
  group: string;
}

export interface MissionOrder {
  residence: string;
  destination: string;
  reason: string;
  transport: string;
  departureDate: string;
  returnDate: string;
  signature: string;
  technicians: Technician[];
}

export interface Group {
  id: string;
  name: string;
  color: string;
  technicians: Technician[];
}