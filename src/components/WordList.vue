<template>
  <div class="word-list-wrap">
    <div v-if="words.length === 0" class="empty">
      没有找到匹配的词汇
    </div>
    <div v-else class="word-grid">
      <WordCard v-for="(w, i) in words" :key="i" :word="w" :query="query" @click="$emit('select', w)" />
    </div>
  </div>
</template>

<script setup>
import WordCard from './WordCard.vue'
defineProps({ words: Array, query: String })
defineEmits(['select'])
</script>

<style scoped>
.word-list-wrap {
  padding: 20px 24px;
  flex: 1;
}

.word-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
}

.empty {
  text-align: center;
  color: #475569;
  padding: 80px 0;
  font-size: 15px;
}
</style>
