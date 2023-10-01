import fs from 'fs'

const convertCards = (from, to) => {
    const infile = fs.readFileSync(from, 'utf8')
    const cards = JSON.parse(infile)
    const items = cards.filter(({ series, collectible }) => collectible && series).map(({ name, cost }) => (
        {
            name,
            count: 1,
            category: ["Cards", `${(cost <= 1 ? "0-1" : (cost >= 6 ? "6+" : cost))} Cost Cards`],
            progression: true
        }))
    try {
        fs.writeFileSync('out.json', JSON.stringify(items))
        console.log('Successfully converted cards')
    } catch (e) {
        console.error('Something went wrong', e)
    }

    return 0
}

convertCards('../data/cards.json', 'out.json')