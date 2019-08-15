const button = document.querySelector('#get-form-data');

let convertFormDataToJson = (formData) => {
    // Collect all of formData's values.
    let jsonObject = {};

    for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
    }

    return jsonObject;
};

button.addEventListener('click', (e) => {   
    var form = document.getElementById('vform');
    // Get all form data.
    var formData = new FormData(form);
    // Refresh abstract and body from simpleMDE. 
    console.log(formData);

    let json = convertFormDataToJson(formData);    
    console.log(json);
    e.preventDefault();
});