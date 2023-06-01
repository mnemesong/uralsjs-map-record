export declare function mapRecordVals<M, K>(r: Record<(string | number | symbol), M>, mapFunc: (m: M) => K): Record<string | number | symbol, K>;
export declare function mapRecordKeys<M>(r: Record<(string | number | symbol), M>, mapFunc: (m: string | number | symbol) => string | number | symbol): Record<string | number | symbol, M>;
