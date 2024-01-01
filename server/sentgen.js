const trnouns = ['kadın', 'erkek', 'okul', 'gün', 'para', 'renk', 'kitap', 'baba', 'anne']
const trverbs = ['sev', 'al', 'gör', 'dinle', 'duy', 'git']
const tradj = ['gözel', 'iyi', 'kötü', 'uzun']
const tradv = ['çabuk']
const vowels = ['a', 'e', 'i', 'ı', 'o', 'ö', 'u', 'ü']
const softcons = ['p', 'ç', 't', 'k']

const ennounsl = ['woman', 'man', 'school', 'day', 'money', 'color', 'book']
const ennouns = {
    'woman': { sing: 'woman', plural: 'women', loc: undefined },
    'man': { sing: 'man', plural: 'men', loc: undefined },
    'school': { sing: 'school', plural: 'schools', loc: 'at' },
    'day': { sing: 'day', plural: 'days', loc: undefined },
    'money': { sing: 'money', plural: undefined, loc: undefined },
    'color': { sing: 'color', plural: 'colors', loc: undefined },
    'book': { sing: 'book', plural: 'books', loc: 'in' }
}
const enverbsl = ['like', 'take', 'see', 'listen', 'hear', 'go']
const enverbs = {
    'like': { present: 'like', third: 'likes', cont: 'liking', past: 'liked' },
    'take': { present: 'take', third: 'takes', cont: 'taking', past: 'took' },
    'see': { present: 'see', third: 'sees', cont: 'seeing', past: 'saw' },
    'listen': { present: 'listen', third: 'listens', cont: 'listening', past: 'listened' },
    'hear': { present: 'hear', third: 'hears', cont: 'hearing', past: 'heard' },
    'go': { present: 'go', third: 'goes', cont: 'going', past: 'went' }
}
const enadj = ['beautiful', 'good', 'bad', 'long']

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomNum(b, e) {
    return b + Math.floor(Math.random() * (e - b))
}
// turkish
// vowel & consonant harmonies
let tr4vowel = function (word) {
    let idx = Math.max(...(vowels.map(x => word.lastIndexOf(x))));
    let l = word[idx];
    switch (l) {
        case 'a':
        case 'ı':
            return 'ı';
        case 'e':
        case 'i':
            return 'i';
        case 'o':
        case 'u':
            return 'u';
        case 'ö':
        case 'ü':
            return 'ü';
    }
}
let tr2vowel = function (word) {
    let idx = Math.max(...(vowels.map(x => word.lastIndexOf(x))));
    let l = word[idx];
    switch (l) {
        case 'a':
        case 'ı':
        case 'o':
        case 'u':
            return 'a';
        case 'e':
        case 'i':
        case 'ö':
        case 'ü':
            return 'e';
    }
}
let trchnglast = function (word) {
    let res = word.slice(0, -1);
    let last = word.slice(-1);
    if (last == 'p') {
        return res + 'b';
    } else if (last == 'ç') {
        return res + 'c';
    } else if (last == 't') {
        return res + 'd';
    } else if (last == 'k') {
        if (vowels.includes(res.slice(-1))) {
            return res + 'ğ';
        } else {
            return res + 'g';
        }
    }
    return word;
}
// noun forms
let trnounaddposs = function (word, p, sing) {
    let v = tr4vowel(word);
    let res = word;
    if (!vowels.includes(word.slice(-1))) {
        res = trchnglast(res);
        res += v;
    }
    if (sing) {
        switch (p) {
            case 1:
                return res + 'm';
            case 2:
                return res + 'n';
            case 3:
                if (vowels.includes(word.slice(-1))) {
                    res = word + 's' + v;
                }
                return res;
        }
    } else {
        switch (p) {
            case 1:
                return res + 'm' + v + 'z';
            case 2:
                return res + 'n' + v + 'z';
            case 3:
                let v1 = tr2vowel(word);
                let v2 = tr4vowel(v1);
                return word + 'l' + v1 + 'r' + v2;
        }
    }
}
let trnounaccus = function (word) {
    let v = tr4vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    } else {
        res = trchnglast(res);
    }
    return res + v;
}
let trnounlocative = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (softcons.includes(word.slice(-1))) {
        res += 't';
    } else {
        res += 'd'
    }
    return res + v;
}
let trnoundative = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    } else {
        res = trchnglast(res);
    }
    return res + v;
}
let trnounwith = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    }
    return res + 'l' + v;
}
let trnounplural = function (word) {
    let v = tr2vowel(word);
    return word + 'l' + v + 'r';
}
// verb forms
let trverbcont = function (word) {
    let res = word
    if (vowels.includes(word.slice(-1))) {
        res = word.slice(0, -1);
    }
    res += tr4vowel(res);
    return res + 'yor';
}
let trverbfuture = function (word) {
    let v = tr2vowel(word);
    let res = word
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    }
    return res + v + 'c' + v + 'k';
}
let trverbpastconj = function (word, p, sing) {
    let v = tr4vowel(word);
    let res = word;
    if (sing) {
        switch (p) {
            case 1:
                return res + 'd' + v + 'm';
            case 2:
                return res + 'd' + v + 'n';
            case 3:
                return res + 'd' + v;
        }
    } else {
        switch (p) {
            case 1:
                return res + 'd' + v + 'k';
            case 2:
                return res + 'd' + v + 'n' + v + 'z';
            case 3:
                if (word.slice(-3) == 'yor') {
                    return res + 'lardı';
                } else {
                    let v1 = tr2vowel(v);
                    return res + 'd' + v + 'l' + v1 + 'r';
                }
        }
    }
}
let trverbconj = function (word, p, sing) {
    let v = tr4vowel(word);
    let res = word;
    if (sing) {
        switch (p) {
            case 1:
                res = trchnglast(res);
                return res + v + 'm';
            case 2:
                return res + 's' + v + 'n';
            case 3:
                return res;
        }
    } else {
        switch (p) {
            case 1:
                res = trchnglast(res);
                return res + v + 'z';
            case 2:
                return res + 's' + v + 'n' + v + 'z';
            case 3:
                let v1 = tr2vowel(word);
                return res + 'l' + v1 + 'r';
        }
    }
}
let trverbneg = function (word) {
    let v = tr2vowel(word);
    return word + 'm' + v;
}
// adjectives
let traddadjectives = function (adjlst, noun) {
    return adjlst.join(' ') + ' ' + noun;
}

