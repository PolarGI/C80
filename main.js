nombre_alumno_array = [];
function submit()
{
    var display_student_array = [];

    for (var i = 1; i <= 4; i++)
    {
        var name_of_the_student = document.getElementById("nombre_alumno_"+i).value
        console.log(name_of_the_student);
        name_of_the_student_array.push (name_of_the_student);
    }

      
    console.log(name_of_the_students_array);

    var lenght_of_name_of_students_arrays = name_of_the_students_arrays.lenght;
    console.log(lenght_of_name_of_students_array)

    for (var k = 0; k < lenght_of_name_of_students_array; k++)
        {
            display_students_arrays.push("<h4>NAME -"+ name_of_the_students_arrays[k] + "</h4>");
            console.log(display_student_array);
        }
        console.log (display_students_array);
document.getElementById("ver_nombre_con_comas").innerHTML = display_students_arrays;

var remove_commas = display_students_array.join(" ")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

documen.getElementById("submit_button").style.display = "none";
document.getElementyById("submit_button").style.display = "inline-block"

for (var k = 0; k < lenght_of_name_of_students_arrays; k++)
{
    dsiplay_students_array.push("<h4>NAME -"+ name_of_the_students_array[k] + "</h4>");
    console.log(display_students_array);
 }
 console.log(display_students_array);
 document.getElementById("display_name_with_commas").inner = display_students_array;

 var remove_commas = display_students_array.join(" ");
 console.log(remove_commas);
 docuemnt.getElementById("display_name_without_comas").innerHTML = remove_commas;

 function sorting()
    {
 name_of_the_student_array:sort();
 console.log(name_of_the_students_array);

 var display_student_array_sorting =[];

 var lenght_of_name_of_students_array = name_of_thr-students_array.length;
 console.log(lenght_of_name_students_arrays);
 }

 for (var k = 0; k < lenght_of_students_array; k++)  
 {
     display_students_array_sorting.push("<h4>NAME -" + name_of_the_students_array[k] + "</h4>");
     console.log(display_student_array_sorting.join);
 }

 var remove_commas = display_students_array_sorting.join(" ");
 console.log(remove_commas);

 document.getElementById("display_name_withouth_commas").innerHTML = remove_commas;
}
