$(document).ready(function(){
    //number of characters to trim to
    $('.nameButton').click(function(){
        let chrVal = Math.floor(document.getElementById('trimAmnt').value);
        if(isNaN(chrVal)==false && chrVal !==0){
            var chrCont = chrVal;
        }else{
            var chrCont=2000;
        } 
        //text submitted
        $('#spamCont').html('<ul id="spamCont"></ul>');
        const NAME_GOT = document.getElementById("trimText");
        //put all characters into an array
        const NAME_ARR = [...NAME_GOT.value];
        let spamArr = [];
        //make a new array which is only as long as chrCont
        for(let i=0; i<NAME_ARR.length;i+=chrCont){
            spamArr.push([NAME_ARR.slice(i,chrCont+i)]);
            for(let j = 0; j<spamArr[i/chrCont][0].length; j++){
                //replace all < and > with unicode
                switch(spamArr[i/chrCont][0][j]){
                    case '<':
                    spamArr[i/chrCont][0][j] = '&lt';
                    break;
                    case '>':
                    spamArr[i/chrCont][0][j] = '&gt';
                    break;
                }
            }
            //convert the array into a string in an html element
            let spamDispl = `<li class="spam">${spamArr[i/chrCont][0].join('')}</li>`;
            $('#spamCont').append(spamDispl);
        }            
    });
});