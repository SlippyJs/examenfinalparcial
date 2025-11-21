import React, { useState } from 'react';
import { Plus, X, Upload, Edit2, Save, Mail, Phone, MapPin, ArrowLeft, Sparkles } from 'lucide-react';

const plantillasEjemplo = [
  {
    id: 1,
    nombre: "Plantilla Profesional",
    color: "from-blue-600 to-blue-800",
    datosPersonales: {
      nombre: "JUAN CARLOS BANDA GUAMAN",
      titulo: "ESTUDIANTE DE DESARROLLO DE SOFTWARE",
      telefono: "0962782992",
      email: "juanitoalcachofa_100@outlook.com",
      direccion: "Cocomas - Sector Reino de Quito",
      sobreMi: "Estudio desarrollo de software y me motiva implementar tecnologías con impacto social, como mi validador de cédulas. Soy proactivo al desarrollar un casino virtual con juego responsable, me adapto rápido a distintos entornos, apasionado por retos y colaboro con buena comunicación para resultados de calidad."
    },
    educacion: [
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
    ],
    experiencia: [
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
    ],
    habilidades: [
      "Bases de datos con SQL Server",
      "Programación en Python, HTML y CSS",
      "Comprensión de lógica computacional y diseño web",
      "Responsable, proactivo y con gran disposición para aprender",
      "Trabajo en equipo y comunicación efectiva"
    ]
  },
  {
    id: 2,
    nombre: "Plantilla Creativa",
    color: "from-purple-600 to-pink-600",
    datosPersonales: {
      nombre: "MARIA FERNANDA LÓPEZ",
      titulo: "DISEÑADORA GRÁFICA Y WEB",
      telefono: "0987654321",
      email: "maria.lopez@email.com",
      direccion: "Quito, Ecuador",
      sobreMi: "Diseñadora apasionada por crear experiencias visuales únicas. Me especializo en branding, diseño web y ilustración digital. Combino creatividad con estrategia para desarrollar soluciones que conectan con las audiencias."
    },
    educacion: [
      {
        id: 1,
        periodo: "2020 - 2024",
        titulo: "LICENCIATURA EN DISEÑO GRÁFICO",
        estado: "Graduada",
        institucion: "Universidad de las Artes"
      }
    ],
    experiencia: [
      {
        id: 1,
        proyecto: "Rediseño de Marca Corporativa",
        semestre: "2023",
        descripcion: "Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta de colores y guía de marca."
      },
      {
        id: 2,
        proyecto: "Portfolio Web Interactivo",
        semestre: "2024",
        descripcion: "Creación de sitio web con animaciones y efectos visuales para mostrar proyectos de manera atractiva."
      }
    ],
    habilidades: [
      "Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Figma y herramientas de prototipado",
      "HTML, CSS y JavaScript básico",
      "Ilustración digital y tipografía",
      "Gestión de proyectos creativos"
    ]
  },
  {
    id: 3,
    nombre: "Plantilla Minimalista",
    color: "from-gray-700 to-gray-900",
    datosPersonales: {
      nombre: "CARLOS ANDRÉS MORALES",
      titulo: "INGENIERO DE DATOS",
      telefono: "0991234567",
      email: "c.morales@datamail.com",
      direccion: "Guayaquil, Ecuador",
      sobreMi: "Ingeniero enfocado en análisis de datos y machine learning. Experiencia transformando datos complejos en insights accionables. Experto en Python, SQL y visualización de datos."
    },
    educacion: [
      {
        id: 1,
        periodo: "2019 - 2023",
        titulo: "INGENIERÍA EN SISTEMAS",
        estado: "Graduado",
        institucion: "Escuela Politécnica Nacional"
      },
      {
        id: 2,
        periodo: "2024",
        titulo: "CERTIFICACIÓN EN DATA SCIENCE",
        estado: "Completado",
        institucion: "Coursera - IBM"
      }
    ],
    experiencia: [
      {
        id: 1,
        proyecto: "Pipeline de Datos ETL",
        semestre: "2023",
        descripcion: "Diseño e implementación de pipeline automatizado para procesamiento de 10M+ registros diarios."
      },
      {
        id: 2,
        proyecto: "Dashboard Analítico",
        semestre: "2024",
        descripcion: "Desarrollo de dashboard interactivo con Power BI para visualización de KPIs empresariales en tiempo real."
      }
    ],
    habilidades: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL y bases de datos relacionales",
      "Power BI y Tableau",
      "Machine Learning y estadística",
      "Apache Spark y Big Data"
    ]
  },
  {
    id: 4,
    nombre: "Plantilla en Blanco",
    color: "from-green-600 to-teal-600",
    datosPersonales: {
      nombre: "TU NOMBRE AQUÍ",
      titulo: "TU TÍTULO PROFESIONAL",
      telefono: "Tu teléfono",
      email: "tu.email@ejemplo.com",
      direccion: "Tu dirección",
      sobreMi: "Escribe aquí tu perfil profesional..."
    },
    educacion: [],
    experiencia: [],
    habilidades: []
  }
];

