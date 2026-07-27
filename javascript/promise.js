const myPromise = new Promise((res, rej) => {
    // res();
    rej("rejected");
});

// myPromise
//   .then(() => console.log("resolved"))
//   .catch((e) => console.log("rejected"));

const asyncPromise = async () => {
    try {
        const res = await myPromise;
    } catch (error) {
        console.log("err", error);
    }
};

asyncPromise();


// custom promise.all
function myPromiseAll(promises) {

    if (promises.length === 0) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {

        const results = new Array(promises.length);
        let completed = 0;

        promises.forEach((pro, index) => {

            Promise.resolve(pro)
                .then((value) => {

                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })
                .catch((err) => {
                    reject(err);
                });

        });

    });

}


const users = [
    { id: 1, name: "Sai" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "John" }
];

const orders = [
    {
        id: 101,
        userId: 1,
        items: [
            { product: "Laptop", price: 50000, qty: 1 },
            { product: "Mouse", price: 1000, qty: 2 }
        ]
    },
    {
        id: 102,
        userId: 2,
        items: [
            { product: "Laptop", price: 50000, qty: 1 }
        ]
    },
    {
        id: 103,
        userId: 1,
        items: [
            { product: "Keyboard", price: 2000, qty: 1 }
        ]
    }
];

async function getuser(id) {
    return users.find((u) => u.id === id);
}


async function getOrders(userId) {
    try {
        const user = await getuser(userId);

        const userOrders = orders.filter((o) => o.userId === userId);

        const res = userOrders.reduce((acc, val) => {

            acc.totalOrders = userOrders.length;
            acc.totalAmount += val.items.reduce((a, c) => a += c.price * c.qty, 0);

            return acc;

        }, { userId: user.id, name: user.name, totalOrders: 0, totalAmount: 0 });

        return res;
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserOrders(ids) {
    try {
        const mappingIds = ids.map((id) => getOrders(id));

        const results = await Promise.allSettled(mappingIds);

        const mapped = results.filter((d) => d.status === 'fulfilled').map((d) => d.value);

        return mapped;

    } catch (error) {
        throw error;
    }
}

fetchUserOrders([1, 2, 3]).then((res) => {

    console.log(res);
})





