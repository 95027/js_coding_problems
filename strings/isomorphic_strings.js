var isIsomorphic = function (s, t) {

    let smap = new Map();
    let tmap = new Map();

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        if (smap.has(a) && smap.get(a) !== b) {
            return false;
        }

        if (tmap.has(b) && tmap.get(b) !== a) {
            return false;
        }

        smap.set(a, b);
        tmap.set(b, a);
    }

    return true;

};

console.log(isIsomorphic("gg", "ad"));








