
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
                    {location && minExp && maxExp && <h3>{location} | Exp: {minExp}-{maxExp} years</h3>}
                    {location && !minExp && !maxExp && <h3>{location}</h3>}
                    {!location && minExp && maxExp && <h3>Exp: {minExp}-{maxExp} years</h3>}
                    {location && !minExp && maxExp && <h3>{location} | Exp: {maxExp} years</h3>}
                    {location && minExp && !maxExp && <h3>{location} | Exp: {minExp} years</h3>}
                    {minsalary && maxsalary && <h3>Estimated Salary: ₹{minsalary}-{maxsalary} LPA</h3>}
                    {minsalary && !maxsalary && <h3>Estimated Salary: ₹{minsalary} LPA</h3>}
                    {!minsalary && maxsalary && <h3>Estimated Salary: ₹{maxsalary} LPA</h3>}
                </div>
            </div>
            <h2>Job Description:</h2>
            <p>{details}</p>
        </div>
    )
}

export default JobCard;