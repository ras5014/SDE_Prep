#include <bits/stdc++.h>
using namespace std;

void print(int n)
{
    // Base case
    if (n == 0)
    {
        return;
    }

    print(n - 1);
    cout << n << " ";
}

int main()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;

    print(n);
    cout << endl;
}