

export interface Session {
    session: Ses
    token: Token
    user: User
}

interface User {
    name:string
    uid:string
}

interface Token {
    sub:string
}

interface Ses {
    user: User
}