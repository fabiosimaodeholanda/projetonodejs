const { query } = require("../config/database_conexao"); 



   const produtos =(req, res)=>{
        query("SELECT * FROM fseletro.produtos join valores on produtos.id_produtos =valores.id_valores;", function (error, result, field) {
         

            if(error){
                res.json(error); 
            }else{
                res.json(result); 
            };
        })
    }

    const comentarios =(req, res)=>{
        query("SELECT * FROM  comentarios", 
        function (error, result, field){           
            if(error){
                res.json(error); 
            }else{
                res.json(result); 
            };  
        })
    }



const insert =(req,res)=>{
     let dados=[]
     dados.push({
        nome:req.body.nome,
        msg:req.body.msg  
    })
    const sqlInsert ="INSERT INTO comentarios SET ?;"
    query( sqlInsert,dados,()=>{
        dados=[] 
    });     
    }
        


module.exports = {
    produtos,
    comentarios,
    insert
};