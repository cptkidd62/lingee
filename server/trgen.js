const trnouns = ['kadın', 'erkek', 'okul', 'gün', 'para', 'renk', 'kitap', 'baba', 'anne']
const trverbsl = ['sev', 'al', 'gör', 'dinle', 'duy', 'git']
const trverbs = {
    'sev': { case: 'acc', aor: 'e' },
    'al': { case: 'acc', aor: 'ı' },
    'gör': { case: 'acc', aor: 'ü' },
    'dinle': { case: 'acc', aor: 'e' },
    'duy': { case: 'acc', aor: 'a' },
    'git': { case: 'dat', aor: 'e' }
}
const tradj = ['gözel', 'iyi', 'kötü', 'uzun']
const tradv = ['çabuk', 'yavaşça']
const trnums = ['sıfır', 'bir', 'iki', 'üç', 'dört',
    'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on']
const vowels = ['a', 'e', 'i', 'ı', 'o', 'ö', 'u', 'ü']
const softcons = ['p', 'ç', 't', 'k']

const tr4vowel = function (word) {
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
const tr2vowel = function (word) {
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
const trchnglast = function (word) {
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
const nounaddposs = function (word, p, sing) {
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
const nounaccus = function (word) {
    let v = tr4vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    } else {
        res = trchnglast(res);
    }
    return res + v;
}
const nounlocative = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (softcons.includes(word.slice(-1))) {
        res += 't';
    } else {
        res += 'd'
    }
    return res + v;
}
const noundative = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    } else {
        res = trchnglast(res);
    }
    return res + v;
}
const nounwith = function (word) {
    let v = tr2vowel(word);
    let res = word;
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    }
    return res + 'l' + v;
}
const verbcont = function (word) {
    let res = word
    if (vowels.includes(word.slice(-1))) {
        res = word.slice(0, -1);
    }
    res += tr4vowel(res);
    return res + 'yor';
}
const verbfuture = function (word) {
    let v = tr2vowel(word);
    let res = word
    if (vowels.includes(word.slice(-1))) {
        res += 'y';
    }
    return res + v + 'c' + v + 'k';
}
const verbpastconj = function (word, p, sing) {
    let v = tr4vowel(word);
    let res = word;
    let d = 'd'
    if (softcons.includes(res.slice(-1))) {
        d = 't'
    }
    if (sing) {
        switch (p) {
            case 1:
                return res + d + v + 'm';
            case 2:
                return res + d + v + 'n';
            case 3:
                return res + d + v;
        }
    } else {
        switch (p) {
            case 1:
                return res + d + v + 'k';
            case 2:
                return res + d + v + 'n' + v + 'z';
            case 3:
                if (word.slice(-3) == 'yor') {
                    return res + 'lardı';
                } else {
                    let v1 = tr2vowel(v);
                    return res + d + v + 'l' + v1 + 'r';
                }
        }
    }
}
const verbconj = function (word, p, sing) {
    let v = tr4vowel(word);
    let res = word;
    if (sing) {
        switch (p) {
            case 1:
                res = trchnglast(res);
                if (vowels.includes(res.slice(-1))) {
                    res += 'y'
                }
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
                if (vowels.includes(res.slice(-1))) {
                    res += 'y'
                }
                return res + v + 'z';
            case 2:
                return res + 's' + v + 'n' + v + 'z';
            case 3:
                let v1 = tr2vowel(word);
                return res + 'l' + v1 + 'r';
        }
    }
}
const verbaorist = function (word) {
    let res = word
    if (vowels.includes(word.slice(-1))) {
        res = word.slice(0, -1)
    }
    return res + trverbs[word].aor + 'r'
}
const verbneg = function (word) {
    let v = tr2vowel(word);
    return word + 'm' + v;
}

