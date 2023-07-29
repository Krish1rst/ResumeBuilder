 document.getElementById("profile-image-upload").addEventListener("change", function() {
   const file = this.files[0];
   const reader = new FileReader();

   reader.onloadend = function() {
     const profileImage = document.getElementById("profile-image");
     profileImage.src = reader.result;
   }

   if (file) {
     reader.readAsDataURL(file);
   } else {
     const profileImage = document.getElementById("profile-image");
     profileImage.src = "";
   }
 });

 function generateResume() {
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const education = document.getElementById("education").value;
   const experience = document.getElementById("experience").value;
   const skills = document.getElementById("skills").value;
   const projects = document.getElementById("projects").value;
   const certifications = document.getElementById("certifications").value;
   const languages = document.getElementById("languages").value;

   const resumeContent = `
  

                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Work Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>

                <h3>Projects</h3>
                <p>${projects}</p>

                <h3>Certifications</h3>
                <p>${certifications}</p>

                <h3>Languages</h3>
                <p>${languages}</p>
            `;

   // Display the generated resume content in the preview
   document.getElementById("resume-preview").innerHTML = resumeContent;

   // Get the profile picture URL from the profile image element
   const profileImage = document.getElementById("profile-image");
   const profileImageUrl = profileImage.src;

   // Create a data URI with the complete HTML content (including CSS styles and profile picture)
   const completeResumeContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Generated Resume</title>
                    <style>
                    *{box-sizing:border-box;}
body{
  border : 3px solid black;
  padding: 5px; 
  color: #007bff;
    font-family: 'Arial', sans-serif;
}
/* General styles for the downloaded resume */
.resume-container {
    font-family: 'Arial', sans-serif;
    color: #444;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
}
#resume-preview{
padding: 25px;
  border: 2px solid black;
  box - shadow: 0 4 px 8 px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background-color:#E0E0E0 ;
  
}
/* Header styles */
.resume-container h1 {
    text-align: center;
    color: #007bff;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* Subheading styles */
.resume-container h2 {
    color: #007bff;
    font-size: 28px;
    margin-bottom: 10px;
}

/* Section heading styles */
.resume-container h3 {
    margin-top: 0;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

/* General paragraph styles */
.resume-container p {
    line-height: 1.8;
    font-size: 18px;
    margin-bottom: 15px;
}



        </style>
                </head>
                <body>
                <div class="resume-container">
                      <div id="profile-preview">
                                            <div id="profile-picture">
                                                <img id="profile-image-for-download" src="${profileImageUrl}" alt="Profile Picture"
                             style="max-width : 100%;width: 200px; 
                    height: 200px;
                    border-radius: 50%;
                    border: 5px solid #2196F3;
                    margin: 20px auto;box-sizing: border-box;
                    object-fit: cover;
                    display: block;
                    box-shadow: 0 4px 8px rgba(.5, 0, .6, 0.2);"                   
                >
                                            </div>
                           </div>             
                      
                       <div id="resume-preview"> ${resumeContent}
                    </div></div>
                </body>
                </html>
            `;

   // Encode the complete HTML content for data URI
   const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(completeResumeContent);

   // Set the data URI as the link's href
   const downloadLink = document.getElementById("download-link");
   downloadLink.href = dataUri;
   downloadLink.style.display = "block"; // Show the download link

   // Update the download attribute with a suitable filename
   const fileName = "resume.html";
   downloadLink.setAttribute("download", fileName);
 }