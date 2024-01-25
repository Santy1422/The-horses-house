export const professionsArray = [
    {
      // CLUB DE EQUITACION
      name: "Club de Equitación",
      totalSteps: 2,
      step1: {
        type: "text",
        text: "¿Cuál es tu club?",
        supporting: "Buscar Club",
        items: [],
      },
      step1bis: {
        type: "select",
        text: "¿Qué tipo de rol desempeñás?",
        supporting: "Seleccionar rol",
        items: [
          "Presidente",
          "Vicepresidente 1",
          "Vicepresidente 2",
          "Secretario",
          "Prosecretario",
          "Tesorero",
          "Protesorero",
          "Vocal titular",
          "Vocal suplente",
          "Revisor de cuentas titular",
          "Revisor de cuentas suplente",
        ],
      },
      step1ter: {
        type: "text",
        text: "Nombre",
        supporting: "",
        items: [],
      },
      step1cuar: {
        type: "text",
        text: "Número de teléfono",
        supporting: "",
        items: [],
      },
      step2: {
        type: "radio",
        text: "¿Te gustaría encontrar mas clientes?",
        supporting: "",
        items: ["Si, me gustaría.", "No me gustaría."],
      },
    },
    {
      //Federacion ecuestre argentina
      name: "Federación Ecuestre Argentina",
      totalSteps: 2,
      step1: {
        type: "select",
        text: "¿Qué tipo de rol desempeñás?",
        supporting: "Seleccionar rol",
        items: [
          "Presidente",
          "Vicepresidente 1",
          "Vicepresidente 2",
          "Secretario",
          "Prosecretario",
          "Tesorero",
          "Protesorero",
          "Vocal titular",
          "Vocal suplente",
          "Revisor de cuentas titular",
          "Revisor de cuentas suplente",
        ],
      },
      step1ter: {
        type: "text",
        text: "Nombre",
        supporting: "",
        items: [],
      },
      step1cuar: {
        type: "text",
        text: "Número de teléfono",
        supporting: "",
        items: [],
      },
      step1quin: {
        type: "select",
        text: "¿Qué secretaría tenés a cargo?",
        supporting: "Seleccionar secretaría",
        items: [
          "Secretaría de Relaciones Públicas",
          "Secretaría de Enseñanza de las Disciplinas Hípicas",
          "Secretaría de Afiliciones e Inspecciones",
          "Secretaría de Interior",
          "Secretaría de Asunto Jurídicos y Disciplinarios",
        ],
      },
      step2: {
        type: "radio",
        text: "¿Te gustaría encontrar mas clientes?",
        supporting: "",
        items: ["Si, me gustaría.", "No me gustaría."],
      },
    },
    {
      // FOTOGRAFO
      name: "Fotógrafo/Videos",
      totalSteps: 2,
      step1: {
        type: "select",
        text: "¿Qué tipo de productos/servicios ofrecés?",
        supporting: "Seleccioná un producto y/o servicio",
        items: ["Todos", "Fotografías", "Contenido audiovisual", "Animaciones"],
      },
      step2: {
        type: "radio",
        text: "¿Te interesa ofrecer tus servicios desde acá?",
        supporting: "",
        items: ["Si, me gustaría.", "No me gustaría."],
      },
    },
    {
      // ORGANIZADOR DE EVENTOS
      name: "Organizador de Eventos",
      totalSteps: 2,
      step1: {
        type: "select",
        text: "¿Qué tipo de rol desempeñás?",
        supporting: "Seleccionar rol",
        items: [
          "Diseñador de pista",
          "Jurado técnico",
          "Locutor",
          "Delegado técnico",
          "Cronometrista",
          "Otro",
        ],
      },
      step2: {
        type: "radio",
        text: "¿Te gustaría gestionar tus eventos desde acá?",
        supporting: "",
        items: ["Si, me gustaría.", "No me gustaría."],
      },
    },
    {
      // PROVEEDOR DE VIDEOS
      name: "Proveedor de videos",
      totalSteps: 2,
      step1: {
        type: "select",
        text: "¿Qué tipo de productos/servicios ofrecés?",
        supporting: "Seleccioná un producto y/o servicio",
        items: [
          "Streaming",
          "Videos para redes sociales (Reels)",
          "Videos en formato .mp4",
          "Todos",
          "Otros",
        ],
      },
      step2: {
        type: "radio",
        text: "¿Te interesa ofrecer tus servicios desde acá?",
        supporting: "",
        items: ["Si, me gustaría.", "No me gustaría."],
      },
    },
  ];
  