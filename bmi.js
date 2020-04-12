function bmi(){

var feet=parseFloat(document.getElementById('hgt1').value);
var inch=parseFloat(document.getElementById('hgt2').value);
var sheight=feet*30.48+inch*2.54;
var sweight=parseFloat(document.getElementById('wgt').value);
var bmi=sweight/Math.pow(sheight,2);
var student_bmi=document.getElementById('bmi_index');
student_bmi.textContent=bmi.toFixed(6);
}