export default function CVInteractivo() {
  const [pantallaActual, setPantallaActual] = useState('selector');
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [foto, setFoto] = useState(null);
  const [datosPersonales, setDatosPersonales] = useState({});
  const [educacion, setEducacion] = useState([]);
  const [experiencia, setExperiencia] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [nuevaHabilidad, setNuevaHabilidad] = useState("");

  const seleccionarPlantilla = (plantilla) => {
    setPlantillaSeleccionada(plantilla);
    setDatosPersonales(plantilla.datosPersonales);
    setEducacion(plantilla.educacion);
    setExperiencia(plantilla.experiencia);
    setHabilidades(plantilla.habilidades);
    setPantallaActual('editor');
    setEditMode(plantilla.id === 4);
  };

  const volverSelector = () => {
    setPantallaActual('selector');
    setFoto(null);
    setEditMode(false);
  };

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

  if (pantallaActual === 'selector') {
    return (
      <div className="min-h-screen bg-black p-4 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white animate-pulse" style={{
              fontFamily: 'Courier New, monospace',
              letterSpacing: '0.1em',
              textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #00ffff, 0 0 70px #00ffff, 0 0 80px #00ffff, 0 0 100px #00ffff'
            }}>
              CV BUILDER
            </h1>
            <p className="text-xl text-cyan-400 font-mono tracking-wider">
              &gt; SELECCIONA TU PLANTILLA_
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plantillasEjemplo.map((plantilla, index) => (
              <div
                key={plantilla.id}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => seleccionarPlantilla(plantilla)}
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e, #0f0f1e)',
                  border: '3px solid #ff00ff',
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  position: 'relative'
                }}
              >
                <div className="p-6" style={{ background: '#0a0a0a' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center text-2xl font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-mono">{plantilla.nombre}</h3>
                        <p className="text-xs text-cyan-400 font-mono">PRESIONA PARA USAR</p>
                      </div>
                    </div>
                    {plantilla.id === 4 && (
                      <Sparkles className="text-yellow-400 animate-pulse" size={24} />
                    )}
                  </div>

                  <div className="bg-black/50 rounded-lg p-4 border-2 border-cyan-500/30 hover:border-pink-500 transition-colors">
                    <div className={`h-3 bg-gradient-to-r ${plantilla.color} rounded mb-2`}></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-mono">
                      {plantilla.id !== 4 ? 'CON EJEMPLO' : 'PERSONALIZABLE'}
                    </span>
                    <button className="px-3 py-1 text-xs font-bold font-mono bg-gradient-to-r from-pink-500 to-cyan-500 text-black border-2 border-white hover:scale-110 transition-transform">
                      SELECT →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-purple-400 font-mono">
              ◄ ► NAVEGA | ENTER PARA SELECCIONAR
            </p>
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

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-3 mb-6 print:hidden">
          <button
            onClick={volverSelector}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <ArrowLeft size={18} />
            Cambiar Plantilla
          </button>
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

        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className={`bg-gradient-to-r ${plantillaSeleccionada?.color} text-white p-8`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300">
                  {foto ? (
                    <img src={foto} alt="Foto de perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl font-bold">
                      {datosPersonales.nombre?.substring(0, 2) || "??"}
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
            <div className="md:col-span-1 bg-gray-50 p-6 space-y-6">
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

            <div className="md:col-span-2 p-6 space-y-6">
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