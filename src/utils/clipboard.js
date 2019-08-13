import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess (msg) {
  Vue.prototype.$message({
    message: 'successfully',
    type: 'success',
    duration: 1500
  })
}

function clipboardError () {
  Vue.prototype.$message({
    message: 'Copy error',
    type: 'success',
    duration: 1500
  })
}

export function copy (text, event) {
  const clipboard = new Clipboard(event.target, {
    action: () => 'copy',
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess('Copy')
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
export function cut (target) {
  let el = document.createElement('button')
  const clipboard = new Clipboard(el, {
    target: () => target
  })
  clipboard.on('success', () => {
    clipboardSuccess('Cut')
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  el.click()
}
export default { copy, cut }
