import {SVGItem} from "../../global";

export const cls = (...classnames: string[]) => {
    return classnames.join(" "); //* All classname arrays will be converted into single string.
}

// export class IconMapper {
//     public async getIcon(name: string): Promise<SVGItem> {
//         return await import(`../../public/svg/${name}.svg`);
//     }
// }

export const getURL = (path:string):string => {
    const baseURL = (process.env.IS_PRODUCTION === 'true')?
        process.env.HOST_PROD:
        process.env.HOST_DEV

    return new URL(path, baseURL).toString();
}
