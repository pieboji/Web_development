let Form=document.getElementById("savingData");

const retrieveEntries=() =>{
let entries=localStorage.getItem("inserted_data");
if(entries) {
    entries=JSON.parse(entries);
} else{
    entries=[];
}
 return entries;

};
let dataEntry=retrieveEntries();

const displayEntries=()=>{
    const entries=retrieveEntries();

    const tableEntries=entries.map((entry)=>{
        const namePlace=`<td class='border px-4 py-2'>${entry.name} </td>`;
        const emailPlace=`<td class='border px-4 py-2'>${entry.email} </td>`;
        const passwordPlace=`<td class='border px-4 py-2'>${entry.password} </td>`;
        const dobPlace=`<td class='border px-4 py-2'>${entry.dateOfBirth} </td>`;
        const acceptTermPlace=`<td class='border px-4 py-2'>${entry.termsAndConditions} </td>`;
  const row=`<tr>${namePlace} ${emailPlace} ${passwordPlace} ${dobPlace} ${acceptTermPlace}</tr>`;
  return row;

    }).join("\n");

    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">DOB</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries}</table>`;

    let details=document.getElementById("inserted_data");
    details.innerHTML=table;

};


const saveForm=(event)=>{
event.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const dateOfBirth=document.getElementById("dob").value;
const termsAndConditions=document.getElementById("acceptTerms").checked;
 
let entry={
name, email,password,dateOfBirth,termsAndConditions};

dataEntry.push(entry);
localStorage.setItem("inserted_data", JSON.stringify(dataEntry));
displayEntries();
};

Form.addEventListener("submit", saveForm);
displayEntries();
localStorage.clear();

const input = document.querySelector("#dob");
        input.addEventListener("input", function() {
          const now = new Date();
          const enteredDate = new Date(input.value);
          const age = now.getFullYear() - enteredDate.getFullYear();
          if (age < 18 || age > 55) {
            input.setCustomValidity("Please enter a date between 1968 and 2005.");
          } else {
            input.setCustomValidity("");
          }
        });

    function validate(element){

        if(element.validity.typeMismatch) {
            element.setCustomValidity("The Enail is not in the rigth format!!!");
            element.reportValidity();
        }else{
            element.setCustomValidity('');
        }
    }

    