const formularios = [
    {
      id: 1,
      empleado: {
        Nombre: "Juan Pérez",
        Cargo: "Gerente de Ventas",
        Codigo_Colaborador: "EMP001"
      },
      solicitud: {
        Fecha_Servicio: "2025-02-10",
        Fecha_Regreso: "2025-02-15",
        Area_Solicitante: "Ventas",
        Cantidad_Colaboradores: 3,
        Flotilla_Asignada: "Vehículo Tipo A",
        Destino_Del_Viaje: "Santo Domingo",
        Hora_Salida: "08:00",
        Hora_Regreso: "18:00",
        Espera: true,
        Status: "Pendiente"
      }
    },
    {
      id: 2,
      empleado: {
        Nombre: "María Gómez",
        Cargo: "Coordinadora de Logística",
        Codigo_Colaborador: "EMP002"
      },
      solicitud: {
        Fecha_Servicio: "2025-03-05",
        Fecha_Regreso: "2025-03-06",
        Area_Solicitante: "Logística",
        Cantidad_Colaboradores: 5,
        Flotilla_Asignada: "Camioneta Tipo B",
        Destino_Del_Viaje: "Santiago",
        Hora_Salida: "07:30",
        Hora_Regreso: "19:00",
        Espera: false,
        Status: "Aprobado"
      }
    },
    {
      id: 3,
      empleado: {
        Nombre: "Carlos López",
        Cargo: "Supervisor de Producción",
        Codigo_Colaborador: "EMP003"
      },
      solicitud: {
        Fecha_Servicio: "2025-04-12",
        Fecha_Regreso: "2025-04-14",
        Area_Solicitante: "Producción",
        Cantidad_Colaboradores: 2,
        Flotilla_Asignada: "Vehículo Tipo C",
        Destino_Del_Viaje: "La Romana",
        Hora_Salida: "09:00",
        Hora_Regreso: "17:30",
        Espera: true,
        Status: "Pendiente"
      }
    },
    {
      id: 4,
      empleado: {
        Nombre: "Ana Rodríguez",
        Cargo: "Asistente Administrativa",
        Codigo_Colaborador: "EMP004"
      },
      solicitud: {
        Fecha_Servicio: "2025-05-20",
        Fecha_Regreso: "2025-05-22",
        Area_Solicitante: "Administración",
        Cantidad_Colaboradores: 4,
        Flotilla_Asignada: "Minibús Tipo D",
        Destino_Del_Viaje: "Punta Cana",
        Hora_Salida: "06:45",
        Hora_Regreso: "20:00",
        Espera: false,
        Status: "Rechazado"
      }
    }
  ];
  
  export default formularios;
  