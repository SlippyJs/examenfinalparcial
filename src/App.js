import React, { useState } from 'react';
import { Plus, X, Upload, Edit2, Save, Mail, Phone, MapPin } from 'lucide-react';

export default function CVInteractivo() {
  const [editMode, setEditMode] = useState(false);
  const [foto, setFoto] = useState(null);
  
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "JUAN CARLOS BANDA GUAMAN",
    titulo: "ESTUDIANTE DE DESARROLLO DE SOFTWARE",
    telefono: "0962782992",
    email: "juanitoalcachofa_100@outlook.com",
    direccion: "Cocomas - Sector Reino de Quito",
    sobreMi: "Estudio desarrollo de software y me motiva implementar tecnologías con impacto social, como mi validador de cédulas. Soy proactivo al desarrollar un casino virtual con juego responsable, me adapto rápido a distintos entornos, apasionado por retos y colaboro con buena comunicación para resultados de calidad."
  });

  const [educacion, setEducacion] = useState([
    {
      id: 1,
      periodo: "2023 | 2024",
      titulo: "BACHILLER EN CIENCIAS",
      estado: "Egresado",
      institucion: "UNIDAD EDUCATIVA QUITO SUR"
    },
    {
      id: 2,
      periodo: "2024 - 2025",
      titulo: "TECNOLOGÍA EN DESARROLLO DE SOFTWARE",
      estado: "Cursando",
      institucion: "Pontificia Universidad Católica del Ecuador"
    }
  ]);

  const [experiencia, setExperiencia] = useState([
    {
      id: 1,
      proyecto: "Validador de Cédulas",
      semestre: "Primer semestre",
      descripcion: "Desarrollo de una aplicación que valida números de cédula y muestra la información del usuario ingresado."
    },
    {
      id: 2,
      proyecto: "Casino Virtual",
      semestre: "Segundo semestre",
      descripcion: "Creación de un casino virtual que muestra resultados y probabilidades en tiempo real, fomentando el juego responsable y la toma de decisiones conscientes."
    }
  ]);

  const [habilidades, setHabilidades] = useState([
    "Bases de datos con SQL Server",
    "Programación en Python, HTML y CSS",
    "Comprensión de lógica computacional y diseño web",
    "Responsable, proactivo y con gran disposición para aprender",
    "Trabajo en equipo y comunicación efectiva"
  ]);

  const [nuevaHabilidad, setNuevaHabilidad] = useState("");

  const manejarFoto = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(archivo);
    }
  };

  const agregarEducacion = () => {
    const nueva = {
      id: Date.now(),
      periodo: "",
      titulo: "",
      estado: "",
      institucion: ""
    };
    setEducacion([...educacion, nueva]);
  };

  const eliminarEducacion = (id) => {
    setEducacion(educacion.filter(e => e.id !== id));
  };

  const actualizarEducacion = (id, campo, valor) => {
    setEducacion(educacion.map(e => 
      e.id === id ? { ...e, [campo]: valor } : e
    ));
  };

  const agregarExperiencia = () => {
    const nueva = {
      id: Date.now(),
      proyecto: "",
      semestre: "",
      descripcion: ""
    };
    setExperiencia([...experiencia, nueva]);
  };

  const eliminarExperiencia = (id) => {
    setExperiencia(experiencia.filter(e => e.id !== id));
  };

  const actualizarExperiencia = (id, campo, valor) => {
    setExperiencia(experiencia.map(e => 
      e.id === id ? { ...e, [campo]: valor } : e
    ));
  };

  const agregarHabilidad = () => {
    if (nuevaHabilidad.trim()) {
      setHabilidades([...habilidades, nuevaHabilidad]);
      setNuevaHabilidad("");
    }
  };

  const eliminarHabilidad = (index) => {
    setHabilidades(habilidades.filter((_, i) => i !== index));
  };

  const imprimirCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Botones de control */}
        <div className="flex gap-3 mb-6 print:hidden">
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {editMode ? <Save size={18} /> : <Edit2 size={18} />}
            {editMode ? 'Guardar' : 'Editar'}
          </button>
          <button
            onClick={imprimirCV}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Descargar PDF
          </button>
        </div>

        {/* CV */}
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          {/* Header con foto y datos personales */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Foto */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300">
                  {foto ? (
                    <img src={foto} alt="Foto de perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl font-bold">
                      JC
                    </div>
                  )}
                </div>
                {editMode && (
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-100 transition">
                    <Upload size={16} className="text-blue-600" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={manejarFoto}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Datos personales */}
              <div className="flex-1 text-center md:text-left">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={datosPersonales.nombre}
                      onChange={(e) => setDatosPersonales({...datosPersonales, nombre: e.target.value})}
                      className="text-3xl font-bold mb-2 bg-white/20 text-white w-full px-3 py-1 rounded"
                    />
                    <input
                      type="text"
                      value={datosPersonales.titulo}
                      onChange={(e) => setDatosPersonales({...datosPersonales, titulo: e.target.value})}
                      className="text-lg bg-white/20 text-white w-full px-3 py-1 rounded"
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold mb-2">{datosPersonales.nombre}</h1>
                    <p className="text-lg opacity-90">{datosPersonales.titulo}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Columna izquierda */}
            <div className="md:col-span-1 bg-gray-50 p-6 space-y-6">
              {/* Contacto */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">CONTACTO</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    {editMode ? (
                      <input
                        type="text"
                        value={datosPersonales.telefono}
                        onChange={(e) => setDatosPersonales({...datosPersonales, telefono: e.target.value})}
                        className="text-sm w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      <p className="text-sm">{datosPersonales.telefono}</p>
                    )}
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    {editMode ? (
                      <input
                        type="email"
                        value={datosPersonales.email}
                        onChange={(e) => setDatosPersonales({...datosPersonales, email: e.target.value})}
                        className="text-sm w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      <p className="text-sm break-all">{datosPersonales.email}</p>
                    )}
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    {editMode ? (
                      <input
                        type="text"
                        value={datosPersonales.direccion}
                        onChange={(e) => setDatosPersonales({...datosPersonales, direccion: e.target.value})}
                        className="text-sm w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      <p className="text-sm">{datosPersonales.direccion}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Habilidades */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  HABILIDADES PROFESIONALES
                </h2>
                <ul className="space-y-2">
                  {habilidades.map((hab, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm flex-1">{hab}</span>
                      {editMode && (
                        <button
                          onClick={() => eliminarHabilidad(index)}
                          className="opacity-0 group-hover:opacity-100 transition print:hidden"
                        >
                          <X size={16} className="text-red-500" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                {editMode && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={nuevaHabilidad}
                      onChange={(e) => setNuevaHabilidad(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && agregarHabilidad()}
                      placeholder="Nueva habilidad"
                      className="flex-1 px-2 py-1 border rounded text-sm"
                    />
                    <button
                      onClick={agregarHabilidad}
                      className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="md:col-span-2 p-6 space-y-6">
              {/* Sobre mí */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">SOBRE MÍ</h2>
                {editMode ? (
                  <textarea
                    value={datosPersonales.sobreMi}
                    onChange={(e) => setDatosPersonales({...datosPersonales, sobreMi: e.target.value})}
                    className="w-full px-3 py-2 border rounded text-sm"
                    rows="4"
                  />
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed">{datosPersonales.sobreMi}</p>
                )}
              </div>

              {/* Educación */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">EDUCACIÓN</h2>
                  {editMode && (
                    <button
                      onClick={agregarEducacion}
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 print:hidden"
                    >
                      <Plus size={16} />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  {educacion.map((edu) => (
                    <div key={edu.id} className="relative group">
                      {editMode && (
                        <button
                          onClick={() => eliminarEducacion(edu.id)}
                          className="absolute -right-2 -top-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition print:hidden"
                        >
                          <X size={14} />
                        </button>
                      )}
                      {editMode ? (
                        <div className="space-y-2 p-3 border rounded">
                          <input
                            type="text"
                            value={edu.periodo}
                            onChange={(e) => actualizarEducacion(edu.id, 'periodo', e.target.value)}
                            placeholder="Período"
                            className="w-full px-2 py-1 border rounded text-sm font-semibold text-blue-600"
                          />
                          <input
                            type="text"
                            value={edu.titulo}
                            onChange={(e) => actualizarEducacion(edu.id, 'titulo', e.target.value)}
                            placeholder="Título"
                            className="w-full px-2 py-1 border rounded text-sm font-bold"
                          />
                          <input
                            type="text"
                            value={edu.estado}
                            onChange={(e) => actualizarEducacion(edu.id, 'estado', e.target.value)}
                            placeholder="Estado"
                            className="w-full px-2 py-1 border rounded text-sm"
                          />
                          <input
                            type="text"
                            value={edu.institucion}
                            onChange={(e) => actualizarEducacion(edu.id, 'institucion', e.target.value)}
                            placeholder="Institución"
                            className="w-full px-2 py-1 border rounded text-sm"
                          />
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-semibold text-blue-600">{edu.periodo}</p>
                          <h3 className="text-base font-bold text-gray-800">{edu.titulo}</h3>
                          <p className="text-sm text-gray-600">{edu.estado} - {edu.institucion}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experiencia */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">EXPERIENCIA LABORAL</h2>
                  {editMode && (
                    <button
                      onClick={agregarExperiencia}
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 print:hidden"
                    >
                      <Plus size={16} />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  {experiencia.map((exp) => (
                    <div key={exp.id} className="relative group">
                      {editMode && (
                        <button
                          onClick={() => eliminarExperiencia(exp.id)}
                          className="absolute -right-2 -top-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition print:hidden"
                        >
                          <X size={14} />
                        </button>
                      )}
                      {editMode ? (
                        <div className="space-y-2 p-3 border rounded">
                          <input
                            type="text"
                            value={exp.proyecto}
                            onChange={(e) => actualizarExperiencia(exp.id, 'proyecto', e.target.value)}
                            placeholder="Proyecto"
                            className="w-full px-2 py-1 border rounded text-sm font-bold"
                          />
                          <input
                            type="text"
                            value={exp.semestre}
                            onChange={(e) => actualizarExperiencia(exp.id, 'semestre', e.target.value)}
                            placeholder="Semestre/Período"
                            className="w-full px-2 py-1 border rounded text-sm font-semibold text-blue-600"
                          />
                          <textarea
                            value={exp.descripcion}
                            onChange={(e) => actualizarExperiencia(exp.id, 'descripcion', e.target.value)}
                            placeholder="Descripción"
                            className="w-full px-2 py-1 border rounded text-sm"
                            rows="2"
                          />
                        </div>
                      ) : (
                        <div>
                          <h3 className="text-base font-bold text-gray-800">Proyecto: {exp.proyecto}</h3>
                          <p className="text-sm font-semibold text-blue-600">{exp.semestre}</p>
                          <p className="text-sm text-gray-700 mt-1">{exp.descripcion}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}