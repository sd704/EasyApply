
const JobCard = ({ id, name, role, details, location, maxExp, minExp, maxsalary, minsalary }) => {
    return (
        <div className="jobcard">
            <div className="flexbox">
                <div>
                    <span className="jobicon">💼</span>
                </div>
                <div>
                    <h1>{name}</h1>
                    <h2>{role}</h2>
                    <h3>
                        {location && <span>{location}</span>}
                        {minExp && maxExp && <span> | Exp: {minExp}-{maxExp} years</span>}
                        {minExp && !maxExp && <span> | Exp: {minExp} years</span>}
                        {!minExp && maxExp && <span> | Exp: {maxExp} years</span>}
                    </h3>

                    {minsalary && maxsalary && <h3>Estimated Salary: ₹{minsalary}-{maxsalary} LPA</h3>}
                    {minsalary && !maxsalary && <h3>Estimated Salary: ₹{minsalary} LPA</h3>}
                    {!minsalary && maxsalary && <h3>Estimated Salary: ₹{maxsalary} LPA</h3>}
                </div>
            </div>
            <h2>Job Description:</h2>
            <p>{details}</p>
            <button className="applybutton">Apply</button>
        </div>
    )
}

export default JobCard;