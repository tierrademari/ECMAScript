const inputText = "If you're :) and you know it :clap your hands :clap :clap"

let replaced = inputText.replace(':)', '😀');
replaced = replaced.replaceAll(':clap', '👏🏻');
console.log(replaced);

//Same
const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))
