<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <CategoryNav
      :categories="categories"
      :selected="selectedCategory"
      :counts="categoryCounts"
      @select="selectedCategory = $event"
    />

    <!-- 右侧主体 -->
    <div class="main">
      <!-- 顶栏 -->
      <header class="topbar">
        <div class="title-area">
          <h1>程序员英文词汇速查</h1>
          <span class="total-count">{{ filteredWords.length }} 词</span>
        </div>
        <div class="controls">
          <div class="search-wrap">
            <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
            </svg>
            <input
              v-model="searchQuery"
              class="search"
              type="text"
              placeholder="搜索英文词或中文释义..."
            />
            <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">×</button>
          </div>
          <button
            class="star-btn"
            :class="{ active: showStarOnly }"
            @click="showStarOnly = !showStarOnly"
          >
            ⭐ 仅高频
          </button>
        </div>
      </header>

      <!-- 词汇列表 -->
      <WordList :words="filteredWords" :query="searchQuery" @select="selectedWord = $event" />
    </div>

    <!-- 翻译弹窗 -->
    <WordModal
      v-if="selectedWord"
      :word="selectedWord"
      @close="selectedWord = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CategoryNav from './components/CategoryNav.vue'
import WordList from './components/WordList.vue'
import WordModal from './components/WordModal.vue'
import { parseMarkdownFile, parseCategoryLabel } from './utils/parseMarkdown.js'

// 用 import.meta.glob 读取所有 md 文件
const modules = import.meta.glob('../words/*.md', { query: '?raw', import: 'default', eager: true })

// 解析成扁平词汇数组
const allWords = []
for (const [path, raw] of Object.entries(modules)) {
  allWords.push(...parseMarkdownFile(raw, path))
}

// 分类列表（保持文件顺序）
const categories = ['全部', ...Object.keys(modules).map(path => {
  const m = path.match(/[/\\]([^/\\]+)\.md$/)
  return m ? m[1] : path
})]

// 各分类词数
const categoryCounts = computed(() => {
  const counts = { '全部': allWords.length }
  for (const w of allWords) {
    counts[w.category] = (counts[w.category] ?? 0) + 1
  }
  return counts
})

const selectedCategory = ref('全部')
const searchQuery = ref('')
const showStarOnly = ref(false)
const selectedWord = ref(null)

const filteredWords = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  return allWords.filter(w => {
    if (selectedCategory.value !== '全部' && w.category !== selectedCategory.value) return false
    if (showStarOnly.value && !w.isHighFreq) return false
    if (q && !w.word.toLowerCase().includes(q) && !w.meaning.includes(q)) return false
    return true
  })
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0f172a;
  color: #e2e8f0;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
}

.layout {
  display: flex;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* 顶栏 */
.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.title-area {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.title-area h1 {
  font-size: 18px;
  font-weight: 700;
  color: #f8fafc;
  white-space: nowrap;
}

.total-count {
  font-size: 13px;
  color: #64748b;
  white-space: nowrap;
}

.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  color: #64748b;
  pointer-events: none;
}

.search {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  padding: 7px 32px 7px 34px;
  width: 260px;
  outline: none;
  transition: border-color 0.15s;
}

.search:focus { border-color: #3b82f6; }
.search::placeholder { color: #475569; }

.clear-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0 2px;
}
.clear-btn:hover { color: #e2e8f0; }

.star-btn {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #94a3b8;
  cursor: pointer;
  font-size: 13px;
  padding: 7px 14px;
  white-space: nowrap;
  transition: all 0.15s;
}
.star-btn:hover { border-color: #f59e0b; color: #f59e0b; }
.star-btn.active { background: #451a03; border-color: #f59e0b; color: #fbbf24; }
</style>
