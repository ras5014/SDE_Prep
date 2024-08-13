// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

class ListNode
{
public:
    int value;
    ListNode *next;

    ListNode(int value, ListNode *next = nullptr)
    {
        this->value = value;
        this->next = next;
    }
};

class LinkedList
{
public:
    ListNode *head;

    LinkedList()
    {
        head = nullptr;
    }

    void insertInfront(int value)
    {
        ListNode *newNode = new ListNode(value, head);
        head = newNode;
    }

    void deleteLastNode()
    {
        if (head == nullptr)
            return;
        if (head->next == nullptr)
        {
            head = nullptr;
            return;
        }
        ListNode *temp = head;
        while (temp->next->next != nullptr)
        {
            temp = temp->next;
        }
        temp->next = nullptr;
    }

    void display()
    {
        ListNode *temp = head;
        while (temp)
        {
            cout << temp->value << " -> ";
            temp = temp->next;
        }
        cout << "null" << endl;
    }

    ListNode *findMiddle()
    {
        if (head == nullptr || head->next == nullptr)
            return head;
        ListNode *slow = head, *fast = head;

        while (fast && fast->next)
        {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }

    void reverse()
    {
        if (head == nullptr || head->next == nullptr)
            return;
        ListNode *prev = nullptr, *cur = head, *next;

        while (cur)
        {
            next = cur->next;
            cur->next = prev;
            prev = cur;
            cur = next;
        }
        head = prev;
    }
};

int main()
{
    LinkedList *list = new LinkedList();

    for (int i = 10; i >= 1; i--)
    {
        list->insertInfront(i);
    }

    list->display();
    list->deleteLastNode();

    list->display();

    cout << list->head->value << endl;

    ListNode *mid = list->findMiddle();
    cout << mid->value << endl;

    list->reverse();
    list->display();
}