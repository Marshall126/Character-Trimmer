$(document).ready(function(){
    $('.nameButton').click(function(){
        let nameGot = document.getElementById("test");
        console.log(nameGot.value);
        $('#result').value='nameGot.value';
    });
})
