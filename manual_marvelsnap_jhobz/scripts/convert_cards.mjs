import fs from 'fs'

const convertCards = (from, to) => {
    const infile = fs.readFileSync(from, 'utf8')
    const cards = JSON.parse(infile)
    const items = cards.filter(({ collectible }) => collectible).map(({ name }) => ({ name, count: 1, category: ["Cards"], progression: true }))
    try {
        fs.writeFileSync('out.json', JSON.stringify(items))
        console.log('Successfully converted cards')
    } catch (e) {
        console.error('Something went wrong', e)
    }

    return 0
}

convertCards('../data/cards.json', 'out.json')