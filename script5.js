async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const userData = await response.json();
        document.getElementById("user").innerHTML = `
            <h3>${userData.name}</h3>
            <p><strong>Username:</strong> ${userData.username}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
            <p><strong>Website:</strong> ${userData.website}</p>
            <p><strong>City:</strong> ${userData.address.city}</p>
            <p><strong>Company:</strong> ${userData.company.name}</p>
        `;
        
    } catch (error) {
        console.error(error);
    }
}
getUserData();