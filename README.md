## Overview

This repository contains a collection of small JavaScript exercises and utilities demonstrating data structures, algorithms, and language concepts. Each script includes a header noting its purpose.

## Scripts

- `circularList.js`: Circular linked list with add and traversal.
- `classInheritance.js`: ES6 class inheritance and prototype extension.
- `countRepeatsWords.js`: Character frequency counter using reduce.
- `deepEqual.js`: Placeholder for deep equality utility (to be implemented).
- `duplicate.js`: Duplicates an array end-to-end.
- `eventLoops.js`: Event loop ordering demo with setTimeout and Promise.
- `functionalInheritance.js`: Prototypal inheritance via constructor functions.
- `graph.js`: Simple undirected weighted graph and minimal weight sketch.
- `invertArray.js`: Reverses an array via index arithmetic.
- `linkedList.js`: Singly linked list with add and traversal.
- `nonRepetableString.js`: Finds first non-repeating string in an array.
- `promiseAll.js`: Sequentially awaits an array of promises/values.
- `recursion.js`: Renders nested JSON-like tree to HTML string.
- `removeDuplicatesArray.js`: Removes duplicate elements from an array.
- `smallestDivisor.js`: Finds smallest divisor meeting threshold constraint.
- `sumMatrixDiagonals.js`: Sums diagonals of a square matrix.
- `uefaDataFiltering.js`: Aggregates UEFA 2015 matches; lists teams with 7 matches.

## xelivery

- `xelivery/data.js`: Mock data for couriers, packages, and statuses.
- `xelivery/index.js`: Assigns packages to couriers by capacity and flags delayed packages.

## Running

Most files are standalone. Run any script with Node:

```bash
node fileName.js
```

Some scripts (e.g., `uefaDataFiltering.js`) require dependencies like axios:

```bash
npm init -y
npm install axios
node uefaDataFiltering.js
```

