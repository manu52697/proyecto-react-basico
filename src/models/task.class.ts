import { LEVELS } from './levels.enum'

export class Task {
  id: number = -1
  name: string = ''
  description: string = ''
  completed: boolean = false
  level: LEVELS = LEVELS.NORMAL

  constructor (id: number, name: string, description: string, completed: boolean, level: LEVELS) {
    this.id = id
    this.name = name
    this.description = description
    this.completed = completed
    this.level = level
  }
}
