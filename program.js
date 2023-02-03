let randomNumber;
let personalWisdom = [];
function randomGenerator(num){
    return randomNumber = Math.floor(Math.random() * num);
}

function astrologySign (){
    switch (randomNumber){
        case 0:
            return 'Aries';
        break;
        case 1:
            return 'Taurus';
        break;
        case 2: 
            return 'Gemini';
        break;
        case 3:
            return 'Cancer';
        break;
        case 4:
            return 'Leo';
        break;
        case 5:
            return 'Virgo';
        break;
        case 6:
            return 'Libra';
        break;
        case 7:
            return 'Scorpio';
        break;
        default:
            return 'Invalid Sign'
    }
}


const collectiveWisdom = {
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
 }

function messageForSign (){
    return `Your astrology sign for today is ${astrologySign(randomGenerator(8))}`;
}
function fortuneTeller (){
    for (prop in collectiveWisdom){
        let randomNumb = randomGenerator(collectiveWisdom[prop].length)
        switch (prop){
        case 'fortuneOutput':
        personalWisdom.push(`You are having:  "${collectiveWisdom[prop][randomNumb]}".`)
        break;
        case 'advice':
        personalWisdom.push(`You should "${collectiveWisdom[prop][randomNumb]}".`) 
        break;
        default:
            return 'Try again for another luck';
        break;  
        }
    }
}

function formatArray(arr){
    const formatted = personalWisdom.join('\n')
    return formatted;
}
fortuneTeller();
console.log(messageForSign());
console.log(formatArray());