import JsPDF from 'jspdf';

export const initialValue = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    language1: "",
    language2: "",
    skill1: "",
    skill2: "",
    school: "",
    college: "",
    experience: "",
    organisation: "",
    template: "template1",
    draft:false
}

export const generatePDF = () => {

    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
}

export const getItems = (item) => {

    const data = {
        name: item.name ? item.name : "Name",
        email: item.email ? item.email : "abc@gmail.com",
        phone: item.phone ? item.phone : "00000-00000",
        experience: item.experience ? item.experience : "Experience",
        language1: item.language1 ? item.language1 : "Language 1",
        language2: item.language2 ? item.language2 : "Language 2",
        skill1: item.skill1 ? item.skill1 : "Skill 1",
        skill2: item.skill2 ? item.skill2 : "Skill 2",
        organisation: item.organisation ? item.organisation : "Organisation",
        summary: item.summary ? item.summary : "Summary",
        school: item.school ? item.school : "School",
        college: item.school ? item.college : "College",
        template: item.template,
    }
    return data;
}