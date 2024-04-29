export class ServiceMessage {
    id: string
    code: number
    message: string
    type: 'error' | 'success' | 'warning'
    details?: object

    constructor({ code, message, type }: {
        code: ServiceMessage['code'],
        message: ServiceMessage['message'],
        type: ServiceMessage['type'],

    }) {
        this.code = code
        this.message = message
        this.type = type
        this.id = Math.random().toString(16).slice(2)
    }
}

