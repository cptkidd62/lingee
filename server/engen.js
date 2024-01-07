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
    'go': { present: 'go', third: 'goes', cont: 'going', past: 'went' },
    'have': { present: 'have', third: 'has', cont: 'having', past: 'had' }
}
const enadj = ['beautiful', 'good', 'bad', 'long']

exports.English = class English {
    nounplural(word) {
        let res = ennouns[word].plural;
        if (res) {
            return res;
        } else {
            return word;
        }
    };
    tohave(n, p, s, vdesc) {
        return this.conjugateverb(vdesc, 'have', p, s) + ' ' + this.describenoun(...n);
    };
    dosth(n, v) {
        let rn = this.describenoun(...n);
        let rv = this.conjugateverb(...v);
        return rv + ' ' + rn;
    }
    likesth() {
        let p = getRandomNum(1, 4);
        return this.verbfuture('like', p, true) + ' ' + this.addadjectives(enadj, this.nounplural(getRandomElement(ennounsl)))
    }
    describenoun(descriptions, nounId) {
        let noun = ennounsl[nounId];
        return descriptions.reduce((acc, foo) => { return this[foo](acc) }, noun);
    };
    nounwith(word) {
        return 'with ' + word;
    }
    getpronoun(p, sing) {
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
    conjugateverb(descriptions, verb, p, sing) {
        return this.getpronoun(p, sing) + ' ' + descriptions.reduce((acc, foo) => { return this[foo](acc, p, sing) }, verb);
    }
    verbpressimple(word, p, sing) {
        if (sing && p == 3) {
            return enverbs[word].third;
        } else {
            return enverbs[word].present;
        }
    }
    verbpastsimple(word, p, sing) {
        return enverbs[word].past;
    }
    verbfuture(word, p, sing) {
        return enverbs[word].present;
    }
    addadjectives(adjlst, noun) {
        return adjlst.join(' ') + ' ' + noun;
    }
}