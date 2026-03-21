/**
 * 解析单个 Markdown 文件的表格内容
 * 输入格式: | ⭐ access | 访问；权限 | `access denied` 权限不足 |
 */
export function parseMarkdownFile(raw, filepath) {
  // 从路径提取分类名，例如 "00-通用基础"
  const match = filepath.match(/[/\\]([^/\\]+)\.md$/)
  const filename = match ? match[1] : filepath
  // 显示名：去掉数字前缀，如 "00-通用基础" → 显示原始名
  const category = filename

  const lines = raw.split('\n')
  const tableLines = lines.filter(l => l.trim().startsWith('|'))
  // 跳过 header 行 和 separator 行（含 ---）
  const dataLines = tableLines.filter(l => !l.includes('---') && !l.includes('英文单词'))

  return dataLines.map(line => {
    const cols = line.split('|').slice(1, -1).map(s => s.trim())
    if (cols.length < 2) return null
    const rawWord = cols[0] ?? ''
    const isHighFreq = rawWord.includes('⭐')
    const word = rawWord.replace(/⭐\s*/g, '').trim()
    const meaning = cols[1] ?? ''
    const scene = cols[2] ?? ''
    if (!word) return null
    return { word, isHighFreq, meaning, scene, category }
  }).filter(Boolean)
}

/**
 * 从分类名提取友好显示标签
 * "00-通用基础" → { num: "00", label: "通用基础" }
 */
export function parseCategoryLabel(category) {
  const m = category.match(/^(\d+)-(.+)$/)
  if (m) return { num: m[1], label: m[2] }
  return { num: '', label: category }
}
