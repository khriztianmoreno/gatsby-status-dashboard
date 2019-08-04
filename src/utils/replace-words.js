import formatters from './formatters'

function replaceWords(input) {
  let modified

  formatters.forEach(pair => {
    modified = input.split(pair[0]).join(pair[1])
  })

  return modified
}

export default replaceWords
