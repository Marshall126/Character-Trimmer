$(document).ready(function(){
    //number of characters to trim to
    let chrCont = 2000;
    $('.nameButton').click(function(){
        //text submitted
        const NAME_GOT = document.getElementById("trimText");
        const NAME_ARR = [...NAME_GOT.value];
        let spamMess = [];
        console.log(NAME_ARR.length);
        for(let i=0; i<NAME_ARR.length;i+=chrCont){
            spamMess.push([NAME_ARR.slice(i,chrCont+i)]);
            console.log(spamMess[i/chrCont]);
            let spamFin = spamMess[i/chrCont].join('');
            //spamFin.join();
            console.log(spamFin);
            let spamDispl = `<li class="spam">${spamFin}</li>`;
            $('#spamCont').append(spamDispl);
        }
    });
})
