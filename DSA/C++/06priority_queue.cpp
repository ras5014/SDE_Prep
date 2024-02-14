#include <bits/stdc++.h>
using namespace std;

int main()
{
    priority_queue<int> pq; // Max heap
    pq.push(12);
    pq.push(5);
    pq.push(100);
    cout << pq.top() << endl;
    pq.pop();                 // 100 is removed
    cout << pq.top() << endl; // Now max is 12

    priority_queue<int, vector<int>, greater<int>> pq2; // Min heap
}