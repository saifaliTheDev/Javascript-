// globally Declared
document.getElementById("ClearOutput").onclick = function(){
    document.getElementById("Output").innerHTML =""; }

// alertString


document.getElementById("alertString").onclick = function () {
    alert('This is alert!')

    let statement = "alert('This is alert!')";
    document.getElementById("Input").innerHTML= statement;
}

// alertNumber

document.getElementById("alertNumber").onclick = function(){ 
    alert('This is alert number! 123');
    let statement = "alert('This is alert number! 123')";
    document.getElementById("Input").innerHTML= statement;

}

//clear statement

document.getElementById("ClearInput").onclick= function(){
    document.getElementById("Input").innerHTML = ""
}

// variable names

document.getElementById("variableNames").onclick = function() {
    
   
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code>and <code>myVar</code>are legal.</li>    <li> Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a        <code>Rose</code>  . If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript   or the value assigned to <code>Rose</code>, you'll come up empty.</li> </ul> "
    
    document.getElementById("Output").innerHTML = html;

    // document.getElementById("ClearOutput").onclick = function(){
    //     document.getElementById("Output").innerHTML =""; }
    
}

//camelCase

document.getElementById("camelCase"). onclick = function(){

    let html = "<h3>Examples</h3><ul>    <li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li><li><code>response</code></li></ul>"

    document.getElementById("Output").innerHTML = html;

    // document.getElementById("ClearOutput").onclick = function(){
    //     document.getElementById("Output").innerHTML =""; }
}


// sum

document.getElementById("sum"). onclick = function(){

  
    let num1 = 50;
    let num2 = 50;
    sum= num1+num2;
    document.getElementById("Output").innerHTML= "<p class = 'text-center'>" + sum + "</p>"

    let statement = "let num1=" + num1 +";<br> let num2=" + num2 + "; <br> sum=num1+num2;"
    document.getElementById("Input").innerHTML= statement;

}

//calculate some numbers

document.getElementById("calculate"). onclick = function () {
     calculation = (2+8)-2**+3*4-10 ;
    document.getElementById("Output").innerHTML = "<p class = 'text-center'>" + calculation + "</p>"


    let statement = "let some calculation = (2+8)-2**+3*4-10;"
    document.getElementById("Input").innerHTML = statement;

}

