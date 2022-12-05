-- \l => list all db in postgresql
-- \c move inside a db

psql -U postgres (into the db)

CREATE DATABASE pernsearch;
-- CREATE TABLE permdata(
--     CASE_NUMBER SERIAL PRIMARY KEY,
--     JOB_TITLE VARCHAR(255),
--     WAGE_RATE VARCHAR(255),
--     WORKSITE_CITY VARCHAR(255),
--     WORKSITE_COUNTY VARCHAR(255),
--     WORKSITE_STATE VARCHAR(255)
-- );
-- ['case_number', 'case_status', 'job_title', 'employer_name', 'worksite_city', 'worksite_county', 'worksite_state', 'wage_rate']
CREATE TABLE LCA_Disclosure_Data_FY2022(
    CASE_NUMBER VARCHAR(255) PRIMARY KEY,
    CASE_STATUS VARCHAR(255),
    JOB_TITLE VARCHAR(255),
    EMPLOYER_NAME VARCHAR(255),
    WORKSITE_CITY VARCHAR(255),
    WORKSITE_COUNTY VARCHAR(255),
    WORKSITE_STATE VARCHAR(255),
    WAGE_RATE VARCHAR(255),
    YEAR VARCHAR(4)
);

SELECT LOWER(EMPLOYER_NAME) AS EMPLOYER_NAME
FROM LCA_Disclosure_Data_FY2022;

DROP TABLE lca_disclosure_data_fy2022_q3;

\COPY LCA_Disclosure_Data_FY2022 from '/Users/XuerongZhang/Desktop/file4.csv' DELIMITER ',' CSV HEADER;

SELECT *
FROM LCA_Disclosure_Data_FY2022
WHERE CASE_STATUS = 'Certified'
LIMIT 5;

-- copy a database
create table draftLCA as
select *
from lca_disclosure_data_fy2022
limit 10000




-- ADD NEW DATA
INSERT INTO lca_disclosure_data_fy2022
SELECT DISTINCT *
from newdata

SELECT *
FROM LCA_Disclosure_Data_FY2022_Q3
where DECISION_DATE
between '10/1/21'  and '11/1/21'