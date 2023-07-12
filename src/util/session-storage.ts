
export function sessionStore (key: string, obj: any): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(obj))
  } catch (err) {
    console.error(err)
  }
}

export function sessionGet (key: string): any {
  const value = sessionStorage.getItem(key)
  if (value === null) return null
  return JSON.parse(value)
}

export function sessionRemove (key: string): void {
  sessionStorage.removeItem(key)
}
