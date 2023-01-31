// Need to parse our JSON file so our text format is converted to a javascript object that can be used inside of our program.
fetch('./data/studentlist.json').then(response => response.json())
    .then(data => {
        const students = data;

        // Function to randomly select the student from the list we made
        const addStudentToList = () => {
            // Math.random() generates a random decimal number between 0 and 1.
            // students.length returns the number of students in the array.
            // Math.Random * students.length is used to scale the random number (since math.random goes up to 1 on its own) to the length of the students array so it will return a number that exists within the arrays length.
            // the result of this line of code is stored in the constant variable student
            const studentName = students[Math.floor(Math.random() * students.length)];
            document.getElementById('singleName').textContent = studentName.name;
            const list = document.getElementById('fiveStudentsList');

            const li = document.createElement('li');
            li.innerHTML = studentName.name;
            // insertBefore is a method of the parent element that allows you to insert a new child node before a specified child node (So this is how it replaces the last name on the list)
            list.insertBefore(li, list.firstChild);

            // Have the list show the last 5 items only
            // The list.childNodes.length is used to return the number of child nodes it contains
            // child nodes elements that are contained within another element - They will have a "parent".
            // examples of a child element: an h1 or p or ul element in a DIV. Those are children of the DIV element.
            // So here WHILE the length of the list has more than 5 chil elements, then list.removeChild will be used to remove a child element and list.lastChild targets the last
            while (list.children.length > 5) {
                list.removeChild(list.lastChild);
            }
        }

        // Event listener for button to generate the next random student
        document.getElementById('submitBtn').addEventListener('click', addStudentToList);
    });















    // This section is code that didn't work that I was trying to mess with 

// const submitBtn = document.getElementById("submitBtn");
// const generatedName = document.getElementById("generatedName");
// const nameList = document.getElementById("nameList");

// function submitButton(){
//         const submitBtn = document.getElementById('submitBtn');
//         const singleName = document.getElementById('singleName');
//         const fiveStudentsList = document.getElementById('fiveStudentsList');
        
//         submitBtn.addEventListener('click', function(){
//             const randomIndex = Math.floor(Math.random() * students.length);
//             const randomStudent = students[randomIndex];
//             singleName.innerHTML = randomStudent.name;
//             addNameToList(randomStudent.name);
//         });

//         function addNameToList(name) {
//             const li = document.createElement('li');
//             li.innerHTML = name;
//             if (nameList.children.length >= 5){
//                 nameList.removeChild(nameList.firstChild);
//             }
//             nameList.appendChild(li);
//         }
//     }








