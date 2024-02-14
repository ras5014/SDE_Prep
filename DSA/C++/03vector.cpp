#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v = {1, 2, 34};
    for (auto it : v)
        cout << it << " ";
    v.push_back(12);
    cout << endl;
    for (auto it : v)
        cout << it << " ";
    cout << endl;
    cout << v.back() << endl;
    cout << v.front() << endl;
    sort(v.begin(), v.end());
    for (auto it : v)
        cout << it << " ";
    cout << endl;
    v.pop_back();
    v.erase(v.begin(), v.begin() + 2);
    for (auto it : v)
        cout << it << " ";
    cout << endl;

    v.insert(v.begin() + 1, 2, 10);
    for (auto it : v)
        cout << it << " ";
    cout << endl;
    cout << v.size() << endl;
    // v.empty(); // return true if vector is empty
    // v.clear(); // Erases all elements
    // v1.swap(v2); // Swaps the vectors
}