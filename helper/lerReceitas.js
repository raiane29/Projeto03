import fs from 'node:fs'

const lerDadosReceita = (callback) => {
    fs.readFile('receitas.json', "utf-8", (err, data)=>{
        if (err) {
            callback(err)
        }
        try {
            const receitas = JSON.parse(data)
            callback(null, receitas)
        } catch (error) {
            callback(error)
        }
    })
}
export default lerDadosReceita