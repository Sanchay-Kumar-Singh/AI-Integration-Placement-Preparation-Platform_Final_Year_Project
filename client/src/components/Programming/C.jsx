import React from "react";

const C = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Complete C Programming Overview
      </h1>

      {/* 1. Introduction */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">1. Introduction to C Programming</h2>
        <p><strong>History:</strong> Developed by Dennis Ritchie at Bell Labs in 1972. It’s a general-purpose, procedural language.</p>
        <p><strong>Features:</strong></p>
        <ul className="list-disc ml-5">
          <li>Simple and structured</li>
          <li>Fast execution (compiled language)</li>
          <li>Portability across platforms</li>
          <li>Low-level access to memory (via pointers)</li>
        </ul>
        <p><strong>Applications:</strong></p>
        <ul className="list-disc ml-5">
          <li>System programming (OS, compilers)</li>
          <li>Embedded systems</li>
          <li>Game development</li>
          <li>Database systems</li>
        </ul>
      </section>

      {/* 2. C Program Structure */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">2. C Program Structure</h2>
        <p><strong>Basic Structure:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#include <stdio.h>

int main() {
    // code
    return 0;
}`}</pre>
        <p><strong>Components:</strong></p>
        <ul className="list-disc ml-5">
          <li>Header files (<code>#include &lt;stdio.h&gt;</code>): Declarations for input/output functions</li>
          <li><code>main()</code> function: Entry point of every C program</li>
          <li>Statements: Executable instructions</li>
          <li>Comments (<code>//</code> or <code>/* */</code>): For readability</li>
        </ul>
      </section>

      {/* 3. Data Types and Variables */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">3. Data Types and Variables</h2>
        <p><strong>Primitive data types:</strong> int, float, double, char</p>
        <p><strong>Derived types:</strong> Arrays, pointers, structures, unions</p>
        <p><strong>Modifiers:</strong> short, long, signed, unsigned</p>
        <p><strong>Variable declaration & initialization:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int age = 25;
float salary = 4500.50;
char grade = 'A';`}</pre>
      </section>

      {/* 4. Constants and Literals */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">4. Constants and Literals</h2>
        <p><strong>Constants:</strong> Fixed values that cannot be changed.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#define PI 3.14159
const int DAYS_IN_WEEK = 7;`}</pre>
        <p><strong>Literals:</strong> Integer, float, character, string, or boolean constants.</p>
      </section>

      {/* 5. Operators */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">5. Operators</h2>
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
        <h2 className="text-2xl font-semibold text-purple-700">6. Input/Output</h2>
        <p><strong>Standard input/output functions:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int a;
printf("Enter a number: ");
scanf("%d", &a);
printf("You entered: %d", a);`}</pre>
        <p><strong>Format specifiers:</strong> %d, %f, %c, %s, %lf</p>
      </section>

      {/* 7. Control Structures */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">7. Control Structures</h2>
        <p><strong>a) Decision Making:</strong> if, if-else, else if, switch</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`if(a>0) { /* code */ }
switch(choice) { case 1: /* code */ break; }`}</pre>
        <p><strong>b) Loops:</strong> for, while, do-while</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`for(int i=0;i<5;i++){ printf("%d",i); }
while(condition){ /* code */ }
do{ /* code */ }while(condition);`}</pre>
        <p><strong>c) Jump Statements:</strong> break, continue, goto, return</p>
      </section>

      {/* 8. Functions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">8. Functions</h2>
        <p><strong>Purpose:</strong> Modular programming, code reuse</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`returnType functionName(parameters){
   // code
   return value;
}`}</pre>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int add(int a, int b){
    return a + b;
}`}</pre>
        <p><strong>Recursion:</strong> A function calling itself.</p>
      </section>

      {/* 9. Arrays */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">9. Arrays</h2>
        <p>One-dimensional arrays:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int arr[5] = {1,2,3,4,5};`}</pre>
        <p>Two-dimensional arrays:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int matrix[2][3] = {{1,2,3},{4,5,6}};`}</pre>
        <p>String as char array:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`char name[] = "Sanchay";`}</pre>
      </section>

      {/* 10. Strings */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">10. Strings</h2>
        <p>Manipulation using <code>&lt;string.h&gt;</code>:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#include <string.h>

char str1[20] = "Hello";
char str2[20] = "World";
strcat(str1,str2); // HelloWorld
strlen(str1);
strcpy(str2,str1);
strcmp(str1,str2);`}</pre>
      </section>

      {/* 11. Pointers */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">11. Pointers</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int x = 10;
int *ptr = &x;
printf("%d", *ptr);`}</pre>
        <p>Used for dynamic memory allocation, passing by reference, arrays, and strings.</p>
      </section>

      {/* 12. Structures and Unions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">12. Structures and Unions</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`struct Student{
    char name[50];
    int age;
    float marks;
};

union Data{
    int i;
    float f;
    char str[20];
};`}</pre>
      </section>

      {/* 13. Dynamic Memory Allocation */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">13. Dynamic Memory Allocation</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int *ptr = (int*)malloc(5 * sizeof(int));
free(ptr);`}</pre>
      </section>

      {/* 14. File Handling */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">14. File Handling</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`FILE *fp = fopen("data.txt","w");
fprintf(fp,"Hello World");
fclose(fp);`}</pre>
      </section>

      {/* 15. Preprocessor Directives */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">15. Preprocessor Directives</h2>
        <p>#include, #define, #ifdef, #ifndef, #undef, #pragma</p>
      </section>

      {/* 16. Type Casting */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">16. Type Casting</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int a = 10;
float b = (float)a;`}</pre>
      </section>

      {/* 17. Storage Classes */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">17. Storage Classes</h2>
        <ul className="list-disc ml-5">
          <li>auto – default local variable</li>
          <li>register – store in CPU register</li>
          <li>static – retains value between calls</li>
          <li>extern – global variables across files</li>
        </ul>
      </section>

      {/* 18. Bit Manipulation & Enumerations */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">18. Bit Manipulation & Enumerations</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`enum Days {Mon, Tue, Wed};
int x = 5;
int y = x << 1; // left shift`}</pre>
      </section>

      {/* 19. Command-Line Arguments */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">19. Command-Line Arguments</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int main(int argc, char *argv[]) {
    printf("Program name: %s\\n", argv[0]);
    return 0;
}`}</pre>
      </section>

      {/* 20. Macros & Modular Programming */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">20. Macros & Modular Programming</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`#define PI 3.14
// Separate .h and .c files for modular design
inline int square(int x){ return x*x; }`}</pre>
      </section>

      {/* 21. Debugging & Best Practices */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">21. Debugging & Best Practices</h2>
        <ul className="list-disc ml-5">
          <li>Use comments and meaningful variable names</li>
          <li>Indent code properly</li>
          <li>Check for memory leaks</li>
          <li>Test with different inputs</li>
        </ul>
      </section>

      {/* 22. Standard Libraries */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-purple-700">22. Standard Libraries</h2>
        <ul className="list-disc ml-5">
          <li><code>&lt;stdio.h&gt;</code> – input/output</li>
          <li><code>&lt;stdlib.h&gt;</code> – memory, conversions</li>
          <li><code>&lt;string.h&gt;</code> – string functions</li>
          <li><code>&lt;math.h&gt;</code> – mathematical functions</li>
          <li><code>&lt;ctype.h&gt;</code> – character handling</li>
          <li><code>&lt;time.h&gt;</code> – date and time</li>
        </ul>
      </section>
    </div>
  );
};

export default C;
