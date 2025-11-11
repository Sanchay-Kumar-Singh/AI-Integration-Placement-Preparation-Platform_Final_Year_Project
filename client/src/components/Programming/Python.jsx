import React from "react";

const Python = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Complete Python Programming Overview
      </h1>

      {/* 1. Introduction to Python */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">1. Introduction to Python</h2>
        <p><strong>History:</strong> Developed by Guido van Rossum in 1991. High-level, interpreted, and general-purpose language.</p>
        <p><strong>Features:</strong></p>
        <ul className="list-disc ml-5">
          <li>Easy to read and write</li>
          <li>Interpreted and dynamically typed</li>
          <li>Supports multiple paradigms: procedural, object-oriented, functional</li>
          <li>Large standard library and community support</li>
        </ul>
        <p><strong>Applications:</strong></p>
        <ul className="list-disc ml-5">
          <li>Web development (Django, Flask)</li>
          <li>Data Science and Machine Learning (Pandas, NumPy, TensorFlow)</li>
          <li>Automation and scripting</li>
          <li>Game development (Pygame)</li>
        </ul>
      </section>

      {/* 2. Python Program Structure */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">2. Python Program Structure</h2>
        <p><strong>Basic Structure:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`# This is a comment
print("Hello, World!")`}</pre>
        <p>No main function is required, but you can use <code>if __name__ == "__main__":</code> for script execution.</p>
      </section>

      {/* 3. Data Types and Variables */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">3. Data Types and Variables</h2>
        <p><strong>Primitive data types:</strong> int, float, complex, bool, str</p>
        <p><strong>Collection types:</strong> list, tuple, set, dict</p>
        <p><strong>Variable declaration & initialization:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`age = 25
salary = 4500.50
grade = 'A'
is_passed = True
name = "Sanchay"`}</pre>
      </section>

      {/* 4. Constants and Literals */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">4. Constants and Literals</h2>
        <p>Python does not have built-in constants; conventionally, uppercase variable names are used:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`PI = 3.14159
DAYS_IN_WEEK = 7`}</pre>
      </section>

      {/* 5. Operators */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">5. Operators</h2>
        <ul className="list-disc ml-5">
          <li>Arithmetic: + - * / % ** //</li>
          <li>Relational: == != &gt; &lt; &gt;= &lt;=</li>
          <li>Logical: and, or, not</li>
          <li>Bitwise: &amp; | ^ ~ &lt;&lt; &gt;&gt;</li>
          <li>Assignment: = += -= *= /= %= **= //=</li>
          <li>Membership: in, not in</li>
          <li>Identity: is, is not</li>
        </ul>
      </section>

      {/* 6. Input/Output */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">6. Input/Output</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`a = int(input("Enter a number: "))
print("You entered:", a)`}</pre>
      </section>

      {/* 7. Control Structures */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">7. Control Structures</h2>
        <p><strong>a) Decision Making:</strong> if, if-else, elif</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`if a > 0:
    print("Positive")
elif a == 0:
    print("Zero")
else:
    print("Negative")`}</pre>
        <p><strong>b) Loops:</strong> for, while</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`for i in range(5):
    print(i)

while a > 0:
    a -= 1
    print(a)`}</pre>
        <p><strong>c) Jump Statements:</strong> break, continue, pass</p>
      </section>

      {/* 8. Functions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">8. Functions</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`def add(a, b):
    return a + b

print(add(5, 3))`}</pre>
        <p><strong>Default arguments, keyword arguments, variable-length arguments</strong></p>
        <p><strong>Recursion:</strong> A function calling itself</p>
      </section>

      {/* 9. Data Structures */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">9. Data Structures</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`# List
lst = [1, 2, 3]

# Tuple
tup = (1, 2, 3)

# Set
st = {1, 2, 3}

# Dictionary
d = {'name': 'Sanchay', 'age': 25}`}</pre>
      </section>

      {/* 10. Object-Oriented Programming */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">10. Object-Oriented Programming</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)

s = Student("Sanchay", 25)
s.display()`}</pre>
      </section>

      {/* 11. Inheritance */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">11. Inheritance</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    pass

c = Child()
c.greet()`}</pre>
      </section>

      {/* 12. Polymorphism */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">12. Polymorphism</h2>
        <p>Method Overriding and Operator Overloading</p>
      </section>

      {/* 13. Encapsulation */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">13. Encapsulation</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student:
    def __init__(self, name):
        self.__name = name   # private attribute

    def get_name(self):
        return self.__name

s = Student("Sanchay")
print(s.get_name())`}</pre>
      </section>

      {/* 14. Exception Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">14. Exception Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`try:
    a = 5 / 0
except ZeroDivisionError as e:
    print(e)
finally:
    print("Finished")`}</pre>
      </section>

      {/* 15. Modules and Packages */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">15. Modules and Packages</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`# Importing a module
import math
print(math.sqrt(16))

# From module import
from math import sqrt
print(sqrt(25))`}</pre>
      </section>

      {/* 16. File Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">16. File Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`# Writing to a file
with open("file.txt", "w") as f:
    f.write("Hello World")

# Reading from a file
with open("file.txt", "r") as f:
    print(f.read())`}</pre>
      </section>

      {/* 17. Lambda Functions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">17. Lambda Functions</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`square = lambda x: x**2
print(square(5))`}</pre>
      </section>

      {/* 18. Decorators */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">18. Decorators</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@decorator
def say_hello():
    print("Hello")

say_hello()`}</pre>
      </section>

      {/* 19. Debugging & Best Practices */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">19. Debugging & Best Practices</h2>
        <ul className="list-disc ml-5">
          <li>Use meaningful variable names and comments</li>
          <li>Indent code properly (Python is indentation sensitive)</li>
          <li>Handle exceptions properly</li>
          <li>Write modular and reusable code</li>
        </ul>
      </section>

      {/* 20. Standard Libraries */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">20. Standard Libraries</h2>
        <ul className="list-disc ml-5">
          <li><code>math</code> – Mathematical operations</li>
          <li><code>os</code> – Operating system functions</li>
          <li><code>sys</code> – System-specific parameters</li>
          <li><code>random</code> – Random number generation</li>
          <li><code>datetime</code> – Date and time operations</li>
        </ul>
      </section>

    </div>
  );
};

export default Python;
