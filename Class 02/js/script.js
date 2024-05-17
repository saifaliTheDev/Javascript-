// function addContent (){
//     document.getElementById("second").innerHTML = " <b> I'm bold.</b> "
// }
// addContent ();

function formatContent (){
    document.getElementById("first-paragraph").style.color="orange";
    document.getElementById("first-paragraph").style.border="red";
    document.getElementById("first-paragraph").style.display="inline-block";

}



function addContent (){
    document.getElementById("second").innerHTML = "<span style = ' font-weight : bold; color: red; text-align: center;' > I'm bold. </span> "
}
addContent ();

// document.write( "Failure is a key to success");

// alert('Please enter your name to continue')

console.log("Error in line number 17")



function printDocument (){
    document.getElementById("second-paragraph").style.display = "none";
    document.getElementById("bulb").style.display = "none";

    print();

}

// ----------------------

function changeContent () {
    document.getElementById("content").innerHTML='Content has been changed.😃'
}