from math import perm
import sys
from itertools import permutations
N = int(input())

list = list(map(int, sys.stdin.readline().split()))
max_value = -1

for permutation in permutations(list, N):
    sum = 0
    for i in range(len(permutation)-1):
        sum += abs(permutation[i] - permutation[i+1])
    
    max_value = max(sum, max_value)
    
print(max_value)