export const Focus = () => {
  return (
    <div className="focus">
      <span id="focus-name"></span>
    </div>
  )
}

export function carInFocus(t) {
  const focusName = document.getElementById('focus-name')
  let focus = t.target

  if (focus.innerText !== '-') {
    focus.style.cursor = 'pointer'
    focus.addEventListener('click', () => {
      if (focus.innerText !== '-' && focus.className !== 'car-name') {
        focusName.innerText = `Выбран автомобиль ${focus.parentNode.parentNode.children[0].innerText} ${focus.innerText} года выпуска`
      } else if (focus.className === 'car-name') {
        focusName.innerText = `Выбран автомобиль ${focus.innerText}`
      }
    })
  } else {
    focus.addEventListener('click', () => {
      focusName.innerText = ''
    })
  }
}
