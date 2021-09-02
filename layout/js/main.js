
function qut_btu(){
    const Quote =[
        {
            'author':   'Oscar Wilde',
            'quote':   'Be yourself; everyone else is already taken.',
        },
    
        {
            'author':   'Albert Einstein',
            'quote':   'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
        },
    
        {
            'author':   'Dr. Seuss',
            'quote':   'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
        },
    
    
        {
            'author':   'Elbert Hubbard',
            'quote':    'A friend is someone who knows all about you and still loves you.'
        },
    
    
    
        {
            'author':   'Ralph Waldo Emerson',
            'quote':    'For every minute you are angry you lose sixty seconds of happiness.'
        },
    
    
        {
            'author':    'Ernest Hemingway',
            'quote':    'Happiness in intelligent people is the rarest thing I know.'
        },
    
        {
            'author':    'Albert Camus',
            'quote':      'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.'
        },
    ];
    const random = Number.parseInt(Math.random()*Quote.length + 1);
    document.querySelector('#qut').textContent = `\  “ ${Quote[random].quote}\  ”`;
    document.querySelector('#auth').textContent = `-- ${Quote[random].author}`;
    document.querySelector('#qut').style.color = '#c38e61';
    document.querySelector('#auth').style.color = '#305e53';

}



