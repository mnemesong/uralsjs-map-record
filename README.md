# uralsjs-map-record
Record mapping function


## API
```javascript
/**
 * Map values of record to same-keys record
 */
export function mapRecordVals<M, K>(
    r: Record<(string|number|symbol), M>, 
    mapFunc: (m: M) => K
): Record<string|number|symbol, K>

/**
 * Map keys of record to same-values record
 */
export function mapRecordKeys<M>(
    r: Record<(string|number|symbol), M>, 
    mapFunc: (m: string|number|symbol) => string|number|symbol
): Record<string|number|symbol, M>
```

## Author
Anatoly Starodubtsev 
tostar74@mail.ru

## License
MIT