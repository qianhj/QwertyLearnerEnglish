// 获取英语语音（处理浏览器异步加载问题）
export function getEnVoice() {
  return new Promise(resolve => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices.find(v => v.lang.startsWith('en')) ?? null)
      return
    }
    // Chrome 需要等 onvoiceschanged
    window.speechSynthesis.onvoiceschanged = () => {
      const v = window.speechSynthesis.getVoices()
      resolve(v.find(v => v.lang.startsWith('en')) ?? null)
    }
  })
}

export async function speakWord(word) {
  if (!window.speechSynthesis) {
    alert('您的浏览器不支持语音合成，请使用 Chrome 或 Edge')
    return
  }
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(word)
  utter.lang = 'en-US'
  utter.rate = 0.85
  const voice = await getEnVoice()
  if (voice) utter.voice = voice
  window.speechSynthesis.speak(utter)
}
