#Kaushik Narasimhan
#kaushikn06@vt.edu
#2/12/2025

def wannabe_palindrome(substring):
    
    n = len(substring)
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    def palindrome(s):
        return s == s[::-1]
    
    for i in range(n,0,-1):
        for j in range(n-i+1):
            end = j + i - 1
            if palindrome(substring[j:j+i]):
                return i
            
            if j >= 3:
                for k in range(j + 1, end):
                    possibility = substring[j:k] + substring[k+1:end+1]
                    if possibility  == possibility[::-1]:
                        return i
    return 1
    