let trdescribenoun = function (descriptions, noun) { // ex. [trnounplural, trnounaccus], 'erkek'
    return descriptions.reduce((acc, foo) => { console.log(acc, foo); return foo(acc) }, noun);
}

let trconjugateverb = function (descriptions, verb, p, sing) {
    return descriptions.reduce((acc, foo) => { console.log(acc, foo, p, sing); return foo(acc, p, sing) }, verb);
}
// constructions
let trtohave = function (n, p, s) {
    return trnounaddposs(trdescribenoun(...n), p, s) + ' var.'
}
let trdosth = function (n, v) {
    let rn = trdescribenoun(...n);
    let rv = trconjugateverb(...v);
    return rn + ' ' + rv;
}

// english
// noun forms
let ennounplural = function (word) {
    let res = ennouns[word].plural;
    if (res) {
        return res;
    } else {
        return word;
    }
}

let ennounwith = function (word) {
    return 'with ' + word;
}

let engetpronoun = function (p, sing) {
    if (sing) {
        if (p == 1) {
            return 'I';
        } else if (p == 2) {
            return 'you';
        } else {
            return 'he'
        }
    } else {
        if (p == 1) {
            return 'we';
        } else if (p == 2) {
            return 'you';
        } else {
            return 'they'
        }
    }
}
// verb forms
let enpressimple = function (word, p, sing) {
    if (sing && p == 3) {
        return 'he ' + enverbs[word].third;
    } else {
        return engetpronoun(p, sing) + ' ' + enverbs[word].present;
    }
}

let enpastsimple = function (word, p, sing) {
    return engetpronoun(p, sing) + ' ' + enverbs[word].past;
}

let enfuture = function (word, p, sing) {
    return engetpronoun(p, sing) + ' will ' + enverbs[word].present;
}

// adjectives
let enaddadjectives = function (adjlst, noun) {
    return adjlst.join(' ') + ' ' + noun;
}

let endescribenoun = function (descriptions, noun) { // ex. [trnounplural, trnounaccus], 'erkek'
    return descriptions.reduce((acc, foo) => { console.log(acc, foo); return foo(acc) }, noun);
}

let enconjugateverb = function (descriptions, verb, p, sing) {
    return descriptions.reduce((acc, foo) => { console.log(acc, foo, p, sing); return foo(acc, p, sing) }, verb);
}

let entohave = function (n, p, s) {
    let verb = ' have '
    if (s && p == 3) {
        verb = ' has '
    }
    return engetpronoun(p, s) + verb + endescribenoun(...n);
}

let endosth = function (n, v) {
    let rn = endescribenoun(...n);
    let rv = enconjugateverb(...v);
    return rv + ' ' + rn;
}

let enlikesth = function () {
    let p = getRandomNum(1, 4);
    return enfuture('like', p, true) + ' ' + enaddadjectives(enadj, ennounplural(getRandomElement(ennounsl)))
}

exports.Generator = class Generator {
    // getRandomSentence() { let s = entohave(); console.log(s); return s }
    pattern1 = [trdosth, [[[trnounplural, trnounaccus], 'erkek'], [[trverbneg, trverbfuture, trverbconj], 'sev', 2, true]]]
    pattern1e = [endosth, [[[ennounplural], 'man'], [[enfuture], 'like', 2, true]]]
    pattern2 = [trtohave, [[[trnounplural], 'gomlek'], 1, true]]
    pattern2e = [entohave, [[[ennounplural], 'school'], 1, true]]
    getFromPattern(pattern) {
        return pattern[0].apply(this, pattern[1])
    }
}