import bcrypt from 'bcryptjs';

export const hashValue = (value: string, salt: number): string => {
    return bcrypt.hashSync(value,salt);
}

export const hashCompare = (input:string, compareWith:string): Promise<boolean> => {
    return bcrypt.compare(input, compareWith);
}
