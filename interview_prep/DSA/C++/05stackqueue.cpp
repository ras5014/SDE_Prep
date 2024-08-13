#include <bits/stdc++.h>
using namespace std;

int main()
{
    stack<int> st;
    st.push(1);
    st.push(2);
    st.push(3);
    cout << st.top() << endl;
    st.pop();

    cout << endl;

    queue<int> q;
    q.push(1);
    q.push(2);
    q.front();
    q.back();
}