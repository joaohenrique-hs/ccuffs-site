function toggleColorMode(darkMode = false) {
  let cssConstants = document.querySelector(':root')

  bgColor = darkMode ? '#040008' : '#f4f4f4'
  htmlTagColor = darkMode ? '#9B51E0' : '#EF5DA8'
  nameColor = darkMode ? '#6FCF97' : '#27AE60'
  textColor = darkMode ? '#f4f4f4' : '#000000'

  cssConstants.style.setProperty('--bg-color', bgColor)
  cssConstants.style.setProperty('--html-tag-color', htmlTagColor)
  cssConstants.style.setProperty('--name-color', nameColor)
  cssConstants.style.setProperty('--text-color', textColor)

  document.getElementById('themeButton').setAttribute("onclick", `toggleColorMode(!${darkMode})`);

  setTimeout(() => {
    document.getElementById('buttonImg').src = darkMode ?
      'public/icons/sun.png' : 'public/icons/moon.png'
  }, 1)
}
