import {createServer} from 'node:http';
import fs from "node:fs"
//import { request } from 'node:http';
import { v4 as uuidv4 } from 'uuid';
import lerDadosReceita from './helper/lerReceitas.js';

const PORT = 3333

const server = createServer((request, response) => {
    const {url, method} = request
       //#01 add rota get receita
    if (method === 'GET' && url === '/receitas') {
        lerDadosReceita((err, receitas)=> {
            if (err) {
                response.writeHead(500, {"Cotent-Type": "application/json"})
                response.end(JSON.stringify({message: 'Erro ao ler dados'}))
                return
            }
            //imprimir resul
            response.writeHead(200, {"Cotent-Type": "application/json"})
            response.end(JSON.stringify(receitas))
            return
        })
    }else if(method === 'POST' && url === '/receitas') {
        
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString()
        })  
        
        request.on('end', ()=>{
            const novaReceita  = JSON.parse(body)
            lerDadosReceita((err, receitas)=> { 
                if (err) {
                    response.writeHead(500, {"Cotent-Type": "application/json"})
                    response.end(JSON.stringify({message: 'Erro ao ler dados'}))
                    return
                }
            console.log(novaReceita.categoria);
             novaReceita.id = uuidv4()
             receitas.push(novaReceita)

             fs.writeFile("receitas.json", JSON.stringify(receitas, null, 2), (err)=>{
                if (err) {
                    response.writeHead(500, {"Cotent-Type": "application/json"})
                    response.end(JSON.stringify({message: 'Erro ao cadastrar receitas'}))
                    return
                }
                response.writeHead(201,{'Content-Type':'application/json'})
                response.end(JSON.stringify(novaReceita))
             })
        
        })

        })

    }else if(method === 'GET' && url.startsWith('/receitas/')) {
        
    }else if(method === 'PUT' && url.startsWith('/receitas/')) {
        
    }else if(method === 'DELETE' && url.startsWith('/receitas/')) {
        
    }else if(method === 'GET' && url.startsWith('/categorias/')) {
        
    }else if(method === 'GET' && url.startsWith('//busca/')) {
        
    }else if(method === 'GET' && url.startsWith('/ingredientes/')) {
        
    }else{
    
        response.writeHead(404, {'Content-Type' : 'application/json'})
        response.end(JSON.stringify({message: 'Página não encontrada'}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on port http://locallhost:${PORT}`);
})