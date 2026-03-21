<template>
  <Teleport to="body">
    <div class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal">
        <!-- 关闭按钮 -->
        <button class="close-btn" @click="$emit('close')">×</button>

        <!-- 词头 -->
        <div class="modal-head">
          <span class="modal-word">{{ word.word }}</span>
          <button class="speak-btn" :class="{ speaking }" @click="speak" title="朗读发音">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <span v-if="word.isHighFreq" class="star">⭐ 高频</span>
          <span class="category-badge">{{ categoryLabel }}</span>
        </div>

        <!-- 本库释义 -->
        <div class="section">
          <div class="section-label">词库释义</div>
          <div class="meaning">{{ word.meaning }}</div>
        </div>

        <!-- 场景记忆 -->
        <div v-if="word.scene" class="section">
          <div class="section-label">场景记忆</div>
          <div class="scene" v-html="renderScene(word.scene)" />
        </div>

        <!-- 在线翻译 -->
        <div class="section translate-section">
          <div class="section-label">在线翻译
            <span class="api-tag">MyMemory</span>
          </div>

          <div class="translate-input-row">
            <input
              v-model="customQuery"
              class="translate-input"
              placeholder="可修改要翻译的词..."
              @keydown.enter="translate"
            />
            <button class="translate-btn" :disabled="loading" @click="translate">
              <span v-if="loading" class="spinner" />
              <span v-else>翻译</span>
            </button>
          </div>

          <div v-if="result" class="translate-result">
            <span class="result-text">{{ result }}</span>
          </div>
          <div v-if="error" class="translate-error">{{ error }}</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { parseCategoryLabel } from '../utils/parseMarkdown.js'

const props = defineProps({ word: Object })
defineEmits(['close'])

const customQuery = ref(props.word.word)
const result = ref('')
const error = ref('')
const loading = ref(false)
const speaking = ref(false)

// 切换词时重置
watch(() => props.word, w => {
  customQuery.value = w.word
  result.value = ''
  error.value = ''
})

function speak() {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(props.word.word)
  utter.lang = 'en-US'
  utter.rate = 0.9
  utter.onstart = () => { speaking.value = true }
  utter.onend = () => { speaking.value = false }
  utter.onerror = () => { speaking.value = false }
  window.speechSynthesis.speak(utter)
}

const categoryLabel = computed(() => {
  if (!props.word.category) return ''
  const { label } = parseCategoryLabel(props.word.category)
  return label
})

async function translate() {
  const q = customQuery.value.trim()
  if (!q) return
  loading.value = true
  result.value = ''
  error.value = ''
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|zh`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (data.responseStatus === 200) {
      result.value = data.responseData.translatedText
    } else {
      error.value = data.responseDetails || '翻译失败'
    }
  } catch (e) {
    error.value = '网络请求失败，请检查网络连接'
  } finally {
    loading.value = false
  }
}

function escapeHtml(str) {
  return (str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderScene(scene) {
  return escapeHtml(scene).replace(/`([^`]+)`/g, '<code>$1</code>')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(2px);
}

.modal {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 14px;
  padding: 28px 28px 24px;
  width: min(480px, 92vw);
  position: relative;
  box-shadow: 0 25px 60px rgba(0,0,0,0.5);
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  color: #64748b;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
  transition: color 0.15s;
}
.close-btn:hover { color: #e2e8f0; }

.modal-head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.modal-word {
  font-size: 28px;
  font-weight: 800;
  color: #93c5fd;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  letter-spacing: 0.02em;
}

.speak-btn {
  background: #1e3a5f;
  border: 1px solid #1d4ed8;
  border-radius: 8px;
  color: #60a5fa;
  cursor: pointer;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  transition: all 0.15s;
}
.speak-btn:hover { background: #1d4ed8; color: #fff; }
.speak-btn.speaking { background: #1d4ed8; color: #fff; animation: pulse 0.8s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

.star {
  font-size: 12px;
  background: #451a03;
  color: #fbbf24;
  border-radius: 6px;
  padding: 2px 8px;
}

.category-badge {
  font-size: 12px;
  background: #1e3a5f;
  color: #60a5fa;
  border-radius: 6px;
  padding: 2px 8px;
}

.section {
  margin-bottom: 18px;
}

.section-label {
  font-size: 11px;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.api-tag {
  font-size: 10px;
  background: #0f2744;
  color: #38bdf8;
  border-radius: 4px;
  padding: 1px 6px;
  text-transform: none;
  letter-spacing: 0;
}

.meaning {
  font-size: 16px;
  color: #e2e8f0;
  line-height: 1.6;
}

.scene {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
  background: #0f172a;
  border-radius: 8px;
  padding: 10px 14px;
}

:deep(code) {
  color: #34d399;
  background: #1e293b;
  border-radius: 4px;
  padding: 1px 5px;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 12px;
}

/* 翻译区 */
.translate-section { margin-bottom: 0; }

.translate-input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.translate-input {
  flex: 1;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  padding: 8px 12px;
  outline: none;
  transition: border-color 0.15s;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
}
.translate-input:focus { border-color: #3b82f6; }

.translate-btn {
  background: #1d4ed8;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 18px;
  white-space: nowrap;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 70px;
  justify-content: center;
}
.translate-btn:hover:not(:disabled) { background: #2563eb; }
.translate-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.translate-result {
  background: #0f172a;
  border: 1px solid #1e3a5f;
  border-radius: 8px;
  padding: 12px 14px;
}
.result-text {
  font-size: 18px;
  color: #34d399;
  font-weight: 600;
}

.translate-error {
  color: #f87171;
  font-size: 13px;
  padding: 6px 0;
}

/* 加载动画 */
.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
