def hannou(n, A, B, C):  # A是起始柱，B是中间柱，C是目标柱
    if n == 1:
        print(A, "->", C)
    else:
        hannou(n-1, A, C, B)
        print(A, "->", C)
        hannou(n-1, B, A, C)


hannou(5, 'A', 'B', 'C')
