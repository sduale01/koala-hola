const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database:'Koala_Holla',
    host:'localhost',
    port: 5432,
    max:10,
    idleTimeoutMillis: 10000
});



// GET


// POST
koalaRouter.post('/',(req,res)=>{
    const queryText = `INSERT INTO "inventory" ("koala_name","koala_gender",
                       "koala_age","ready_to_transfer","koala_notes")
                       VALUES ($1,$2,$3,$4,$5);`;
    pool.query(queryText, [req.body.koala_name, req.body.koala_gender, 
                           req.body.koala_age, req.body.ready_to_transfer, 
                           req.body.koala_notes,]).then((result)=>{
                               res.sendStatus(201);
                           }).catch((error)=>{
                               console.log(error, 'in post');
                               res.sendStatus(500);
                           });
})


// PUT

koalaRouter.put('/update/:id', (req, res) => {
    const queryText = `UPDATE "inventory" SET "ready_to_transfer" = 'True'
                       WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error, 'in put');
        res.sendStatus(500);
    });
})



// DELETE

module.exports = koalaRouter;