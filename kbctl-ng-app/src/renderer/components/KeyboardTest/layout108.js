const kleAnsi108 = [
  ['Esc', { x: 1 }, 'F1', 'F2', 'F3', 'F4', { x: 0.5 }, 'F5', 'F6', 'F7', 'F8', { x: 0.5 }, 'F9', 'F10', 'F11', 'F12', { x: 0.25 }, 'Print\nScreen', 'Scroll\nLock', 'Pause\nBreak', { x: 0.25 }, 'Calc', 'Mute', 'Vol-', 'Vol+'],
  [{ y: 0.25 }, '~\n`', '!\n1', '@\n2', '#\n3', '$\n4', '%\n5', '^\n6', '&\n7', '*\n8', '(\n9', ')\n0', '_\n-', '+\n=', { w: 2 }, 'Backspace', { x: 0.25 }, 'Insert', 'Home', 'PgUp', { x: 0.25 }, 'Num\nLock', '/', '*', '-'],
  [{ w: 1.5 }, 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{\n[', '}\n]', { w: 1.5 }, '|\n\\', { x: 0.25 }, 'Delete', 'End', 'PgDn', { x: 0.25 }, '7\nHome', '8\n↑', '9\nPgUp', { h: 2 }, '+'],
  [{ w: 1.75 }, 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':\n;', `"\n'`, { w: 2.25 }, 'Enter', { x: 3.5 }, '4\n←', '5\n', '6\n→'],
  [{ w: 2.25 }, 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<\n,', '>\n.', '?\n/', { w: 2.75 }, 'Shift', { x: 1.25 }, '↑', { x: 1.25 }, '1\nEnd', '2\n↓', '3\nPgDn', { h: 2 }, 'Enter'],
  [{ w: 1.25 }, 'Ctrl', { w: 1.25 }, 'Win', { w: 1.25 }, 'Alt', { w: 6.25 }, '', { w: 1.25 }, 'Alt', { w: 1.25 }, 'Win', { w: 1.25 }, 'Menu', { w: 1.25 }, 'Ctrl', { x: 0.25 }, '←', '↓', '→', { x: 0.25, w: 2 }, '0\nIns', '.\nDel']
]

function formatKle (raw) {
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
          key.top = top
          key.left = left
          key.width = 1
          key.height = 1
        } else {
          // key after a config object
          const { x = 0, y = 0, w = 1, h = 1 } = array[index - 1]
          top += y
          key.top = top
          key.left = left + x
          key.width = w
          key.height = h
        }
        left = key.left + key.width
        totalW = Math.max(totalW, key.left + key.width)
        totalH = Math.max(totalH, key.top + key.height)
        row.push(key)
      }
    })
    top++
    left = 0
    return [...result, ...row]
  }, [])
  return { keys, width: totalW, height: totalH }
}

export const ansi108 = formatKle(kleAnsi108)