exports.Turkish = class Turkish {
    tenses = {
        pastsimple: this.verbpastsimple,
        pastcont: this.verbpastcont,
        pressimple: this.verbpressimple,
        prescont: this.verbprescont,
        futuresimple: this.verbfuturesimple
    }
    cases = {
        acc: nounaccus,
        loc: nounlocative,
        dat: noundative
    }
    nounplural(word) {
        let v = tr2vowel(word);
        return word + 'l' + v + 'r';
    }
    run(pattern) {
        let n = pattern[1]
        let d = JSON.parse(JSON.stringify(n[0])) // need to deep-copy the array
        d.adjectives = d.adjectives.map((x) => tradj[x])
        n = [d, trnouns[n[1]]]
        let v = JSON.parse(JSON.stringify(pattern[2])) // need to deep-copy the object
        v.adverbs = v.adverbs.map((x) => tradv[x])
        return this[pattern[0]](n, v, ...(pattern[3]))
    }
    tobe(n, vdesc) {
        let rn = n[1]
        if (n[1] != 'var') {
            rn = this.describenoun(...n)
        }
        if (vdesc.tense.slice(0, 4) == 'pres') {
            return verbconj(rn, vdesc.person, vdesc.singular)
        } else if (vdesc.tense.slice(0, 4) == 'past') {
            return verbpastconj(rn, vdesc.person, vdesc.singular)
        } else if (vdesc.tense.slice(0, 6) == 'future') {
            let pr = rn
            if (pr != '') {
                pr += ' '
            }
            return pr + verbconj(verbfuture('ol'), vdesc.person, vdesc.singular)
        } else {
            return rn
        }
    }
    tohave(n, vdesc, p, s) {
        let c = 'var'
        let t = vdesc.tense
        if (t == 'pastsimple') {
            c = this.tobe([{}, c], { person: 3, singular: true, tense: 'past' })
        } else if (t == 'pressimple') {
            c = this.tobe([{}, c], { person: 3, singular: true, tense: 'pres' })
        } else if (t == 'futuresimple') {
            c = this.tobe([{}, ''], { person: 3, singular: true, tense: 'future' })
        }
        return nounaddposs(this.describenoun(...n), p, s) + ' ' + c
    }
    dosth(n, vdesc, v) {
        let nv = trverbsl[v]
        let rn = this.cases[trverbs[nv].case](this.describenoun(...n));
        let rv = this.conjugateverb(vdesc, nv, vdesc.person, vdesc.singular);
        return rn + ' ' + rv;
    }
    describenoun(descriptions, noun) { // ex. [trnounplural, trnounaccus], 'erkek'
        let n = noun
        if (descriptions.plural && !descriptions.count) {
            n = this.nounplural(n)
        }
        if (descriptions.possession) {
            n = nounaddposs(n, ...(descriptions.possession))
        }
        if (descriptions.case) {
            n = this.cases[descriptions.case](n)
        }
        if (!descriptions.definite && !descriptions.plural
            && (!descriptions.count || descriptions.count == 1)) {
            n = 'bir ' + n
        }
        if (descriptions.adjectives && descriptions.adjectives.length > 0) {
            n = this.addadjectives(descriptions.adjectives, n)
        }
        if (descriptions.count && descriptions.count != 1) {
            n = trnums[descriptions.count] + ' ' + n
        }
        return n
    }
    conjugateverb(descriptions, verb, p, sing) {
        let nv = verb
        if (descriptions.negation) {
            nv = verbneg(nv)
        }
        nv = this.tenses[descriptions.tense](nv, p, sing)
        if (descriptions.adverbs && descriptions.adverbs.length > 0) {
            nv = this.addadverbs(descriptions.adverbs) + ' ' + nv
        }
        return nv;
    }
    verbpressimple(word, p, sing) {
        return verbconj(verbaorist(word), p, sing)
    }
    verbprescont(word, p, sing) {
        return verbconj(verbcont(word), p, sing)
    }
    verbpastsimple(word, p, sing) {
        return verbpastconj(word, p, sing)
    }
    verbpastcont(word, p, sing) {
        return verbpastconj(verbcont(word), p, sing)
    }
    verbfuturesimple(word, p, sing) {
        return verbconj(verbfuture(word), p, sing)
    }
    addadjectives(adjlst, noun) {
        return adjlst.join(' ') + ' ' + noun;
    }
    addadverbs(advlst) {
        return advlst.join(' ');
    }
}