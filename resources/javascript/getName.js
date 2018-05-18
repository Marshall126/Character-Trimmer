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
        $('#spamCont').html('<ul id="spamCont"></ul>')
        const NAME_GOT = document.getElementById("trimText");
        const NAME_ARR = [...NAME_GOT.value];
        let spamMess = [];
        for(let i=0; i<NAME_ARR.length;i+=chrCont){
            spamMess.push([NAME_ARR.slice(i,chrCont+i)]);
            console.log(spamMess[i/chrCont]);
            for(let j = 0; j<spamMess[i/chrCont][0].length; j++){
                switch(spamMess[i/chrCont][0][j]){
                    case '<':
                    spamMess[i/chrCont][0][j] = '&lt';
                    break;
                    case '>':
                    spamMess[i/chrCont][0][j] = '&gt';
                    break;
                }
            }
            let spamFin = spamMess[i/chrCont][0].join('');
            let spamDispl = `<li class="spam">${spamFin}</li>`;
            $('#spamCont').append(spamDispl);
        }            
    });
});

