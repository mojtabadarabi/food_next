export const alertUser = (message: string | string[], mode: 'success' | 'warning' | 'error'): void => {
    if (message instanceof Array) {
        message.map((msg: String) => {
            alertByMode(msg, mode)
        })
    }
    else alertByMode(message, mode)

}

export const alertByMode = (message: String, mode: 'success' | 'warning' | 'error') => {
    if (mode === 'success') {
        return console.log('success' + message)
    }
    if (mode === 'warning') {
        return console.warn('warning' + message)
    }
    return console.error('error' + message)
}