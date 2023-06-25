import TemplateOptions from "./TemplateOptions";

const FormInputs = (props) => {

    const {handleTemplateChange, handleInputChange, handleSubmit, values,handleDraft, submit ,toggle, handleSaveChanges} = props;

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="inlineInputs">
                    {/* <label>Name</label> */}
                    <input type="text" name="name" value={values.name} onChange={handleInputChange} placeholder="Name" />

                    {/* <label>Email</label> */}
                    <input type="email" name="email" value={values.email} onChange={handleInputChange} placeholder="Email" />

                    {/* <label>Phone</label> */}
                    <input style={{marginRight:"0"}} type="text" name="phone" value={values.phone} onChange={handleInputChange} placeholder="Conatct Number" />

                </div>


                {/* <label>Summary</label> */}
                <input type="text" name="summary" value={values.summary} onChange={handleInputChange} placeholder="Summary" />

                {/* <label>Language</label> */}

                <div className="inlineInputs">
                    <input
                        type="text"
                        name="language1"
                        value={values.language1}
                        onChange={handleInputChange}
                        placeholder="Language 1"
                    />

                    <input
                        style={{marginRight:"0"}}
                        type="text"
                        name="language2"
                        value={values.language2}
                        onChange={handleInputChange}
                        placeholder="Language 2"
                    />

                </div>

                <div className="inlineInputs">
                    {/* <label>Skills</label> */}
                    <input
                        type="text"
                        name="skill1"
                        value={values.skill1}
                        onChange={handleInputChange}
                        placeholder="Skill 1"
                    />

                    <input
                        style={{marginRight:"0"}}
                        type="text"
                        name="skill2"
                        value={values.skill2}
                        onChange={handleInputChange}
                        placeholder="Skill 2"
                    />

                </div>


                {/* <label>School</label> */}
                <input type="text" name="school" value={values.school} onChange={handleInputChange} placeholder="School" />

                {/* <label>College</label> */}
                <input type="text" name="college" value={values.college} onChange={handleInputChange} placeholder="College" />

                {/* <label>Experience</label> */}
                <input type="text" name="experience" value={values.experience} onChange={handleInputChange} placeholder="Experience" />

                {/* <label>Organisation</label> */}
                <input type="text" name="organisation" value={values.organisation} onChange={handleInputChange} placeholder="Organisation" />

                {submit && <p style={{ color: "green" }}>Details Submitted Successfully </p>}
                <TemplateOptions
                    handleTemplateChange={handleTemplateChange}
                    handleSaveChanges={handleSaveChanges}
                    handleDraft={handleDraft}
                    toggle={toggle}
                />
            </form>


        </>
    );
}

export default FormInputs;