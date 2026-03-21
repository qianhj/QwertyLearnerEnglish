<template>
  <nav class="sidebar">
    <div class="sidebar-header">分类</div>
    <ul>
      <li
        v-for="cat in categories"
        :key="cat"
        class="nav-item"
        :class="{ active: selected === cat }"
        @click="$emit('select', cat)"
      >
        <span class="nav-label">{{ label(cat) }}</span>
        <span class="nav-count">{{ counts[cat] ?? 0 }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { parseCategoryLabel } from '../utils/parseMarkdown.js'

const props = defineProps({
  categories: Array,
  selected: String,
  counts: Object,
})
defineEmits(['select'])

function label(cat) {
  if (cat === '全部') return '全部'
  const { label } = parseCategoryLabel(cat)
  return label
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  min-width: 200px;
  background: #0d1424;
  border-right: 1px solid #1e293b;
  padding: 16px 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  font-size: 11px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 16px 10px;
}

ul { list-style: none; }

.nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 0;
  color: #94a3b8;
  font-size: 14px;
  transition: background 0.1s, color 0.1s;
  user-select: none;
}

.nav-item:hover {
  background: #1e293b;
  color: #e2e8f0;
}

.nav-item.active {
  background: #1e3a5f;
  color: #60a5fa;
  font-weight: 500;
}

.nav-count {
  font-size: 12px;
  color: #475569;
  background: #1e293b;
  border-radius: 10px;
  padding: 1px 7px;
  min-width: 24px;
  text-align: center;
}

.nav-item.active .nav-count {
  background: #1d4ed8;
  color: #bfdbfe;
}
</style>
