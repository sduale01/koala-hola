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
koalaRouter.get('/',(req,res)=>{
    const queryText = `SELECT * FROM "inventory" ORDER BY "id" ASC;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error, 'in get');
        res.sendStatus(500);
    });
})

// POST
koalaRouter.post('/',(req,res)=>{
    const queryText = `INSERT INTO "inventory" ("koala_name","koala_age",
                       "koala_gender", "ready_to_transfer", "koala_notes")
                       VALUES ($1,$2,$3,$4,$5);`;
    pool.query(queryText, [req.body.koala_name, req.body.koala_age, 
                           req.body.koala_gender, req.body.ready_to_transfer, 
                           req.body.koala_notes,]).then((result)=>{
                               res.sendStatus(201);
                           }).catch((error)=>{
                               console.log(error, 'in post');
                               res.sendStatus(500);
                           });
})


// PUT
koalaRouter.put('/update/:id', (req, res) => {
    const queryText = `UPDATE "inventory" SET "ready_to_transfer" = 'true'
                       WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error, 'in put');
        res.sendStatus(500);
    });
})





// DELETE
koalaRouter.delete('/:id', (req,res) => {
    const queryText = 'DELETE FROM "inventory" WHERE "id" = $1;';
    pool.query(queryText,[req.params.id]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in DELETE ', error);
        res.sendStatus(500);
        
    });
});

module.exports = koalaRouter;