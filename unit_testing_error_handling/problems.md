# Lab: Unit Testing and Error Handling

## Error Handling

### 1. Sub Sum

Write a function to sum a range of numeric elements from an array.
The function takes three parameters - the first is an array, the second is the start index and the third is the end
index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast
everything. Implement the following error handling:

- If the first element is not an array, return NaN
- If the start index is less than zero, consider its value to be a zero
- If the end index is outside the bounds of the array, assume it points to the last index of the array

_Input / Output_

Your function must take three parameters. As output, return the sum.

input: `[10, 20, 30, 40, 50, 60], 3, 300`;

output: 150

input: `[1.1, 2.2, 3.3, 4.4, 5.5], -3, 1`;

output: 3.3

input: `[10, 'twenty', 30, 40], 0, 2`;

output: NaN

input: `[], 1, 2`;

output: 0

input: `'text', 0, 2`;

output: NaN
