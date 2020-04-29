/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const selected = (id) => {
  const leftTabs = document.getElementsByClassName('leftTabs')
  const rightTabs = document.getElementsByClassName('rightTabs')

  for (let i = 0; i < leftTabs.length; i++) {
    leftTabs[i].id === id
      ? leftTabs[i].classList.add('selected')
      : leftTabs[i].classList.remove('selected')
  }
  for (let i = 0; i < rightTabs.length; i++) {
    rightTabs[i].id === id
      ? rightTabs[i].classList.remove('hidden')
      : rightTabs[i].classList.add('hidden')
  }
}
