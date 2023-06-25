
const Template3 = (props) => {

    const {
        name,
        email,
        experience,
        language1,
        language2,
        skill1,
        skill2,
        organisation,
        summary,
        school,
        college,
    } = props.values

    return (
        <div className="template3" id="report">
                <div className="resumeSection1">
                    <img src="https://media.licdn.com/dms/image/C4D03AQHLP6gI90jGEQ/profile-displayphoto-shrink_200_200/0/1658116787038?e=1692835200&v=beta&t=t7FEtrdEvLT1CcxueC_rJA7eRJL61swj5IXWBuohdOE" alt="#" />

                    <h1>Info</h1>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>

                    <h1>Language</h1>
                    <p>Language-1 : {language1}</p>
                    <p>Language-2 : {language2}</p>

                    <h1>Organisation</h1>
                    <p>Organisation : {organisation}</p>
                </div>

                <div className="resumeSection2">
                    <h1>Summary</h1>
                    <p>Summary : {summary}</p>

                    <h1>Skills</h1>
                    <p>Skill-1 : {skill1}</p>
                    <p>Skill-2 : {skill2}</p>

                    <h1>Education</h1>
                    <p>School : {school}</p>
                    <p>College : {college}</p>

                    <h1>Experience</h1>
                    <p>Experience : {experience}</p>
                </div>
        </div>
    );
}

export default Template3;