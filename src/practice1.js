const parseData = ({data, column}) => {
    const keys = column.map(obj => obj.name);
    const result = [];
    data.map(d => {
        const obj = {}
        zip(keys, d).map(([key, value])=> obj[key] = value);
        result.push(obj);
    })
    return result;
}

const zip = ([x,...xs], [y,...ys]) => {
    if (x === undefined || y === undefined) {
        return [];
    } else {
       return [[x,y], ...zip(xs, ys)];
    }
}

export { parseData };


