import React, { useState, useEffect } from "react";
// import TitleInputBox from "./TitleInputBox";

const SearchCases = () => {
    // title, company, city, county, state
    // const [status, setStatus] = useState("new");
    // const searchData = { title: "" };
    const [titleSearch, setTitleSearch] = useState("");
    const [companySearch, setCompanySearch] = useState("");
    const [citySearch, setCitySearch] = useState("");
    const [countySearch, setCountySearch] = useState("");
    const [stateSearch, setStateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState("");
    const [limit, setLimit] = useState(20);
    const [cases, setCases] = useState([]);
    const server_url = "https://h1b-salary-data-api2.onrender.com";
    // const server_url = "http://localhost:5000";

    // useEffect(() => {
    //     // e.preventDefault();
    //     if (
    //         titleSearch !== "" ||
    //         companySearch !== "" ||
    //         citySearch !== "" ||
    //         countySearch !== "" ||
    //         stateSearch !== "" ||
    //         yearSearch !== ""
    //     ) {
    //         fetch(
    //             `${server_url}/cases/?title=${titleSearch}&company=${companySearch}&city=${citySearch}&county=${countySearch}&state=${stateSearch}&year=${yearSearch}&limit=${limit}`
    //         )
    //             .then((res) => res.json())
    //             .then((data) => setCases(data));
    //         console.log("Fetch Done");
    //     }
    // }, [
    //     titleSearch,
    //     companySearch,
    //     citySearch,
    //     countySearch,
    //     stateSearch,
    //     yearSearch,
    //     limit,
    // ]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${server_url}/cases/?title=${titleSearch}&company=${companySearch}&city=${citySearch}&county=${countySearch}&state=${stateSearch}&year=${yearSearch}&limit=${limit}`
            );
            const parsedResponse = await response.json();
            //   console.log(parsedResponse);
            setCases(parsedResponse);
            // setStatus("done");
            // setLimit(0);
            console.log("Fetch Done");
        } catch (error) {
            console.log(error.message);
        }
    };

    // const load200More = async (e) => {
    //     // e.preventDefault();
    //     setLimit(limit + 200);
    // };

    // const load1000More = () => setLimit(limit + 1000);

    return (
        <>
            <div className="container mb-5">
                <h1 className="text-center mt-5 mb-4">H1B Data</h1>
                <form action="" className="container" onSubmit={onSubmitForm}>
                    <div className="form-row row mb-1">
                        <div className="form-group col-lg-6">
                            {/* <TitleInputBox data={searchData} /> */}
                            <input
                                list="topTitle"
                                name="title"
                                value={titleSearch}
                                type="text"
                                id="title"
                                placeholder="Enter title..."
                                className="form-control"
                                onChange={(e) => {
                                    setTitleSearch(e.target.value);
                                    setLimit(20);
                                }}
                            />
                            <datalist id="topTitle">
                                <option value="software engineer" />
                                <option value="software developer" />
                                <option value="manager" />
                                <option value="architect" />
                                <option value="assistant professor" />
                                <option value="analyst" />
                                <option value="associate" />
                                <option value="systems analyst" />
                                <option value="data engineer" />
                                <option value="software development engineer" />
                                <option value="data scientist" />
                            </datalist>
                        </div>
                        <div className="form-group col-lg-6">
                            <input
                                list="topCompany"
                                name="company"
                                value={companySearch}
                                type="text"
                                id="company"
                                placeholder="Enter company..."
                                className="form-control"
                                onChange={(e) => {
                                    setCompanySearch(e.target.value);
                                    setLimit(20);
                                }}
                            />
                            <datalist id="topCompany">
                                <option value="Amazon.com Services LLC" />
                                <option value="Cognizant Technology Solutions US Corp" />
                                <option value="Microsoft Corporation" />
                                <option value="Tata Consultancy Services Limited" />
                                <option value="Ernst & Young U.S. LLP" />
                                <option value="Infosys Limited" />
                                <option value="Intel Corporation" />
                                <option value="Infosys Limited" />
                                <option value="Deloitte Consulting LLP" />
                                <option value="Meta Platforms, Inc." />
                                <option value="Apple Inc." />
                                <option value="Amazon Web Services, Inc." />
                                <option value="Capgemini America Inc" />
                                <option value="Wal-mart Associates, Inc." />
                                <option value="Accenture LLP" />
                                <option value="Wipro Limited" />
                                <option value="Qualcomm Technologies, Inc." />
                                <option value="Cisco Systems, Inc." />
                                <option value="Ibm Corporation" />
                                <option value="JPmorgan Chase & Co." />
                            </datalist>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-lg-3">
                            <input
                                list="topCity"
                                name="city"
                                value={citySearch}
                                type="text"
                                id="city"
                                placeholder="Enter city..."
                                className="form-control"
                                onChange={(e) => {
                                    setCitySearch(e.target.value);
                                    setLimit(20);
                                }}
                            />
                            <datalist id="topCity">
                                <option value="New York" />
                                <option value="Seattle" />
                                <option value="San Francisco" />
                                <option value="Austin" />
                                <option value="Sunnyvale" />
                                <option value="San Jose" />
                                <option value="Chicago" />
                                <option value="Plano" />
                                <option value="Irving" />
                                <option value="Atlanta" />
                            </datalist>
                        </div>
                        <div className="form-group col-lg-3">
                            <input
                                list="topCounty"
                                name="county"
                                value={countySearch}
                                type="text"
                                id="county"
                                placeholder="Enter county..."
                                className="form-control"
                                onChange={(e) => {
                                    setCountySearch(e.target.value);
                                    setLimit(20);
                                }}
                            />
                            <datalist id="topCounty">
                                <option value="Santa Clara" />
                                <option value="King" />
                                <option value="New York" />
                                <option value="Dallas" />
                                <option value="Cook" />
                                <option value="San Francisco" />
                                <option value="Collin" />
                                <option value="Fulton" />
                                <option value="Travis" />
                                <option value="Los Angeles" />
                            </datalist>
                        </div>
                        <div className="form-group col-lg-3">
                            <select
                                name="state"
                                value={stateSearch}
                                id="state"
                                placeholder="Select state"
                                className="form-control form-select"
                                onChange={(e) => {
                                    setStateSearch(e.target.value);
                                    setLimit(20);
                                }}
                            >
                                <option selected>Choose state...</option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-3">
                            <select
                                name="year"
                                value={yearSearch}
                                id="year"
                                className="form-control form-select"
                                onChange={(e) => setYearSearch(e.target.value)}
                            >
                                <option selected>Choose year...</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-success ">
                            Search
                        </button>
                    </div>
                </form>

                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th className="col-3">Title</th>
                            <th className="col-3">Company</th>
                            <th className="col-1 text-end">Salary</th>
                            <th className="col text-end">City</th>
                            <th className="col text-end">County</th>
                            <th className="col text-end">State</th>
                            <th className="col text-end">Year</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* title, company, salary, city, county, state */}
                        {cases.map((eachCase) => (
                            <tr key={eachCase.case_number}>
                                <td>{eachCase.job_title}</td>
                                <td>{eachCase.employer_name}</td>
                                <td className="text-end">
                                    {eachCase.wage_rate.slice(
                                        0,
                                        eachCase.wage_rate.length - 4
                                    )}
                                </td>
                                <td className="text-end">
                                    {eachCase.worksite_city}
                                </td>
                                <td className="text-end">
                                    {eachCase.worksite_county}
                                </td>
                                <td className="text-end">
                                    {eachCase.worksite_state}
                                </td>
                                <td className="text-end">{eachCase.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="container text-center row">
                    <div className="col">
                        {cases.length > 0 && cases.length === limit && (
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={load200More}
                            >
                                Load More
                            </button>
                        )}
                    </div>
                    <div className="col">
                        {cases.length > 0 && cases.length === limit && (
                            <button
                                type="button"
                                className="btn btn-success ml-3"
                                onClick={load1000More}
                            >
                                Load 1000 More
                            </button>
                        )}
                    </div> 
                </div> */}
                {/* {status === "done" && cases.length === 0 && (<p>No Result</p>)} */}
            </div>
        </>
    );
};

export default SearchCases;
