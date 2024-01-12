export class Task {
  constructor(public id: number, public content: { text: string, icon: string }[]) {}
}