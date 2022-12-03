const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());// access req.body

//ROUTES//  CRUD
// CREATE A case
// app.post("/cases", async (req, res) => { // await
//     try {
//         // console.log(req.body);
//         const {JOB_TITLE, WAGE_RATE, WORKSITE_CITY, WORKSITE_COUNTY} = req.body;
        
//         const newCase = await pool.query(
//             "INSERT INTO permdata (JOB_TITLE, WAGE_RATE,WORKSITE_CITY, WORKSITE_COUNTY) VALUES($1, $2, $3, $4) RETURNING *", [JOB_TITLE, WAGE_RATE, WORKSITE_CITY, WORKSITE_COUNTY]
//         );
//         res.json(newCase.rows[0]);

//     } catch (error) {
//         console.error(error.message);
//     } 
// })

// GET ALL cases
// app.get("/allCases", async (req, res) => {
//     try {
//         // console.log(req.body);
//         // "SELECT * FROM LCA_Disclosure_Data_FY2022_Q3 LIMIT 5"
//         const allCases = await pool.query("SELECT * FROM LCA_Disclosure_Data_FY2022_Q3 LIMIT 5");
//         console.log(allCases.rows);
//         // res.json(allCases.rows);
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// GET a case

// GET SOME cases(search)
// params => http://localhost:5000/:id => req.params
/// query parameter => http://localhost:5000/?name = henry => req.query

// ['case_number', 'case_status', 'job_title', 'employer_name', 'worksite_city', 'worksite_county', 'worksite_state', 'wage_rate', 'year']
app.get("/cases", async (req, res) => {
    try {
        // res.json(req.query);
        const {title, company, city, county, state, year, limit} = req.query;
        
        const filteredCases = await pool.query("SELECT * FROM LCA_Disclosure_Data_FY2022 WHERE JOB_TITLE ILIKE $1 AND EMPLOYER_NAME ILIKE $2 AND WORKSITE_CITY LIKE $3 AND WORKSITE_COUNTY ILIKE $4 AND WORKSITE_STATE ILIKE $5 AND YEAR ILIKE $6 ORDER BY CASE_NUMBER LIMIT $7", [`%${title}%`, `%${company}%`, `%${city}%`, `%${county}%`, `%${state}%`, `%${year}%`, `${limit}`]);
                                                                       
        
        // console.log(someCases.rows);
        res.json(filteredCases.rows);
    } catch (error) {
        console.log(error.message);
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000");
});