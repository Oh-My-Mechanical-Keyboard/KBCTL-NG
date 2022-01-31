export function formatKleJson (raw) {
    let top = 0
    let left = 0
    let totalW = 0
    let totalH = 0
    const keys = raw.reduce((result, rawRow) => {
      const row = []
      rawRow.forEach((current, index, array) => {
        if (typeof current === 'string') {
          const key = { code: current.split('\n') }
          if (index === 0 || typeof array[index - 1] === 'string') {
            // normal key not after a config object
            key.x = left
            key.y = top
            key.w = 1
            key.h = 1
          } else {
            // key after a config object
            const { x = 0, y = 0, w = 1, h = 1 } = array[index - 1]
            const { x2 = 0, y2 = 0, w2 = 0, h2 = 0 } = array[index - 1]
            top += y
            key.x = left + x
            key.y = top
            key.w = w
            key.h = h
            if (w2 && h2) {
              key.extra = true
              key.x2 = x2
              key.y2 = y2
              key.w2 = w2
              key.h2 = h2
            }
          }
          left = key.x + key.w
          totalW = Math.max(totalW, key.x + key.w)
          totalH = Math.max(totalH, key.y + key.h)
          row.push(key)
        }
      })
      top++
      left = 0
      return [...result, ...row]
    }, [])
    return { keys, w: totalW, h: totalH }
  }
  