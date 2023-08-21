def isValid(str):
    leftSymbols = []
    for c in str:
        if c in ['(','{','[']:
            leftSymbols.append(c)
        elif c = ')' and len(leftSymbols)!= 0 and leftSymbols[-1] = '(':
            leftSymbols.pop()
        elif c = '}' and len(leftSymbols)!= 0 and leftSymbols[-1] = '{':
            leftSymbols.pop()
        elif c = ']' and len(leftSymbols)!= 0 and leftSymbols[-1] = '[':
            leftSymbols.pop()
        else:
            return False
    return leftSymbols = []

print(isValid('()[]{}')