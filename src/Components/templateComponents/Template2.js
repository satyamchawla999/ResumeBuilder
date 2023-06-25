import "../../Assets/Styles/template.scss"

const Template2 = (props) => {

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
        phone
    } = props.values

    return (
        <div className="template2">

            <div className="template2Container">

            <div className="imgSection">
                <img src="https://media.licdn.com/dms/image/C4D03AQHLP6gI90jGEQ/profile-displayphoto-shrink_800_800/0/1658116787038?e=1692835200&v=beta&t=-NJdyDIHXHvKDO4-bvo-TdsvYHSKsPNE_vxNl5Ha_90" alt="#" />
                <div className="name">
                    <h1 className="heading">{name ? name : "name"}</h1>
                    <p>{summary ? summary : <p>Summary</p>}</p>
                </div>
            </div>

            <div className="infoSection">

            <div className="section">
                    <div>
                        <h4>Skills</h4>
                        <p>{skill1}</p>
                        <p>{skill2}</p>
                    </div>

                    <div>
                        <h4>Language</h4>
                        <p>{language1}</p>
                        <p>{language2}</p>
                    </div>
                </div>

                <div className="section">
                    <div>
                        <h4>Contact</h4>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>

                    <div>
                        <h4>Education</h4>
                        <p>{school}</p>
                        <p>{college}</p>
                    </div>
                </div>

                <div className="section">
                    <div>
                        <h4>Organisation</h4>
                        <p>{organisation}</p>
                    </div>

                    <div>
                        <h4>Experience</h4>
                        <p>{experience}</p>
                    </div>
                </div>
            </div>

            </div>

            

        </div>
    );
}

export default Template2;