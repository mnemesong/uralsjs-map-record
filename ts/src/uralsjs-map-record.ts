export function mapRecordVals<M, K>(
    r: Record<(string|number|symbol), M>, 
    mapFunc: (m: M) => K
): Record<string|number|symbol, K> {
    const result = {};
    Object.keys(r)
        .forEach(k => result[k] = mapFunc(r[k]));
    return result;
}

export function mapRecordKeys<M>(
    r: Record<(string|number|symbol), M>, 
    mapFunc: (m: string|number|symbol) => string|number|symbol
): Record<string|number|symbol, M> {
    const result = {};
    Object.keys(r)
        .forEach(k => result[mapFunc(k)] = r[k]);
    return result;
}