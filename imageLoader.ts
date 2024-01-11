interface Loader{
    src:string
}
export default function ImageLoader({ src }:Loader) {
    const url =  `http://${process.env.HOST}/${src}`;
    console.log(url)
    return url;
}
