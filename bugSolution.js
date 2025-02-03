function handleData(data) {
  // Problematic code (bug.js):
  // const name = data.name; // Throws error if data.name is undefined
  // const city = data.address.city; // Throws error if data.address or data.address.city is undefined

  // Solution (bugSolution.js):
  const name = data.name ?? 'Unknown'; // Use default value if name is undefined
  const city = data.address?.city ?? 'Unknown'; // Use optional chaining and default value

  console.log('Name:', name);
  console.log('City:', city);
}

// Example usage
const data1 = { name: 'John Doe', address: { city: 'New York' } };
const data2 = { address: {} };
const data3 = {};

handleData(data1);
handleData(data2);
handleData(data3);