const messages = [
    "Emanuel",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Valentina",
    "Laura",
    "Camila",
    "Andrea",
    "Juliana",
    "Oscar",
    "Carolina",
    "Paulina",
    "Diego",
    "Guillermo"
]

const randomMSg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMSg }