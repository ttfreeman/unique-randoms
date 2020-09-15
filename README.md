# unique-randoms

This is a Nodejs program for generating unique random numbers. In general, there are at least two methods to create an array of unique random numbers::

1. shuffling a predefined array,
2. using a loop to push individually generated random numbers into an array while making sure they don't repeat.

I have tried to avoid more advanced topics such as probability distributions of random numbers and such but I have incorporated a method using seeds for reproducible tests.

## Installation

Once you have downloaded and changed the directory into `unique-randoms` directory, use the package manager [npm](https://www.npmjs.com/) to install the dependancies. To do so, run the following command from inside the `unique-randoms` directory in the terminal:

```bash
cd unique-randoms

npm install
```

## Usage

I have commented out printing the output arrays and once you run `node index.js` it will only print the execution times for different methods. Of course, you can change that if you want to see the output array. So, while still inside the `unique-randoms` directory, run the following command in the terminal:

```bash
node index.js
```

## Results

I have used three approaches, 1) seed-less shuffle, based on lodash (\_.shuffle()), 2) shuffle-seed method using an arbitrary seed to be able to reproduce the random set, and 3) a loop method using Java-script Math.random() method. Following OOP principals, the methods are implemented in a Class that is imported into index.js (so two javascript files). From a computational point of view, the execution time and memory usage are the most important factors to consider. The table blow compares the execution time for three methods:

- lodash: 2.084ms
- shuffle-seed: 13.234ms
- loop: 348.239ms

From the results above, lodash is apparently the fastest performance and loop method significantly slower. The difference, however, wouldn't be as big for smaller arrays and it would even be greater for larger array. While shuffle methods are faster, they require the array to be stored in the browser (for frontend javascript) and this may cause issues for the browser memory. So off-loading the work into a background thread might be an option or backend process if fetching the data is not going to be an issue. Other consideration would be the network ingress and egress.

## Test

I have not added unit tests to the project yet.

## Contact

Please feel free to send your feedback at this Email address: [ttfreeman@gmail.com](mailto:ttfreeman@gmail.com) .
