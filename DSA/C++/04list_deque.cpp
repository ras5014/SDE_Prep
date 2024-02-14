#include <bits/stdc++.h>
using namespace std;

int main()
{

    // Lists
    list<int> ls = {1, 2, 3, 6};
    for (auto it : ls)
        cout << it << " ";
    cout << endl;
    // Lists gives both insertion and deletion at O(1) time at front & back
    ls.push_back(7);
    ls.push_front(12);
    for (auto it : ls)
        cout << it << " ";
    cout << endl;

    // Deque all O(1)
    cout << "Deque" << endl;
    deque<int> dq = {1, 2, 3, 6, 7};
    dq.push_back(8);
    dq.push_front(12);
    dq.pop_back();
    dq.pop_front();
    for (auto it : dq)
        cout << it << " ";
    cout << endl;
}