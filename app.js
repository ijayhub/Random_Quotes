
// Random Generator Quotes

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    'Stay away from people who think you are arguing every time you try to express yourself.<hr><br>Anonymous',
    "We don't grow when things are easy we grow when we face challenges.<hr><br>Anonymous",
    'When you are privileged never thinks others are lazy!!!.<hr><br>Anonymous', 
    'Remember, being happy does not mean you have it all. It simply means you are thankful for all you have.<hr>Anonymous',
    'Character is how you treat people who can do nothing for you.<hr><br>Anonymous',
    "I don't go by the rule book... i lead from the heart, not the head.<hr><br> Princess Diana",
    'If God Be for Who can Be Against Me.<hr><br> Romans 8 vs 31',
    'Magic is believing in yourself. If you can make that happen, you can make anything happen.<hr><br> Johann Wolfgang Van Goethe '
    

];
btn.addEventListener('click',()=> {
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];
    output.innerHTML = randomQuote;
})
