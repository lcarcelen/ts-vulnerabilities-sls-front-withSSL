import { TOGGLE_MENU, TOGGLE_DARK } from './mutation-types'

export default {
  [TOGGLE_MENU](state) {
    state.menu.active = !state.menu.active
  },
  [TOGGLE_DARK](state) {
    state.darkMode.active = !state.darkMode.active
  }
}
