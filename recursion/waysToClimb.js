// Given a staircase of n steps, and a set of possible steps 
// that we can climb at a time named possibleSteps, create a function 
// that returns the number of ways that a person can take 
// to reach the top of the staircase.

// Example 1:
// Input: n = 5, possibleSteps = {1, 2}
// Output: 8
// Explanation: possible ways to reach the top are: 1 1 1 1 1, 
// 1 1 1 2, 1 1 2 1, 1 2 1 1, 2 1 1 1, 1 2 2, 2 1 2, 2 2 1

// Example 2:
// Input: n = 7, possibleSteps = {2, 3, 4}
// Output: 5
// Explanation: possible ways to reach the top are: 2 2 3, 2 3 2, 
// 3 2 2, 3 4, 4 3

// Example 3:
// Input: n = 10, possibleSteps = {2, 4, 5, 8}
// Output: 11
// Explanation: possible ways to reach the top are: 2 2 2 2 2, 
// 2 2 2 4, 2 2 4 2, 2 4 2 2, 4 2 2 2, 2 4 4, 4 2 4, 4 4 2, 5 5, 2 8, 8 2

// By using recursion:
// Time complexity: O(m^n)
// Spice complexity: O(n)

function waysToClimb(n, possibleSteps){
    if(n == 0) return 1;
    let ways = 0;
    for (let step of possibleSteps){
        if(n - steps >= 0){
            ways += waysToClimb(n - steps, possibleSteps);
        }
    }
    return ways
}