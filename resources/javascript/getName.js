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
            spamMess[i/chrCont].join(' ');
            console.log(spamMess[i/chrCont].join('_'));
            let spamDispl = `<li class="spam">${spamMess[i/chrCont]}</li>`;
            $('#spamCont').append(spamDispl);
        }
    });
})
