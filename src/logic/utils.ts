import {SVGItem} from "../../global";
import {headers} from "next/headers";

export const cls = (...classnames: string[]) => {
    return classnames.join(" "); //* All classname arrays will be converted into single string.
}

// export class IconMapper {
//     public async getIcon(name: string): Promise<SVGItem> {
//         return await import(`../../public/svg/${name}.svg`);
//     }
// }

export const getURL = (path:string):string => {
    const baseURL = process.env.HOST;

    return new URL(path, baseURL).toString();
}

export const isValid = (value:any): boolean => {
    return value !== null && value !== undefined && !Number.isNaN(value);
}

export const dateStringBuilder = (curDate: Date):string => {
    const year = curDate.getFullYear().toString().substring(2,4).padStart(2,'0');
    const month = (curDate.getMonth()+1).toString().padStart(2,'0');
    const day = curDate.getDate().toString().padStart(2,'0');
    const hr = curDate.getHours().toString().padStart(2,'0');
    const min = curDate.getMinutes().toString().padStart(2,'0');

    return `${year}/${month}/${day} ${hr}:${min}`;
}

export const fetchURLBuilder = (host: string|null, endpoint:string):string => {
    const protocol = (process.env.NODE_ENV === 'development') ? "http" : "https";

    return  `${protocol}://${host}${endpoint}`;
}
