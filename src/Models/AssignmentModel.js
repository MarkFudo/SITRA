export function getAssignmentsForDate(year, month, date) {
  const allAssignments = [
    {
      id: 1,
      date: new Date(2025, 1, 3),
      vehicle: "Carro A",
      driver: "Víctor de la Cruz",
      type: "Transporte de personal",
      reason: "Asistencia a conferencia"
    },
    {
      id: 2,
      date: new Date(2025, 1, 4),
      vehicle: "Camión B",
      driver: "Juan Pérez",
      type: "Transporte de carga",
      reason: "Entrega de mercancía"
    },
    {
      id: 3,
      date: new Date(2025, 1, 4),
      vehicle: "Carro C",
      driver: "María López",
      type: "Transporte de personal",
      reason: "Reunión de negocios"
    },
    {
      id: 4,
      date: new Date(2025, 1, 5),
      vehicle: "Camión D",
      driver: "Charlie Nash",
      type: "Transporte de personal",
      reason: "Ruta al Pablo Mella"
    },
    {
      id: 5,
      date: new Date(2025, 1, 5),
      vehicle: "Carro E",
      driver: "Andy Bogard",
      type: "Transporte de personal",
      reason: "Asistencia a conferencia"
    },
    {
      id: 6,
      date: new Date(2025, 1, 5),
      vehicle: "Camión F",
      driver: "Terry Bogard",
      type: "Transporte de personal",
      reason: "Ruta a Prolongación 27"
    },
    {
      id: 7,
      date: new Date(2025, 1, 6),
      vehicle: "Carro G",
      driver: "Kim Kaphwan",
      type: "Transporte de personal",
      reason: "Visita a cliente"
    },
    {
      id: 8,
      date: new Date(2025, 1, 6),
      vehicle: "Camión H",
      driver: "Geese Howard",
      type: "Transporte de carga",
      reason: "Entrega de productos"
    },
    {
      id: 9,
      date: new Date(2025, 1, 6),
      vehicle: "Carro I",
      driver: "Robert Garcia",
      type: "Transporte de personal",
      reason: "Reunión de equipo"
    },
    {
      id: 10,
      date: new Date(2025, 1, 6),
      vehicle: "Camión J",
      driver: "Yuri Sakazaki",
      type: "Transporte de personal",
      reason: "Visita a proveedor"
    },
    {
      id: 11,
      date: new Date(2025, 1, 7),
      vehicle: "Carro K",
      driver: "Kula Diamond",
      type: "Transporte de personal",
      reason: "Inspección de sitio"
    }
  ];

  return allAssignments.filter(
    assignment => 
      assignment.date.getFullYear() === year &&
      assignment.date.getMonth() === month &&
      assignment.date.getDate() === date
  );
}

export function getAssignmentsBetweenDates(startDate, endDate) {
  const allAssignments = [
    {
      id: 1,
      date: new Date(2025, 1, 3),
      vehicle: "Carro A",
      driver: "Víctor de la Cruz",
      type: "Transporte de personal",
      reason: "Asistencia a conferencia"
    },
    {
      id: 2,
      date: new Date(2025, 1, 4),
      vehicle: "Camión B",
      driver: "Juan Pérez",
      type: "Transporte de carga",
      reason: "Entrega de mercancía"
    },
    {
      id: 3,
      date: new Date(2025, 1, 4),
      vehicle: "Carro C",
      driver: "María López",
      type: "Transporte de personal",
      reason: "Reunión de negocios"
    },
    {
      id: 4,
      date: new Date(2025, 1, 5),
      vehicle: "Camión D",
      driver: "Charlie Nash",
      type: "Transporte de personal",
      reason: "Ruta al Pablo Mella"
    },
    {
      id: 5,
      date: new Date(2025, 1, 5),
      vehicle: "Carro E",
      driver: "Andy Bogard",
      type: "Transporte de personal",
      reason: "Asistencia a conferencia"
    },
    {
      id: 6,
      date: new Date(2025, 1, 5),
      vehicle: "Camión F",
      driver: "Terry Bogard",
      type: "Transporte de personal",
      reason: "Ruta a Prolongación 27"
    },
    {
      id: 7,
      date: new Date(2025, 1, 6),
      vehicle: "Carro G",
      driver: "Kim Kaphwan",
      type: "Transporte de personal",
      reason: "Visita a cliente"
    },
    {
      id: 8,
      date: new Date(2025, 1, 6),
      vehicle: "Camión H",
      driver: "Geese Howard",
      type: "Transporte de carga",
      reason: "Entrega de productos"
    },
    {
      id: 9,
      date: new Date(2025, 1, 6),
      vehicle: "Carro I",
      driver: "Robert Garcia",
      type: "Transporte de personal",
      reason: "Reunión de equipo"
    },
    {
      id: 10,
      date: new Date(2025, 1, 6),
      vehicle: "Camión J",
      driver: "Yuri Sakazaki",
      type: "Transporte de personal",
      reason: "Visita a proveedor"
    },
    {
      id: 11,
      date: new Date(2025, 1, 7),
      vehicle: "Carro K",
      driver: "Kula Diamond",
      type: "Transporte de personal",
      reason: "Inspección de sitio"
    }
  ];

  return allAssignments.filter(
    assignment => assignment.date >= startDate && assignment.date <= endDate
  );
}
