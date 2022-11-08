export class Generate {
    static token (): string {
        return Math.floor(Date.now() * Math.random()).toString(36)
    }
}