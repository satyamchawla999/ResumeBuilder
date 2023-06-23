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
}

export const generatePDF = () => {

    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
}

export const getItems = (item) => {

    const data = {
        name: item.name ? item.name : "Dummy",
        email: item.email ? item.email : "Dummy",
        experience: item.experience ? item.experience : "Dummy",
        language1: item.language1 ? item.language1 : "Dummy",
        language2: item.language2 ? item.language2 : "Dummy",
        skill1: item.skill1 ? item.skill1 : "Dummy",
        skill2: item.skill2 ? item.skill2 : "Dummy",
        organisation: item.organisation ? item.organisation : "Dummy",
        summary: item.summary ? item.summary : "Dummy",
        school: item.school ? item.school : "Dummy",
        college: item.school ? item.college : "Dummy",
        template: item.template,
    }
    return data;
}