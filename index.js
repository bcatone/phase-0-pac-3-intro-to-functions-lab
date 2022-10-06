function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    const alwaysHeardPhrase = "Let's have dinner together!";
    const alwaysHeardResponse = "I would love to!";
    const whisperResponse = "I can't hear you!";
    const shoutResponse = "YES INDEED!";
    const talkResponse = "Can you repeat that a little louder? I can't quite hear you!"
    
    // Respond if the string is the phrase the roommate always hears
    if (string == alwaysHeardPhrase) {
        return alwaysHeardResponse;
    }
    // Respond if the user is whispering (all letters are lowercase)
    else if (string === whisper(string)) {
        
        return whisperResponse;
    }
    // Respond if the user is shouting (all letters are uppercase)
    else if (string === shout(string)) {
        return shoutResponse;
    }
    // This should never execute in learn test
    // Respond if user is talking normally (mixed capitalization of letters in string)
    else {
        return talkResponse;
    }
}