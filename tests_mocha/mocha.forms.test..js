describe("Forms Suite", ()=> {
    it('Should fill out form successfully', (client) => {
        const FormPage = client.page.FormPage();
        
        FormPage
            .navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage('John Doe', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
            .submitForm('@form')
            .verify.containsText('@lblLeftFormMessage', 'Form filled out successfully')
    });
});