/*Count pairs in an array whose absolute difference is divisible by K

Given an array arr[] and a positive integer K. The task is to count the total number of pairs in the array whose absolute difference is divisible by K. 

Examples: 

Input: arr[] = {1, 2, 3, 4}, K = 2 
Output: 2 
Explanation: 
Total 2 pairs exists in the array with absolute difference divisible by 2. 
The pairs are: (1, 3), (2, 4).

Input: arr[] = {3, 3, 3}, K = 3 
Output: 3 
Explanation: 
Total 3 pairs exists in this array with absolute difference divisible by 3. 
The pairs are: (3, 3), (3, 3), (3, 3). 


*/






function countPairs(arr, n, k) 
	{
var i, j, cnt = 0;

		for (let i = 0; i < n -1; i++) {
			for (let j = i+1; j < n; j++) {
				if ((arr[i] - arr[j] + k) % k == 0)
					cnt += 1;
			}
		}

console.log(cnt + "\n");	
	}
var arr = [6,6,6];
var k = 3;
var n = arr.length;
countPairs(arr, n, k);