export { default as DataSource } from './DataSource';
export * from './Formatters';
export * from './dom';
export * from './style';
export * from './math';
export * from './edit';

export const isObject = (value) => {
    if (value === null || value === undefined)
        return false;
    return value.toString() === '[object Object]';
};

export const deepCopy = function (result, source, type = true) {
    for (const key in source) {
        const copy = source[key];
        if (type) {
            if (Array.isArray(copy))
                result[key] = deepCopy(result[key] || [], copy);
            else if (isObject(copy))
                result[key] = deepCopy(result[key] || {}, copy);
            else
                result[key] = copy;
        } else
            result[key] = copy;
    }
    return result;
};
