
var xhr = new XMLHttpRequest();
xhr.open("GET", "resumedetails.json", true);
xhr.send();
xhr.onload = function () {

    var myResumeDetails = JSON.parse(xhr.responseText);
    console.log("Resume Details:",myResumeDetails);

// For the given JSON iterate over all for loops (for, for in, for of, for Each)
console.log("=====================")
// For loop
console.log("for Loop")
for(let i=0; i < myResumeDetails.length; i++)
{
    console.log("Basic Details:",myResumeDetails[i].basicDetails)
    console.log("Experience:",myResumeDetails[i].experience)
    console.log("Skills:",myResumeDetails[i].skills)
} 
console.log("=====================")
// For each loop
console.log("for each Loop")
myResumeDetails.forEach((obj) => { 
    console.log("Basic Details:",obj.basicDetails); 
    console.log("Skills:",obj.skills);
});
console.log("=====================")
// For in loop
console.log("for in Loop")
for(let keys in myResumeDetails)
{
    console.log("Intrests:",myResumeDetails[keys].interests)
}
console.log("=====================")
// For of loop
console.log("for of Loop")
for (let x of myResumeDetails) {
 console.log("Education Details:",x.education)
 console.log("Skills:",x.skills)
}

};

 

