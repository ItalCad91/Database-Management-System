export function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
};

export function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('GoodBye World');
};
