export const EmailTemplate = ({ nombre, apellido, email, telefono, mensaje }) => {
  return (
    <div>
      <h1>Solicitud de información</h1>
      <ul>
        <li>
          Nombre: {nombre}
        </li>
        <li>
          Apellido: {apellido}
        </li>
        <li>
          Email: {email}
        </li>
        <li>
          Telefono: {telefono}
        </li>
        <li>
          Mensaje: {mensaje}
        </li>
      </ul>
    </div>
  )
}
