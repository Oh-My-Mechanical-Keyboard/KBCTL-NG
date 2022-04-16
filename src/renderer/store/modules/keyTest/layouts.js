import kleTools from './kle-formatter'
import kleAnsi108 from './kle-json/ansi108.json'
import kleIso108 from './kle-json/iso108.json'

var ANSI = kleTools.formatKleJson(kleAnsi108)
var ISO  = kleTools.formatKleJson(kleIso108)

export default { ANSI, ISO }
