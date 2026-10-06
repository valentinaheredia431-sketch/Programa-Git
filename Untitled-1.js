// Mal: usa Snake_Case, abreviaturas confusas y spanglish
let num_eq = 24;
function get_data(){
  let e = "Disponible";
}

// Bien: camelCase en español, claro y descriptivo
const totalEquiposDisponibles = 24;

function obtenerEstadoEquipo(serialEquipo) {
  const estadoActual = "Disponible";
  return estadoActual;
}

# Mal: Indentación de 2 espacios e inconsistente, línea de más de 80 caracteres
def registrar_equipo(serial,tipo,marca,procesador,ram,almacenamiento,sede_asignada):
  if serial!=None:
    print("Registrando equipo con serial:"+serial+" en la sede:"+sede_asignada)

    # Bien: 4 espacios de indentación, parámetros ordenados y espacios alrededor de operadores
def registrar_equipo(serial, tipo, sede_asignada):
    """Registra un nuevo activo tecnológico en la base de datos."""
    if serial is not None:
        mensaje = f"Registrando equipo {serial} en sede {sede_asignada}"
        print(mensaje)

        /* Mal: Nombres con Mayúsculas y guiones bajos mezclados */
.Card_Container_1 {
    background-color: white; /* pone el fondo blanco */
}

/* Bien: uso de kebab-case y variables de color globales */
.card-container {
  background-color: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}