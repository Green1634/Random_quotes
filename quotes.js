var sentence = [
    'I think being in love with life is a key to eternal youth',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'The way to get started is to quit talking and begin doing.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    'Your time is limited, so don\'t waste it living someone else\'s life',
    'I think being in love with life is a key to eternal youth',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'The way to get started is to quit talking and begin doing.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    'Your time is limited, so don\'t waste it living someone else\'s life'
    

    ];
    
    function senQuotes() {
    
    var random = Math.floor(Math.random()* (sentence.length));
    document.getElementById('display').innerHTML = sentence[random];
    }