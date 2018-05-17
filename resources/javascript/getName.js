$(document).ready(function(){
    //number of characters to trim to
    let chrCont = 2000;
    $('.nameButton').click(function(){
        //text submitted
        $('#spamCont').html('<ul id="spamCont"></ul>')
        const NAME_GOT = document.getElementById("trimText");
        const NAME_ARR = [...NAME_GOT.value];
        let spamMess = [];
        for(let i=0; i<NAME_ARR.length;i+=chrCont){
            spamMess.push([NAME_ARR.slice(i,chrCont+i)]);
            console.log(spamMess[i/chrCont]);
            let spamFin = spamMess[i/chrCont][0].join('');
            let spamDispl = `<li class="spam">${spamFin}</li>`;
            $('#spamCont').append(spamDispl);
        }            
    });
});

