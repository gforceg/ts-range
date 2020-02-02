export function arrSize(a: number, b: number, step: number) {
    const size = Math.floor(
        Math.abs((Math.max(a, b) - Math.min(a, b)) / step)
    )
    return size
}

export function range(start: number, stop?: number, step: number = 1) {
    let flip = false
    if (step === 0) return []

    if (stop === undefined) {
        stop = start
        start = 0
    }

    if (stop < start && step > 0) return []
    if (stop > start && step < 0) return []
    else if (stop < start) {
        let tEnd = stop
        stop = start
        start = tEnd
        flip = true
    }

    const arr = new Array(arrSize(start, stop, step))
    .fill(undefined)
    .map((x, i) => {
        return start + Math.abs((i * step)) + Number(flip)
    })
    if (flip) arr.reverse()

    return arr
}
