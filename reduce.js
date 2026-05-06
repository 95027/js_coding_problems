// const orders = [
//   { id: 1, userId: 101, product: "laptop", amount: 50000 },
//   { id: 2, userId: 102, product: "mobile", amount: 20000 },
//   { id: 3, userId: 101, product: "laptop", amount: 50000 },
//   { id: 4, userId: 103, product: "laptop", amount: 50000 },
//   { id: 5, userId: 102, product: "mobile", amount: 20000 },
//   { id: 6, userId: 101, product: "tablet", amount: 15000 },
// ];

// // {
// //   totalRevenue: 185000,
// //   uniqueUsers: 3,
// //   products: {
// //     laptop: { count: 3, revenue: 150000 },
// //     mobile: { count: 2, revenue: 40000 },
// //     tablet: { count: 1, revenue: 15000 }
// //   },
// //   userOrders: {
// //     101: 3,
// //     102: 2,
// //     103: 1
// //   }
// // }

// const res = orders.reduce((acc, val, i, self) => {
//   acc.totalRevenue = (acc.totalRevenue || 0) + val.amount;
//   acc.userOrders = acc.userOrders || {};
//   acc.uniqueUsers = acc.uniqueUsers || 0;
//   acc.products = acc.products || {};
//   acc.seen = acc.seen || new Set();

//   acc.userOrders[val.userId] = (acc.userOrders[val.userId] || 0) + 1;
//   // if (self.findIndex((v) => v.userId == val.userId) == i) {
//   //   acc.uniqueUsers += 1;
//   // }

//   if (!acc.seen.has(val.userId)) {
//     acc.seen.add(val.userId);
//     acc.uniqueUsers += 1;
//   }

//   acc.products[val.product] = acc.products[val.product] || {
//     count: 0,
//     revenue: 0,
//   };
//   acc.products[val.product].count = acc.products[val.product].count + 1;
//   acc.products[val.product].revenue =
//     acc.products[val.product].revenue + val.amount;
//   return acc;
// }, {});

// delete res.seen;

// console.log(res);

const orders = [
  {
    id: 1,
    userId: 101,
    product: "laptop",
    amount: 50000,
    status: "completed",
    createdAt: "2026-05-01",
  },
  {
    id: 2,
    userId: 102,
    product: "mobile",
    amount: 20000,
    status: "cancelled",
    createdAt: "2026-05-01",
  },
  {
    id: 3,
    userId: 101,
    product: "laptop",
    amount: 50000,
    status: "completed",
    createdAt: "2026-05-02",
  },
  {
    id: 4,
    userId: 103,
    product: "tablet",
    amount: 15000,
    status: "completed",
    createdAt: "2026-05-02",
  },
  {
    id: 5,
    userId: 102,
    product: "mobile",
    amount: 20000,
    status: "completed",
    createdAt: "2026-05-02",
  },
  {
    id: 6,
    userId: 101,
    product: "tablet",
    amount: 15000,
    status: "pending",
    createdAt: "2026-05-03",
  },
];

// {
//   "2026-05-01": {
//     revenue: 50000,
//     orders: 1,
//     users: 1
//   },
//   "2026-05-02": {
//     revenue: 85000,
//     orders: 3,
//     users: 3
//   }
// }

const res = orders.reduce((acc, val, i, self) => {
  if (val.status === "completed") {
    acc[val.createdAt] = acc[val.createdAt] || {
      revenue: 0,
      orders: 0,
      users: 0,
    };
    acc[val.createdAt].seen = acc[val.createdAt].seen || new Set();

    acc[val.createdAt].revenue = acc[val.createdAt].revenue + val.amount;
    acc[val.createdAt].orders = acc[val.createdAt].orders + 1;
    if (!acc[val.createdAt].seen.has(val.userId)) {
      acc[val.createdAt].seen.add(val.userId);
      acc[val.createdAt].users = acc[val.createdAt].users + 1;
    }
  }
  return acc;
}, {});

for (let key in res) {
  delete res[key].seen;
}

console.log(res);
