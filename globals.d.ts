declare module '*.svg' {
    const path: string;
    export default path;
}

declare module '*.bmp' {
    const path: string;
    export default path;
}

declare module '*.gif' {
    const path: string;
    export default path;
}

declare module '*.jpg' {
    const path: string;
    export default path;
}

declare module '*.jpeg' {
    const path: string;
    export default path;
}

declare module '*.png' {
    const path: string;
    export default path;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string; };
    export default classes;
};
