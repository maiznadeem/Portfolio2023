// Loads a folder of .webp images (a require.context) as { camelCaseName: { src, srcSet } }, ready to spread
// onto an <img>. An image that comes in several sizes is saved once per size as <name>.<width>.webp
// (home.1440.webp, home.720.webp): src is the largest and srcSet lists them all, so with `sizes` the
// browser downloads the one the layout needs. Spread the result first, so `sizes` and the rest follow it.
export const loadImages = (context) => {
    const found = {};
    context.keys().forEach((key) => {
        const [, name, width] = key.match(/([^/]+?)(?:\.(\d+))?\.webp$/);
        (found[name] ||= new Map()).set(context(key), Number(width));
    });

    const images = {};
    Object.entries(found).forEach(([name, sizes]) => {
        const bySize = [...sizes].sort((a, b) => b[1] - a[1]);
        images[name.replace(/-(\w)/g, (_, c) => c.toUpperCase())] = {
            src: bySize[0][0],
            srcSet: bySize.length > 1 ? bySize.map(([url, w]) => `${url} ${w}w`).join(", ") : undefined,
        };
    });
    return images;
};

// How wide each kind of image is laid out (see App.css), for `sizes`. Below 576px the page has about 20px
// of padding a side; keep these close to the real widths, or phones fetch the next size up.
export const SIZES = {
    banner: "(max-width: 575.98px) calc(100vw - 40px), (max-width: 1320px) 100vw, 1296px",
    card: "(max-width: 575.98px) calc(100vw - 40px), (max-width: 767.98px) 100vw, 460px",
    shot: "(max-width: 575.98px) calc(100vw - 40px), (max-width: 844px) 100vw, 820px",
    half: "(max-width: 575.98px) calc(100vw - 40px), (max-width: 767.98px) 100vw, 410px",
    phone: "(max-width: 575.98px) calc(50vw - 28px), (max-width: 767.98px) 50vw, 170px",
};
