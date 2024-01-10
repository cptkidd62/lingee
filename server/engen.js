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
const enadv = ['quickly', 'slowly']
const ennums = ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']

const conj_tobe = function (p, sing, past) {
    if (sing && p == 1) {
        return past ? 'was' : 'am'
    } else if (sing && p == 3) {
        return past ? 'was' : 'is'
    } else {
        return past ? 'were' : 'are'
    }
}

const poss_pronouns = function (p, s) {
    if (s) {
        switch (p) {
            case 1:
                return 'my';
            case 2:
                return 'your';
            case 3:
                return 'his';
        }
    } else {
        switch (p) {
            case 1:
                return 'our';
            case 2:
                return 'your';
            case 3:
                return 'their';
        }
    }
}

exports.English = class English {
    tenses = {
        pastsimple: this.verbpastsimple,
        pastcont: this.verbpastcont,
        pressimple: this.verbpressimple,
        prescont: this.verbprescont,
        futuresimple: this.verbfuturesimple
    }
    nounplural(word) {
        let res = ennouns[word].plural;
        if (res) {
            return res;
        } else {
            return word;
        }
    };
    run(pattern) {
        let n = pattern[1]
        let d = JSON.parse(JSON.stringify(n[0])) // need to deep-copy the array
        d.adjectives = d.adjectives.map((x) => enadj[x])
        n = [d, ennounsl[n[1]]]
        let v = JSON.parse(JSON.stringify(pattern[2])) // need to deep-copy the object
        v.adverbs = v.adverbs.map((x) => enadv[x])
        return this[pattern[0]](n, v, ...(pattern[3]))
    }
    tohave(n, vdesc, p, s) {
        return this.conjugateverb(vdesc, 'have', p, s) + ' ' + this.describenoun(...n);
    };
    dosth(n, vdesc, v) {
        let nv = enverbsl[v]
        let rn = this.describenoun(...n);
        let rv = this.conjugateverb(vdesc, nv, vdesc.person, vdesc.singular);
        let advs = ''
        if (vdesc.adverbs && vdesc.adverbs.length > 0) {
            advs = ' ' + this.addadverbs(vdesc.adverbs)
        }
        return rv + ' ' + rn + advs;
    }
    likesth() {
        return this.verbfuture('like', p, true) + ' ' + this.addadjectives(enadj, this.nounplural(getRandomElement(ennounsl)))
    }
    describenoun(descriptions, noun) {
        let n = noun
        if (descriptions.plural) {
            n = this.nounplural(n)
        }
        if (descriptions.adjectives && descriptions.adjectives.length > 0) {
            n = this.addadjectives(descriptions.adjectives, n)
        }
        if (!descriptions.definite && !descriptions.count && !descriptions.plural) {
            n = 'a ' + n
        }
        if (descriptions.count) {
            n = ennums[descriptions.count] + ' ' + n
        }
        if (descriptions.possession) {
            n = poss_pronouns(...(descriptions.possession)) + ' ' + n
        }
        if (descriptions.definite) {
            n = 'the ' + n
        }
        return n
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
        let nv = verb
        if (descriptions.negation) {
            nv = verbneg(nv)
        }
        nv = this.tenses[descriptions.tense](nv, p, sing)
        return this.getpronoun(p, sing) + ' ' + nv
    }
    verbpressimple(word, p, sing) {
        if (sing && p == 3) {
            return enverbs[word].third;
        } else {
            return enverbs[word].present;
        }
    }
    verbprescont(word, p, sing) {
        return conj_tobe(p, sing, false) + ' ' + enverbs[word].cont
    }
    verbpastsimple(word) {
        return enverbs[word].past;
    }
    verbpastcont(word, p, sing) {
        return conj_tobe(p, sing, true) + ' ' + enverbs[word].cont
    }
    verbfuturesimple(word) {
        return 'will ' + word;
    }
    addadjectives(adjlst, noun) {
        return adjlst.join(' ') + ' ' + noun;
    }
    addadverbs(advlst) {
        return advlst.join(' ');
    }
}