const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'shoe_store',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "shoes";`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost")
                VALUES ($1, $2);`, [shoe.name, shoe.cost])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error with SQL INSERT', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const shoe = req.body;
    pool.query(`UPDATE "shoes" 
    SET "name" = ($1), 
    "cost" = ($2) 
    WHERE "id" = ($3);`, [shoe.name, shoe.cost, shoe.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error with SQL UPDATE', error);
        res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
    const shoe = req.query.id;
    pool.query(`DELETE FROM "shoes" WHERE "id" = ${shoe}`)
    .then(() => {
        res.send(shoe.rows);

    })
    .catch((error) => {
        console.log('error with SQL DELETE', error);
        res.sendStatus(500);
    })
})

module.exports = router;