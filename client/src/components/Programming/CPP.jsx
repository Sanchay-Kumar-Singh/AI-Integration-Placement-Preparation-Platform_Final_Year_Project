import React from "react";

const CPP = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Complete C++ Programming Overview
      </h1>

      {/* 1. Introduction to C++ */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">1. Introduction to C++</h2>
        <p><strong>History:</strong> Developed by Bjarne Stroustrup at Bell Labs in 1983. It is an extension of C supporting Object-Oriented Programming (OOP).</p>
        <p><strong>Features:</strong></p>
        <ul className="list-disc ml-5">
          <li>Object-Oriented Programming (Classes and Objects)</li>
          <li>Supports both procedural and generic programming</li>
          <li>Rich Standard Library (STL)</li>
          <li>Low-level memory manipulation</li>
        </ul>
        <p><strong>Applications:</strong></p>
        <ul className="list-disc ml-5">
          <li>System software and drivers</li>
          <li>Game development</li>
          <li>High-performance applications</li>
          <li>Embedded systems</li>
        </ul>
      </section>

      {/* 2. C++ Program Structure */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">2. C++ Program Structure</h2>
        <p><strong>Basic Structure:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#include <iostream>
using namespace std;

int main() {
    // code
    return 0;
}`}</pre>
        <p><strong>Components:</strong></p>
        <ul className="list-disc ml-5">
          <li>Header files (<code>#include &lt;iostream&gt;</code>)</li>
          <li><code>main()</code> function: Entry point</li>
          <li>Statements: Executable instructions</li>
          <li>Comments (<code>//</code> or <code>/* */</code>)</li>
        </ul>
      </section>

      {/* 3. Data Types and Variables */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">3. Data Types and Variables</h2>
        <p><strong>Primitive data types:</strong> int, float, double, char, bool</p>
        <p><strong>Derived types:</strong> arrays, pointers, references, strings</p>
        <p><strong>Modifiers:</strong> short, long, signed, unsigned</p>
        <p><strong>Variable declaration & initialization:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int age = 25;
float salary = 4500.50;
char grade = 'A';
bool isPassed = true;`}</pre>
      </section>

      {/* 4. Constants and Literals */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">4. Constants and Literals</h2>
        <p><strong>Constants:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#define PI 3.14159
const int DAYS_IN_WEEK = 7;`}</pre>
        <p><strong>Literals:</strong> Integer, floating-point, character, string, boolean</p>
      </section>

      {/* 5. Operators */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">5. Operators</h2>
        <ul className="list-disc ml-5">
          <li>Arithmetic: + - * / %</li>
          <li>Relational: == != &gt; &lt; &gt;= &lt;=</li>
          <li>Logical: && || !</li>
          <li>Bitwise: &amp; | ^ ~ &lt;&lt; &gt;&gt;</li>
          <li>Assignment: = += -= *= /= %=</li>
          <li>Increment/Decrement: ++ --</li>
          <li>Ternary: condition ? expr1 : expr2</li>
          <li>New in C++: Scope resolution (::), Member access (.), Pointer to member (-*)</li>
        </ul>
      </section>

      {/* 6. Input/Output */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">6. Input/Output</h2>
        <p><strong>Standard input/output:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int a;
cout << "Enter a number: ";
cin >> a;
cout << "You entered: " << a << endl;`}</pre>
      </section>

      {/* 7. Control Structures */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">7. Control Structures</h2>
        <p><strong>a) Decision Making:</strong> if, if-else, else if, switch</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`if(a>0) { /* code */ }
switch(choice) { case 1: /* code */ break; }`}</pre>
        <p><strong>b) Loops:</strong> for, while, do-while, range-based for loop</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`for(int i=0;i<5;i++){ cout << i << endl; }
while(condition){ /* code */ }
do{ /* code */ }while(condition);
for(auto x : arr){ cout << x; }`}</pre>
        <p><strong>c) Jump Statements:</strong> break, continue, goto, return</p>
      </section>

      {/* 8. Functions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">8. Functions</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`returnType functionName(parameters){
   // code
   return value;
}

int add(int a, int b){
    return a + b;
}`}</pre>
        <p><strong>Recursion:</strong> A function calling itself</p>
        <p><strong>Function Overloading:</strong> Multiple functions with same name but different parameters</p>
      </section>

      {/* 9. Arrays and Strings */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">9. Arrays and Strings</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int arr[5] = {1,2,3,4,5};
int matrix[2][3] = {{1,2,3},{4,5,6}};
string name = "Sanchay";`}</pre>
      </section>

      {/* 10. Pointers and References */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">10. Pointers and References</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int x = 10;
int *ptr = &x;   // pointer
int &ref = x;    // reference
cout << *ptr << " " << ref;`}</pre>
      </section>

      {/* 11. Object-Oriented Programming */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">11. Object-Oriented Programming</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student {
public:
    string name;
    int age;
    void display(){
        cout << name << " " << age;
    }
};

