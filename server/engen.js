var repo

const haveconj = { present: 'have', third: 'has', gerund: 'having', past: 'had' }

const conj_tobe = function (p, sing, tense) {
    if (tense == 'futuresimple') {
        return 'will be'
    }
    let past = tense == 'pastsimple'
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

const noun_location = function (noun) {
    return noun.loc_prep
}

exports.English = class English {
    constructor(dbrepo) {
        repo = dbrepo
    }
    tenses = {
        pastsimple: this.verbpastsimple,
        pastcont: this.verbpastcont,
        pressimple: this.verbpressimple,
        prescont: this.verbprescont,
        futuresimple: this.verbfuturesimple
    }
    cases = {
        loc: noun_location,
    }
    nounplural(word) {
        let res = word.plural;
        if (res) {
            return res;
        } else {
            return word.word;
        }
    };
    async run(pattern) {
        let n = pattern[1]
        let d = JSON.parse(JSON.stringify(n[0])) // need to deep-copy the array
        d.adjectives = await Promise.all(d.adjectives.map(async (x) => (await repo.getWordInfo('en', 'adjective', x)).word))
        n = [d, (await repo.getWordInfo('en', 'noun', n[1]))]
        let v = JSON.parse(JSON.stringify(pattern[2])) // need to deep-copy the object
        v.adverbs = await Promise.all(v.adverbs.map(async (x) => (await repo.getWordInfo('en', 'adverb', x)).word))
        return await this[pattern[0]](n, v, ...(pattern[3]))
    }
    async tobe(n, vdesc) {
        let rn = await this.describenoun(...n)
        let rv = conj_tobe(vdesc.person, vdesc.singular, vdesc.tense)
        return this.getpronoun(vdesc.person, vdesc.singular) + ' ' + rv + ' ' + rn
    }
    async tohave(n, vdesc, p, s) {
        return this.conjugateverb(vdesc, haveconj, p, s) + ' ' + await this.describenoun(...n);
    };
    async dosth(n, vdesc, v) {
        let nv = await repo.getWordInfo('en', 'verb', v)
        let rn = await this.describenoun(...n);
        let rv = this.conjugateverb(vdesc, nv, vdesc.person, vdesc.singular);
        let advs = ''
        if (vdesc.adverbs && vdesc.adverbs.length > 0) {
            advs = ' ' + this.addadverbs(vdesc.adverbs)
        }
        return rv + ' ' + rn + advs;
    }
    async describenoun(descriptions, noun) {
        let n = noun.word
        if (descriptions.plural) {
            n = this.nounplural(noun)
        }
        if (descriptions.adjectives && descriptions.adjectives.length > 0) {
            n = this.addadjectives(descriptions.adjectives, n)
        }
        if (!descriptions.definite && !descriptions.count
            && !descriptions.plural && !descriptions.possession) {
            n = 'a ' + n
        }
        if (descriptions.count || descriptions.count == 0) {
            let num = (await repo.getWordInfo('en', 'numeral', descriptions.count + 146)).word
            n = num + ' ' + n
        }
        if (descriptions.possession) {
            n = poss_pronouns(...(descriptions.possession)) + ' ' + n
        }
        if (descriptions.definite && !descriptions.possession) {
            n = 'the ' + n
        }
        if (descriptions.case) {
            n = this.cases[descriptions.case](noun) + ' ' + n
        }
        return n
    };
    nounwith(word) {
        return 'with ' + word.word;
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
        // if (descriptions.negation) {
        //     nv = verbneg(nv)
        // }
        nv = this.tenses[descriptions.tense](verb, p, sing)
        if (verb.prep) {
            nv += ' ' + verb.prep
        }
        return this.getpronoun(p, sing) + ' ' + nv
    }
    verbpressimple(word, p, sing) {
        if (sing && p == 3) {
            return word.third;
        } else {
            return word.present;
        }
    }
    verbprescont(word, p, sing) {
        return conj_tobe(p, sing, 'pressimple') + ' ' + word.gerund
    }
    verbpastsimple(word) {
        return word.past;
    }
    verbpastcont(word, p, sing) {
        return conj_tobe(p, sing, 'pastsimple') + ' ' + word.gerund
    }
    verbfuturesimple(word) {
        return 'will ' + word.present;
    }
    addadjectives(adjlst, noun) {
        return adjlst.join(' ') + ' ' + noun;
    }
    addadverbs(advlst) {
        return advlst.join(' ');
    }
}