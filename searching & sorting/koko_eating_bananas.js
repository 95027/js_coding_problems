var minEatingSpeed = function (piles, h) {

    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canDo(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function canDo(k) {
        let need = 0;

        for (let p of piles) {
            need += Math.ceil(p / k);

        }

        return need <= h;
    }

};

console.log(minEatingSpeed([3, 6, 7, 11], 8));