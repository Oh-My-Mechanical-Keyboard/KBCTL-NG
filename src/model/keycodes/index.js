import basicKeycodes from './basic'
import hyperKeycodes from './hyper'
import mediaKeycodes from './media'
import layerKeycodes from './layer'
import lightingKeycodes from './lighting'
import macroKeycodes from './macro'
import bluetoothKeycodes from './bluetooth'

const keycodesList = [
  ...basicKeycodes,
  ...hyperKeycodes,
  ...mediaKeycodes,
  ...layerKeycodes,
  ...lightingKeycodes,
  ...macroKeycodes,
  ...bluetoothKeycodes
]

const allKeycodes = [
  basicKeycodes,
  hyperKeycodes,
  mediaKeycodes,
  layerKeycodes,
  lightingKeycodes,
  macroKeycodes,
  bluetoothKeycodes
]

const keycodeTypeName = [
  'Basic',
  'Hyper',
  'Media',
  'Layer',
  'Lighting',
  'Macro',
  'Connection'
]

export default {keycodeTypeName, allKeycodes, keycodesList}
