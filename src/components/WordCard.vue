<template>
  <div class="card" @click="$emit('click', word)">
    <!-- 词头 -->
    <div class="card-head">
      <span class="word" v-html="highlight(word.word, query)" />
      <span v-if="word.isHighFreq" class="star" title="高频核心词">⭐</span>
      <button class="speak-btn" @click.stop="speak" title="朗读">
        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
      </button>
    </div>

    <!-- 中文释义 -->
    <div class="meaning" v-html="highlight(word.meaning, query)" />

    <!-- 场景记忆 -->
    <div v-if="word.scene" class="scene" v-html="renderScene(word.scene)" />

    <!-- 点击提示 -->
    <div class="click-hint">点击翻译</div>
  </div>
</template>

<script setup>
const props = defineProps({ word: Object, query: String })
defineEmits(['click'])

function speak() {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(props.word.word)
  utter.lang = 'en-US'
  utter.rate = 0.9
  window.speechSynthesis.speak(utter)
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlight(text, query) {
  if (!query || !text) return escapeHtml(text ?? '')
  const safe = escapeHtml(text)
  const safeQ = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return safe.replace(new RegExp(safeQ, 'gi'), m => `<mark>${m}</mark>`)
}

function renderScene(scene) {
  const safe = escapeHtml(scene)
  return safe.replace(/`([^`]+)`/g, '<code>$1</code>')
}
</script>

<style scoped>
.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.15s, transform 0.1s;
  cursor: pointer;
  position: relative;
}

.card:hover {
  border-color: #3b82f6;
  transform: translateY(-1px);
}

.card:hover .click-hint {
  opacity: 1;
}

.card-head {
  display: flex;
  align-items: center;
  gap: 6px;
}

.word {
  font-size: 17px;
  font-weight: 700;
  color: #93c5fd;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  letter-spacing: 0.01em;
}

.star {
  font-size: 13px;
  line-height: 1;
}

.speak-btn {
  background: none;
  border: none;
  color: #475569;
  cursor: pointer;
  padding: 2px 3px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}
.card:hover .speak-btn { opacity: 1; }
.speak-btn:hover { color: #60a5fa; }

.meaning {
  font-size: 13px;
  color: #cbd5e1;
  line-height: 1.5;
}

.scene {
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
  border-top: 1px solid #334155;
  padding-top: 6px;
  margin-top: 2px;
}

:deep(code) {
  background: #0f172a;
  color: #34d399;
  border-radius: 4px;
  padding: 1px 5px;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 11px;
}

:deep(mark) {
  background: #854d0e;
  color: #fef3c7;
  border-radius: 3px;
  padding: 0 2px;
}

.click-hint {
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 10px;
  color: #3b82f6;
  opacity: 0;
  transition: opacity 0.15s;
  pointer-events: none;
}
</style>
