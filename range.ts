export function arrSize(start: number, end: number, step: number) {
    const size = Math.floor(
        Math.abs((Math.max(start, end) - Math.min(start, end)) / step)
    )
    return size
}

export function range(start: number, end?: number, step: number = 1) {
    let flip = false
    if (step === 0) return []

    if (end === undefined) {
        end = start
        start = 0
    }

    if (end < start && step > 0) return []
    if (end > start && step < 0) return []
    else if (end < start) {
        let tEnd = end
        end = start
        start = tEnd
        flip = true
    }

    // console.dir((Math.max(start, end) - Math.min(start, end)) / step)

    const arr = new Array(arrSize(start, end, step))
    .fill(undefined)
    .map((x, i) => {
        return start + Math.abs((i * step)) + Number(flip)
    })
    if (flip) arr.reverse()

    return arr
}
