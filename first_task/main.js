
var updateVal = false;

function insertdata(){
let params = {};
 params.intitle= document.getElementById('intitle').value;
 params.intextarea= document.getElementById('intextarea').value;
 IsOutput= document.getElementById('IsOutput');
 var ititle = document.getElementById("intitle").value;
 var tcontent = document.getElementById("intextarea").value;
let storedData = [];
storedData =  JSON.parse(localStorage.getItem('claims'));
console.log(storedData)
if(storedData) {
    if(updateVal == true){
        //console.log("true"+storedData[getparam].inputtitle = ititle)
        storedData[getparam].intitle= ititle;
        storedData[getparam].intextarea = tcontent;
      }
      else{
        storedData.push(params);
      }
    }
  else {
    storedData = [params];
  }


localStorage.setItem('claims', JSON.stringify(storedData));

}




