export function getRandomEmoji() {
    const emojis = ["😎","🔥","🌟","✨","🎉","🍀","🌸"];
    return emojis[Math.floor(Math.random() * emojis.length)];
}
