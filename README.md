# Firebase: Handling Nonexistent Properties in Fetched Documents

This repository demonstrates a common error when using the Firebase SDK and provides a solution to gracefully handle cases where fetched documents may have missing properties.

## The Problem

When retrieving data from Firestore or the Realtime Database, if you try to access a property that doesn't exist in a particular document, you'll get a runtime error.  This often happens due to inconsistent data structures in your database.

## The Solution

The solution involves using optional chaining (?.) and nullish coalescing (??) operators to safely access properties and provide default values when a property is undefined.

## Usage

Clone the repo and run the example code. The `bug.js` file shows the problematic code, and `bugSolution.js` shows how to fix it.

This solution enhances the robustness of your application, preventing unexpected crashes due to missing data.