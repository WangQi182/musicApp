// 所有状态
import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false, // 播放暂停
  fullScreen: false, // 是否全屏
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}
export default state