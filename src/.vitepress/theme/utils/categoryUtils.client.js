/**
 * 从URL获取当前分类参数
 * @returns {string|null} 分类参数值或null
 */
export function getCurrentCategory() {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('category')
}

/**
 * 更新URL中的分类参数但不刷新页面
 * @param {string} category 分类名称
 */
export function updateCategoryInUrl(category) {
  const url = new URL(window.location.href)

  if (category === 'all') {
    // 如果选择"all"，则移除category参数
    url.searchParams.delete('category')
  } else {
    // 否则设置category参数
    url.searchParams.set('category', category)
  }

  window.history.pushState({}, '', url)
}

/**
 * 导航到指定分类的首页
 * @param {string} category 分类名称
 */
export function navigateToCategory(category) {
  if (category === 'all') {
    window.location.href = '/'
  } else {
    window.location.href = `/?category=${category}`
  }
}
