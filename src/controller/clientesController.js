const controller ={};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM clientes', (err,clientes)=>{
            if (err) {
                res.json(err);
            }
            //console.log(clientes) ;
            res.render('clientes',{
                data: clientes
            })
        });
    });
};

controller.guardarCliente=(req,res)=>{
    const data= req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO clientes SET ?',[data],(err, rows)=>{
            res.redirect('/');
        });
    });
};

controller.verCliente=(req,res)=>{
    const {id}= req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM clientes WHERE id= ?',[id],(err, rows)=>{
            res.render('editar_cliente',{
                data: rows[0]  //como estoy recibiendo un arreglo selecciono el primer y unico valor
            });
        });
    });
}

controller.edtiarCliente=(req,res)=>{
    const {id}= req.params;
    const nuevoCliente=req.body; //aca tengo todos el cuerpo del formulario
    req.getConnection((err,conn)=>{
        conn.query('UPDATE clientes SET ? WHERE id= ?',[nuevoCliente,id],(err, rows)=>{
            res.redirect('/');
        });
    });
}

controller.eliminarCliente=(req,res)=>{
    //const id= req.params.id; //otra manera de hacerlo
    const {id}= req.params;

    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM clientes WHERE id= ?',[id],(err, rows)=>{
            res.redirect('/');
        });
    });

};


module.exports=controller;