Student s;
s.name = "Sanchay";
s.age = 22;
s.display();`}</pre>
      </section>

      {/* 12. Constructors & Destructors */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">12. Constructors & Destructors</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student {
public:
    Student(){ cout << "Object Created"; }
    ~Student(){ cout << "Object Destroyed"; }
};`}</pre>
      </section>

      {/* 13. Inheritance */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">13. Inheritance</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Parent { };
class Child : public Parent { }; // Single Inheritance`}</pre>
      </section>

      {/* 14. Polymorphism */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">14. Polymorphism</h2>
        <p>Compile-time (Function Overloading) & Runtime (Virtual Functions)</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Base {
public:
    virtual void display(){ cout << "Base"; }
};
class Derived : public Base {
public:
    void display(){ cout << "Derived"; }
};`}</pre>
      </section>

      {/* 15. Encapsulation & Access Specifiers */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">15. Encapsulation & Access Specifiers</h2>
        <p>public, private, protected keywords to control access</p>
      </section>

      {/* 16. Templates */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">16. Templates</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`template <typename T>
T add(T a, T b){
    return a + b;
}`}</pre>
      </section>

      {/* 17. Exception Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">17. Exception Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`try {
    int a = 5/0;
} catch (exception &e) {
    cout << e.what();
}`}</pre>
      </section>

      {/* 18. Standard Template Library (STL) */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">18. STL</h2>
        <p>Containers, Iterators, Algorithms, Function Objects</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#include <vector>
#include <algorithm>
vector<int> v = {5,2,1};
sort(v.begin(), v.end());`}</pre>
      </section>

      {/* 19. File Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">19. File Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#include <fstream>
ofstream fout("file.txt");
fout << "Hello";
fout.close();

ifstream fin("file.txt");
string str;
fin >> str;
fin.close();`}</pre>
      </section>

      {/* 20. Namespaces */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">20. Namespaces</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`using namespace std;
namespace MySpace {
    int a;
}`}</pre>
      </section>

      {/* 21. Debugging & Best Practices */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">21. Debugging & Best Practices</h2>
        <ul className="list-disc ml-5">
          <li>Use meaningful variable names and comments</li>
          <li>Use proper indentation</li>
          <li>Check pointer dereferencing and memory leaks</li>
          <li>Test all cases thoroughly</li>
        </ul>
      </section>

      {/* 22. Standard Libraries */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">22. Standard Libraries</h2>
        <ul className="list-disc ml-5">
          <li><code>&lt;iostream&gt;</code> – Input/Output</li>
          <li><code>&lt;string&gt;</code> – String handling</li>
          <li><code>&lt;vector&gt;</code> – Dynamic arrays</li>
          <li><code>&lt;algorithm&gt;</code> – Algorithms</li>
          <li><code>&lt;map&gt;</code> – Key-value mapping</li>
          <li><code>&lt;fstream&gt;</code> – File handling</li>
        </ul>
      </section>

    </div>
  );
};

export default CPP;
