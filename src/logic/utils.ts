import {SVGItem} from "../../global";

export const cls = (...classnames: string[]) => {
    return classnames.join(" "); //* All classname arrays will be converted into single string.
}

export class IconMapper {
    public async getIcon(name: string): Promise<SVGItem> {
        return await import(`../public/svg/${name}.svg`);
    }
}
