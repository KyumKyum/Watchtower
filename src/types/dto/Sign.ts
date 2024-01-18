export interface SignDto{
    id: string|null,
    guestName: string,
    password: string,
    content: string,
    createdAt: string,
}

export interface CreateSignDto {
    guestName: string,
    password: string,
    content: string,
}
