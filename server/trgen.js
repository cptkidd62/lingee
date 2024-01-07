const trnouns = ['kadın', 'erkek', 'okul', 'gün', 'para', 'renk', 'kitap', 'baba', 'anne']
const trverbs = ['sev', 'al', 'gör', 'dinle', 'duy', 'git']
const tradj = ['gözel', 'iyi', 'kötü', 'uzun']
const tradv = ['çabuk']
const vowels = ['a', 'e', 'i', 'ı', 'o', 'ö', 'u', 'ü']
const softcons = ['p', 'ç', 't', 'k']

exports.Turkish = class Turkish {
    nounplural(word) {
        let v = this.tr2vowel(word);
        return word + 'l' + v + 'r';
    }
    tohave(n, p, s, vdesc) {
        return this.nounaddposs(this.describenoun(...n), p, s) + ' ' + this.conjugateverb(vdesc, 'var', 3, true) // ???
    }
    dosth(n, v) {
        let rn = this.describenoun(...n);
        let rv = this.conjugateverb(...v);
        return rn + ' ' + rv;
    }
    describenoun(descriptions, nounId) { // ex. [trnounplural, trnounaccus], 'erkek'
        let noun = trnouns[nounId];
        return descriptions.reduce((acc, foo) => { return this[foo](acc) }, noun);
    }
    conjugateverb(descriptions, verb, p, sing) {
        return descriptions.reduce((acc, foo) => { return this[foo](acc, p, sing) }, verb);
    }
    verbpastsimple(word, p, sing) {
        return this.verbpastconj(word, p, sing)
    }
    verbcont(word) {
        let res = word
        if (vowels.includes(word.slice(-1))) {
            res = word.slice(0, -1);
        }
        res += this.tr4vowel(res);
        return res + 'yor';
    }
    verbfuture(word) {
        let v = this.tr2vowel(word);
        let res = word
        if (vowels.includes(word.slice(-1))) {
            res += 'y';
        }
        return res + v + 'c' + v + 'k';
    }
    verbpastconj(word, p, sing) {
        let v = this.tr4vowel(word);
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
                        let v1 = this.tr2vowel(v);
                        return res + 'd' + v + 'l' + v1 + 'r';
                    }
            }
        }
    }
    verbconj(word, p, sing) {
        let v = this.tr4vowel(word);
        let res = word;
        if (sing) {
            switch (p) {
                case 1:
                    res = this.trchnglast(res);
                    return res + v + 'm';
                case 2:
                    return res + 's' + v + 'n';
                case 3:
                    return res;
            }
        } else {
            switch (p) {
                case 1:
                    res = this.trchnglast(res);
                    return res + v + 'z';
                case 2:
                    return res + 's' + v + 'n' + v + 'z';
                case 3:
                    let v1 = this.tr2vowel(word);
                    return res + 'l' + v1 + 'r';
            }
        }
    }
    verbneg(word) {
        let v = this.tr2vowel(word);
        return word + 'm' + v;
    }
    addadjectives(adjlst, noun) {
        return adjlst.join(' ') + ' ' + noun;
    }
    nounaddposs(word, p, sing) {
        let v = this.tr4vowel(word);
        let res = word;
        if (!vowels.includes(word.slice(-1))) {
            res = this.trchnglast(res);
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
                    let v1 = this.tr2vowel(word);
                    let v2 = this.tr4vowel(v1);
                    return word + 'l' + v1 + 'r' + v2;
            }
        }
    }
    nounaccus(word) {
        let v = this.tr4vowel(word);
        let res = word;
        if (vowels.includes(word.slice(-1))) {
            res += 'y';
        } else {
            res = this.trchnglast(res);
        }
        return res + v;
    }
    nounlocative(word) {
        let v = this.tr2vowel(word);
        let res = word;
        if (softcons.includes(word.slice(-1))) {
            res += 't';
        } else {
            res += 'd'
        }
        return res + v;
    }
    noundative(word) {
        let v = this.tr2vowel(word);
        let res = word;
        if (vowels.includes(word.slice(-1))) {
            res += 'y';
        } else {
            res = this.trchnglast(res);
        }
        return res + v;
    }
    nounwith(word) {
        let v = this.tr2vowel(word);
        let res = word;
        if (vowels.includes(word.slice(-1))) {
            res += 'y';
        }
        return res + 'l' + v;
    }
    // helper methods
    tr4vowel(word) {
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
    tr2vowel(word) {
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
    trchnglast(word) {
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
}