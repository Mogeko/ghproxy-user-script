const PROXY_URL = 'https://cdn.jsdelivr.net/gh';

const GH_RAW_HOST = 'raw.githubusercontent.com';

const jsDelivrIt = (url) => {
    const ast = url.split('/');
    const path = ast[2] === GH_RAW_HOST
        ? [ast[3], ast[4]+'@'+ast[5], ...ast.slice(6)]
        : [ast[3], ast[4]+'@'+ast[6], ...ast.slice(7)];
    return path.reduce((x, y) => x+'/'+y, PROXY_URL);
}
