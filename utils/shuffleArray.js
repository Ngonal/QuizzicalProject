function shuffleArray(array) {
    let randomizedArray = array
    for (let i = array.length - 1; i > 0; i--) {
        const index = Math.floor((i + 1) * Math.random())
        const temp = randomizedArray[i]
        randomizedArray[i] = randomizedArray[index]
        randomizedArray[index] = temp
    }
    return randomizedArray
}

export default shuffleArray