import "../../Assets/Styles/template.scss"

const Template1 = (props) => {

   

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
        phone,
    } = props.values

    return (
        <div className="template1">
            <div className="imgSection">
                <img src="https://media.licdn.com/dms/image/C4D03AQHLP6gI90jGEQ/profile-displayphoto-shrink_800_800/0/1658116787038?e=1692835200&v=beta&t=-NJdyDIHXHvKDO4-bvo-TdsvYHSKsPNE_vxNl5Ha_90" alt="#" />

                <div>
                    <h4>Profile</h4>
                    <p>I consider myself a resposible and orderly person</p>
                </div>

                <div className="contact">
                    <h4>Contact Me</h4>
                    <p>{phone}<br />{email}</p>
                </div>

                <div className="contact">
                    <h4>Organisation</h4>
                    <p>{organisation}</p>
                </div>
            </div>

            <div className="infoSection">
                <div className="nameSection">
                    <h1>{name}</h1>
                    <p>Student</p>
                    <p>{summary}</p>
                </div>

                <div className="section">
                    <h2>Education</h2>
                    <p>{school}</p>
                    <p>{college}</p>
                </div>

                <div className="section">
                    <h2>Language</h2>
                    <p>{language1}</p>
                    <p>{language2}</p>
                </div>

                <div className="section">
                    <h2>Skills</h2>
                    <p>{skill1}</p>
                    <p>{skill2}</p>
                </div>

                <div className="section">
                    <h2>Experience</h2>
                    <p>{experience}</p>
                </div>
            </div>

        </div>
    );
}

export default Template1;