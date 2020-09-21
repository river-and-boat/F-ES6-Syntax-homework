const parseData = ({data, column}) => {
    const keys = column.map(obj => obj.name);
    // TODO 使用map做数组与数组的转化，不用声明result，查查map的使用
    const result = [];
    data.map(d => {
        const obj = {}
        // TODO 没有必要这么写（zip），不易读且map也不是这么用的
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


