import {Prisma} from "@prisma/client";

const defaultPrismaException = (e:unknown): string|null => {
    // Add Error Handling Routine Later
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code){
            case 'P1001':
                return 'DB ERROR: CANNOT REACH TO DB'
            case 'P2002':
                return `DB ERROR: UNIQUE CONSTRAINT VIOLATION, CREATE FAILED - ${e.message}`;
            case `P2004`:
                return `DB ERROR: QUERY VIOLATES CONSTRAINTS - ${e.message}`
            default:
                return `DB ERROR: ${e.message}`

        }
    }

    return null; //* Not a Prisma Exception
}

export default defaultPrismaException;
