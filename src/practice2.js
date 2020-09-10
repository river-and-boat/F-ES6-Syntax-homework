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
