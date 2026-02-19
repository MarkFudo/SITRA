// Función para obtener los vehículos en uso
export function getVehiclesInUse() {
  return [
    {
      id: "TRK001",
      driver: "John Smith",
      startTime: "09:00 AM",
      location: "Downtown",
      status: "En tránsito",
      purpose: "Mantenimiento",
      solicitante: "Mohamed Moore",
      destino: "Central de Mantenimiento"
    },
    {
      id: "VAN003",
      driver: "Sarah Johnson",
      startTime: "05:00 PM",
      location: "North District",
      status: "En tránsito",
      purpose: "Entrega",
      solicitante: "Markus Moyer",
      destino: "Almacén Norte"
    },
    {
      id: "SAK021",
      driver: "Ken Masters",
      startTime: "11:00 AM",
      location: "Bay Area",
      status: "Completado",
      purpose: "Transporte de personal",
      solicitante: "GameStop",
      destino: "Oficinas Centrales"
    },
    {
      id: "SAK022",
      driver: "Karin Kanzuki",
      startTime: "11:30 AM",
      location: "Hillside Plaza",
      status: "Completado",
      purpose: "Mantenimiento",
      solicitante: "Exelon",
      destino: "Planta de Producción"
    },
    {
      id: "TRK002",
      driver: "Jose Mendoza",
      startTime: "08:00 AM",
      location: "East Side",
      status: "Planificado",
      purpose: "Inspección",
      solicitante: "BlackRock",
      destino: "Sitio de Construcción"
    },
    {
      id: "VAN004",
      driver: "Clark Steel",
      startTime: "02:00 PM",
      location: "West End",
      status: "Planificado",
      purpose: "Entrega de Documentos",
      solicitante: "Sean Snow",
      destino: "Oficina Regional"
    }
  ];
}