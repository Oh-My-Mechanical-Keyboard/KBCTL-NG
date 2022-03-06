function getKeyCodeInfo(code) {
  return code.split('\n')
}

export function formatKleJson (raw) {
  let startX = Number.MAX_VALUE
  let startY = Number.MAX_VALUE
  let endX = 0
  let endY = 0

  let left = 0
  let top = 0

  let preR = 0
  let preRX = 0
  let preRy = 0

  /**通过颜色判断是什么类型的键
   * 可选值为3类
   * 字母 alpha：#cccccc
   * mod键 mod：#aaaaaa
   * 强调键（一般是esc和回车） accent：#777777
   */
  let preType = "alpha"
  const keys = raw.reduce((result, rawRow) => {
    const row = []
    rawRow.forEach((current, index, array) => {
      if (typeof current === 'string') {
        // 只有在string的时候才进行处理
        const key = { labels: current.split('\n'), code: 0x04 }
        // 行首的键为带有配置项的键的时候走后面的逻辑
        // 当这个键是一个普通键的时候利用上一行的值进行配置
        if (index === 0 || typeof array[index - 1] === 'string') {
          // normal key not after a config object
          key.x = left // 每行的x是固定的，只有一个，第一个按键时时对0的偏移，为0的时候缺省，不为0走非string的逻辑
          key.y = top  // y是上一行最后一个键的偏移值，每行只有一个，只有第一个值才进行配置，为1的时候缺省
          key.w = 1
          key.h = 1
          key.r = preR
          key.rx = preRX
          key.ry = preRy
          key.extra = false
          key.x2 = 0
          key.y2 = 0
          key.w2 = 0
          key.h2 = 0
          key.type = preType
        } else {
          // key after a config object
          const { x = 0, y = 0, w = 1, h = 1 } = array[index - 1]
          const { x2 = 0, y2 = 0, w2 = 0, h2 = 0 } = array[index - 1]
          const { r = 0, rx = 0, ry = 0} = array[index - 1]
          const { c = preType } = array[index - 1]
          console.log(c)
          // 记录当前键的左上角坐标,默认偏移值都是0
          key.x = left + x
          key.y = top + y
          key.w = w
          key.h = h
          if (w2 === 0 && h2 === 0) {
            key.extra = false //特殊键标记（大回车等）
          } else {
            key.extra = true //特殊键标记（大回车等）
          }

          key.x2 = x2
          key.y2 = y2
          key.w2 = w2
          key.h2 = h2
          
          // 进行按键类型判断
          if (c === "#aaaaaa" || c === "mod") {
            key.type = "mod"
          } else if (c === "#777777" || c === "accent") {
            key.type = "accent"
          } else {
            key.type = "alpha"
          }
        }
        //进行按键旋转（爱丽丝等异形键盘）
        // todo: rotate
        
        preType = key.type
        // 更新当前记录到的行最右端，作为下一个键的左上角坐标
        left = key.x + key.w
        // 更新当前行的高度坐标
        top = key.y
        // 更新整体布局的边框值
        startX = Math.min(startX, key.x)
        startY = Math.min(startY, key.y)
        endX = Math.max(endX, key.x + key.w)
        endY = Math.max(endY, key.y + key.h)
        row.push(key)
      }
    })
    top++ // 默认行下移一个单位
    left = 0 //默认每行起始的坐标为0
    return [...result, ...row]
  }, [])
  return { keys, ex: endX, ey: endY , sx: startX, sy: startY}
}
