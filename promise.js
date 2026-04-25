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