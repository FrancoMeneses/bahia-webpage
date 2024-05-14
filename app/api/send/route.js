import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req) {
  const formData = await req.json()
  console.log(formData)
  // return Response.json({ formData }, { status: 200 })
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bahía Business Center Formulario <test@resend.dev>',
      to: ['meneses773@gmail.com'],
      subject: 'Solicitud de información',
      react: EmailTemplate({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje
      })
    })

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 })
  }
}
