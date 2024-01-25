import React, { useState } from "react";
export const useEvento = (event) => {
  const [nombre, setNombre] = useState(event ? event.nombreEvento : "");
  const [Autoridades, setAutoridades] = useState(
    event ? event.autoridadesConcurso : []
  );
  const [clubes, setClubes] = useState(event ? event.clubesPatrocinadores : []);
  const [id, setId] = useState(event ? event.id : "");
  const [imagenEvento, setImagenEvento] = useState("");
  const [imagenEmblema, setImagenEmblema] = useState("");
  const [descripcion, setDescripcion] = useState(
    event ? event.descripcionEvento : ""
  );
  const [estadoEvento, setEstadoEvento] = useState(
    event ? event.estadoEvento : ""
  );
  const [inscritos, setInscritos] = useState([]);
  const [horaInicio, setHoraInicio] = useState(event ? event.horaInicio : "");

  {
    /* pertenecen a la propiedad horario en la base*/
  }

  function formatDDMMYYYY(date) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("es-AR", options);
  }

  const [fechaInicio, setFechaInicio] = useState(
    event
      ? formatDDMMYYYY(new Date(event.fechaInicio))
      : formatDDMMYYYY(new Date())
  );
  const [fechaFin, setFechaFin] = useState(
    event
      ? formatDDMMYYYY(new Date(event.fechaFinalizacion))
      : formatDDMMYYYY(new Date())
  );

  {
    /* pertenecen a la propiedad horario en la base*/
  }
  const [fechaInicioInscripcion, setFechaInicioInscripcion] = useState(
    event
      ? formatDDMMYYYY(new Date(event.fechaInicioInscripcion))
      : formatDDMMYYYY(new Date())
  );
  const [fechaFinInscripcion, setFechaFinInscripcion] = useState(
    event
      ? formatDDMMYYYY(new Date(event.fechaFinInscripcion))
      : formatDDMMYYYY(new Date())
  );

  const [tipoEvento, setTipoEvento] = useState(event ? event.tipoConcurso : "");
  const [ubicacion, setUbicacion] = useState(event ? event.ubicacion : "");
  const [email, setEmail] = useState(event ? event.emailContacto : "");
  const [pruebasEvento, setPruebasEvento] = useState(
    event ? event.categorias : []
  );

  const [selectedDateTimeInicio, setDateTimeInicio] = useState("");
  const [selectedDateTimeFin, setDateTimeFin] = useState(null);

  const [tipoPrueba, settipoPrueba] = useState("");
  const [categoria, setCategoria] = useState(event ? event.categoria : []);
  const [altura, setAltura] = useState("");
  const [definicion, setDefinicion] = useState("");
  const [caballos, setCaballos] = useState("");
  const [codigoClasificacion, setCodClasificacion] = useState("");
  const [dia, setFechaPrueba] = useState(new Date());
  const [hora, setHoraPrueba] = useState(new Date());
  const [arancelInscripcion, setArancel] = useState("");
  const [premio, setPremio] = useState("");
  const [pista, setPista] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [categoriasAgregadas, setCategoriasAgregadas] = useState([]);

  const [editandoCategoria, setEditandoCategoria] = useState(false);
  const [indiceCategoriaEditando, setIndiceCategoriaEditando] = useState(-1);

  return {
    tipoPrueba,
    pista,
    observaciones,
    editandoCategoria,
    indiceCategoriaEditando,
    setIndiceCategoriaEditando,
    setEditandoCategoria,
    categoriasAgregadas,
    setCategoriasAgregadas,
    setObservaciones,
    setPista,
    settipoPrueba,
    categoria,
    arancelInscripcion,
    premio,
    setPremio,
    setArancel,
    setCategoria,
    altura,
    setAltura,
    definicion,
    setDefinicion,
    caballos,
    setCaballos,
    codigoClasificacion,
    setCodClasificacion,
    dia,
    setFechaPrueba,
    hora,
    setHoraPrueba,
    nombre,
    fechaFin,
    setFechaFin,
    setNombre,
    Autoridades,
    fechaFinInscripcion,
    email,
    selectedDateTimeFin,
    ubicacion,
    setUbicacion,
    setDateTimeFin,
    selectedDateTimeInicio,
    setDateTimeInicio,
    setEmail,
    tipoEvento,
    setTipoEvento,
    setFechaFinInscripcion,
    fechaInicioInscripcion,
    setFechaInicioInscripcion,
    setAutoridades,
    clubes,
    setClubes,
    imagenEvento,
    setImagenEvento,
    imagenEmblema,
    setImagenEmblema,
    descripcion,
    setDescripcion,
    inscritos,
    setInscritos,
    fechaInicio,
    setFechaInicio,
    horaInicio,
    setHoraInicio,
    estadoEvento,
    setEstadoEvento,
    pruebasEvento,
    setPruebasEvento,
    id,
    setId,
  };
};
