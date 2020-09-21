// TODO 写的过于复杂了，且map不是这么用的，思考先排序sections、倒序插入等入手
const inject = (items, sections) => {
    const indexes = sections.map(s => s.index);
    sections.map(s => {
        items.splice((s.index + calculateRelativeOffSet(indexes, s.index)),
            0, s.content);
    });
    return items;
}

const calculateRelativeOffSet = (indexes, index) => {
    let offSetCount = 0;
    for (let item of indexes) {
        if (item === index) {
            return offSetCount;
        }
        if (item < index) {
            offSetCount += 1;
        }
    }
}
export { inject };
