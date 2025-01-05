import { AxiosError } from 'axios'

interface ErrorMessages {
  [key: string]: string
}

interface BackendErrorResponse {
  message: string
}

const errorMessages: ErrorMessages = {
  ERR_NETWORK:
    'Se ha producido un error de conexión a la red. Por favor, verifica tu conexión a internet y vuelve a intentarlo.',
  USER_EXIST: 'Credenciales inválidas. Intente con otras credenciales',
  '401': 'No autorizado. Por favor, inicia sesión de nuevo.',
  '404': 'Recurso no encontrado. Verifica la URL o el recurso solicitado.',
  '500': 'Error interno del servidor. Inténtalo de nuevo más tarde.',
}

export type Error = AxiosError<BackendErrorResponse>

export function getErrorMessage(code: string): string {
  return errorMessages[code] || 'Error desconocido. Inténtalo de nuevo más tarde.'
}
