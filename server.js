import {createServer} from 'node:http';
import fs from "node:fs"
import { request } from 'node:http';
import lerDadosReceita from './helper/lerReceitas';

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
            //impromir resul
            response.writeHead(200, {"Cotent-Type": "application/json"})
            response.end(JSON.stringify(receitas))
        })
    }else if(method === 'POST' && url === '/receitas') {
        
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