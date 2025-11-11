import React from "react";

const Java = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-8">
        Complete Java Programming Overview
      </h1>

      {/* 1. Introduction to Java */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">1. Introduction to Java</h2>
        <p><strong>History:</strong> Developed by James Gosling at Sun Microsystems in 1995.</p>
        <p><strong>Features:</strong></p>
        <ul className="list-disc ml-5">
          <li>Object-Oriented Programming (OOP)</li>
          <li>Platform Independent (Write Once, Run Anywhere)</li>
          <li>Automatic memory management (Garbage Collection)</li>
          <li>Rich Standard Library</li>
        </ul>
        <p><strong>Applications:</strong></p>
        <ul className="list-disc ml-5">
          <li>Web and mobile applications</li>
          <li>Enterprise applications</li>
          <li>Embedded systems</li>
          <li>Game development</li>
        </ul>
      </section>

      {/* 2. Java Program Structure */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">2. Java Program Structure</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</pre>
        <p><strong>Components:</strong></p>
        <ul className="list-disc ml-5">
          <li><code>class</code> – defines a class</li>
          <li><code>main()</code> – entry point of a Java program</li>
          <li>Statements – executable code</li>
          <li>Comments – <code>//</code> for single line, <code>/* */</code> for multi-line</li>
        </ul>
      </section>

      {/* 3. Data Types and Variables */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">3. Data Types and Variables</h2>
        <p><strong>Primitive data types:</strong> byte, short, int, long, float, double, char, boolean</p>
        <p><strong>Reference types:</strong> Objects, Arrays, Strings</p>
        <p><strong>Variable declaration & initialization:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int age = 25;
float salary = 4500.50f;
char grade = 'A';
boolean isPassed = true;
String name = "Sanchay";`}</pre>
      </section>

      {/* 4. Constants and Literals */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">4. Constants and Literals</h2>
        <p><strong>Constants:</strong> Use <code>final</code> keyword</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`final double PI = 3.14159;
final int DAYS_IN_WEEK = 7;`}</pre>
        <p><strong>Literals:</strong> Integer, floating-point, character, string, boolean</p>
      </section>

      {/* 5. Operators */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">5. Operators</h2>
        <ul className="list-disc ml-5">
          <li>Arithmetic: + - * / %</li>
          <li>Relational: == != &gt; &lt; &gt;= &lt;=</li>
          <li>Logical: && || !</li>
          <li>Bitwise: &amp; | ^ ~ &lt;&lt; &gt;&gt;</li>
          <li>Assignment: = += -= *= /= %=</li>
          <li>Increment/Decrement: ++ --</li>
          <li>Ternary: condition ? expr1 : expr2</li>
        </ul>
      </section>

      {/* 6. Input/Output */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">6. Input/Output</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Enter a number: ");
int a = sc.nextInt();
System.out.println("You entered: " + a);`}</pre>
      </section>

      {/* 7. Control Structures */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">7. Control Structures</h2>
        <p><strong>a) Decision Making:</strong> if, if-else, else if, switch</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`if(a>0) { /* code */ }
switch(choice) { case 1: /* code */ break; }`}</pre>
        <p><strong>b) Loops:</strong> for, while, do-while, enhanced for loop</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`for(int i=0;i<5;i++){ System.out.println(i); }
while(condition){ /* code */ }
do{ /* code */ }while(condition);
for(String s : names){ System.out.println(s); }`}</pre>
        <p><strong>c) Jump Statements:</strong> break, continue, return</p>
      </section>

      {/* 8. Functions / Methods */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">8. Methods</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`public int add(int a, int b){
    return a + b;
}`}</pre>
        <p><strong>Method Overloading:</strong> Same method name, different parameters</p>
        <p><strong>Recursion:</strong> A method calling itself</p>
      </section>

      {/* 9. Arrays and Strings */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">9. Arrays and Strings</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int arr[] = {1,2,3,4,5};
int matrix[][] = {{1,2,3},{4,5,6}};
String name = "Sanchay";`}</pre>
      </section>

      {/* 10. Object-Oriented Programming */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">10. Object-Oriented Programming</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student {
    String name;
    int age;
    void display(){
        System.out.println(name + " " + age);
    }
}

Student s = new Student();
s.name = "Sanchay";
s.age = 22;
s.display();`}</pre>
      </section>

      {/* 11. Constructors & Destructors */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">11. Constructors</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Student {
    Student(){
        System.out.println("Object Created");
    }
}

Student s = new Student();`}</pre>
      </section>

      {/* 12. Inheritance */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">12. Inheritance</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Parent { }
class Child extends Parent { }`}</pre>
      </section>

      {/* 13. Polymorphism */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">13. Polymorphism</h2>
        <p>Compile-time (Method Overloading) & Runtime (Method Overriding)</p>
      </section>

      {/* 14. Encapsulation & Access Specifiers */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">14. Encapsulation & Access Specifiers</h2>
        <p>Use <code>private, public, protected</code> to control access and provide getter/setter methods.</p>
      </section>

      {/* 15. Interfaces & Abstract Classes */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">15. Interfaces & Abstract Classes</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`interface Animal {
    void sound();
}

abstract class Bird {
    abstract void fly();
}`}</pre>
      </section>

      {/* 16. Exception Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">16. Exception Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`try {
    int a = 5/0;
} catch (ArithmeticException e){
    System.out.println(e.getMessage());
} finally {
    System.out.println("Finally block");
}`}</pre>
      </section>

      {/* 17. Generics */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">17. Generics</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);`}</pre>
      </section>

      {/* 18. Collections Framework */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">18. Collections Framework</h2>
        <ul className="list-disc ml-5">
          <li>List (ArrayList, LinkedList)</li>
          <li>Set (HashSet, TreeSet)</li>
          <li>Map (HashMap, TreeMap)</li>
          <li>Queue (PriorityQueue, LinkedList)</li>
        </ul>
      </section>

      {/* 19. File Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">19. File Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`import java.io.*;

FileWriter fw = new FileWriter("file.txt");
fw.write("Hello");
fw.close();

FileReader fr = new FileReader("file.txt");
int i;
while((i = fr.read()) != -1){
    System.out.print((char)i);
}
fr.close();`}</pre>
      </section>

      {/* 20. Debugging & Best Practices */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">20. Debugging & Best Practices</h2>
        <ul className="list-disc ml-5">
          <li>Use meaningful variable names and comments</li>
          <li>Indent code properly</li>
          <li>Use proper exception handling</li>
          <li>Follow Java naming conventions</li>
        </ul>
      </section>

      {/* 21. Standard Libraries */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-700">21. Standard Libraries</h2>
        <ul className="list-disc ml-5">
          <li><code>java.lang</code> – Core classes</li>
          <li><code>java.util</code> – Utility classes (Collections, Date, Scanner)</li>
          <li><code>java.io</code> – Input/output</li>
          <li><code>java.math</code> – Math classes</li>
          <li><code>java.time</code> – Date and Time API</li>
        </ul>
      </section>

    </div>
  );
};

export default Java;
