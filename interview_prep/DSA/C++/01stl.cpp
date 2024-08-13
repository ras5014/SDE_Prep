#include <bits/stdc++.h>
using namespace std;

int sum(int a, int b)
{
    return a + b;
}

int main()
{
    int num1, num2;
    cout << "Enter num1: ";
    cin >> num1;
    cout << "Enter num2: ";
    cin >> num2;

    cout << num1 << " + " << num2 << " = " << sum(num1, num2) << endl;
}