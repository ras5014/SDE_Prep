#include <bits/stdc++.h>
using namespace std;

int main()
{
    set<int> s;
    s.insert(3);
    s.insert(2);
    s.insert(1);
    s.insert(2);
    for (auto it : s)
        cout << it << " ";
    cout << endl;
}