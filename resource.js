document.getElementById('resource-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resource = document.getElementById('resource').value;
    const subcategory = document.getElementById('subcategory').value;
    const description = document.getElementById('description').value;

    // For testing, output data to console
    console.log("Resource Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Resource:", resource);
    console.log("Subcategory:", subcategory);
    
    // If 'Other' is selected, log the description as well
    if (subcategory === 'Other') {
        console.log("Description:", description);
    }

    // Clear form fields after submission
    document.getElementById('resource-form').reset();
    document.getElementById('description-container').style.display = 'none';
});

// Show or hide description box based on subcategory selection
document.getElementById('subcategory').addEventListener('change', function () {
    const descriptionContainer = document.getElementById('description-container');
    if (this.value === 'Other') {
        descriptionContainer.style.display = 'block';
    } else {
        descriptionContainer.style.display = 'none';
    }
});
