---
title: "Understanding Functions"
---
Functions are the building blocks of any application. This lesson covers how to declare and call functions.

An important concept is the quadratic formula. For an equation $ax^2 + bx + c = 0$, the solution is given by the formula:

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

This will be rendered beautifully on your lesson page.


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

### write description for my website where you can learn about any courses related mathematics and statisctics

Welcome to your ultimate learning platform, where you can explore and master a wide range of courses related to Mathematics and Statistics. Whether you are a beginner looking to build strong foundational skills or an advanced learner aiming to deepen your knowledge, our website offers comprehensive, well-structured courses covering all the key concepts, theories, and practical applications.

Discover detailed lessons, interactive content, and expertly explained topics across various branches such as algebra, calculus, probability, data analysis, and more. Our resources are designed to help students, professionals, and enthusiasts alike achieve success in academics, competitive exams, and real-world problem solving. Start your learning journey with us and unlock the power of mathematical and statistical understanding today!



Learn how to store information using variables and understand the different data types available in JavaScript, such as strings, numbers, and booleans.


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>


***

## 2. Maximum volume and surface area of an inscribed cylinder (Image 3)

### **Question:**

A cylinder of radius $x$ and height $2h$ is to be inscribed in a sphere of radius $R$... Choose the correct set of options.

***

**Given:**

- Volume: $V = 2\pi x^2 h$
- Curved Surface Area: $S = 4\pi x h$
- Cylinder fits in sphere: $x^2 + h^2 = R^2$
***

**Options:**

1. The cylinder has *maximum volume* amongst all cylinders when $h = R$.
2. The cylinder has *maximum volume* amongst all cylinders when $h = \sqrt{3}R$.
3. The cylinder has *maximum volume* amongst all cylinders when $h = \frac{R}{\sqrt{3}}$.
4. The cylinder has *maximum surface area* of curved surface when $h = 2R$.
5. The cylinder has *maximum surface area* when $h = \frac{R}{\sqrt{2}}$.
6. The cylinder has *maximum surface area* when $h = \sqrt{2}$.

***

### **Solution:**

#### **Maximum Volume:**

Let us maximize $V = 2\pi x^2 h$ under constraint $x^2 + h^2 = R^2$:

Substitute $x^2 = R^2 - h^2$:
$V = 2\pi (R^2 - h^2) h = 2\pi h (R^2 - h^2)$

Let $V = 2\pi (R^2 h - h^3)$.
Set derivative to 0 for critical points:

$$
\frac{dV}{dh} = 2\pi (R^2 - 3h^2) = 0 \implies R^2 = 3h^2 \implies h = \frac{R}{\sqrt{3}}
$$

#### **Maximum Surface Area:**

$S = 4\pi x h$, substitute $x = \sqrt{R^2 - h^2}$

$$
S = 4\pi h \sqrt{R^2 - h^2}
$$

Let $u = h^2$, so $S^2 \sim h^2 (R^2 - h^2) = h^2 R^2 - h^4$
Take derivative, set to 0:

$$
\frac{d}{dh}(h^2(R^2 - h^2)) = 2hR^2 - 4h^3 = 2h(R^2 - 2h^2) = 0
\implies h = 0 \text{ or } h^2 = \frac{R^2}{2} \implies h = \frac{R}{\sqrt{2}}
$$

**Correct Options:**

- The cylinder has maximum volume amongst all cylinders when $h = \frac{R}{\sqrt{3}}$.
- The cylinder has maximum surface area of curved surface when $h = \frac{R}{\sqrt{2}}$.

***


## 3. Negative area enclosed by a curve (Image 1)

### **Question:**

Which of the curves enclose a negative area on the $X$ axis in interval \$\$?[^1]

***

### **Solution (By visual inspection):**

- **Curve 1:** Always above x-axis ⇒ Positive area.
- **Curve 2:** Mostly below x-axis ⇒ Negative area.
- **Curve 3:** Always above x-axis ⇒ Positive area.
- **Curve 4:** Entire shaded region is below x-axis ⇒ Negative area.

**Correct Curves:**
Curve 2 and Curve 4.

***

## 4. Profits, Errors, and minimum values (Image 2)

#### Given:

- $f_1(x) = x^3$, $f_2(x) = x$
- Predicted: $g_1(x) = \sqrt{x}$, $g_2(x) = e^x$
- Error in prediction = area bounded by the curves in \$\$.[^1]

***

### **Q4:**

What will the absolute difference between the minimum values of $f_2$ and $g_2$ in the interval \$\$ be?[^1]

#### **Solution:**

- $f_2(x) = x$, minimum in \$\$ is at $x = 0$, so minimum is $0$[^1]
- $g_2(x) = e^{x}$, minimum in \$\$ is at $x = 0$, so minimum is $e^0 = 1$[^1]

**Absolute difference:** $|0 - 1| = 1$

***




### **Q5:**

Choose the correct statements about prediction errors:

- The error in prediction for company A is $\frac{5}{12}$.
- The error in prediction for company A is $\frac{11}{12}$.
- The error for A is more than that for B.
- The error for B is more than that for A.
- Error cannot be compared using given data.


#### **Solution:**

- Company A: $f_1(x) = x^3$, $g_1(x) = \sqrt{x}$, shaded area in right graph in Figure M2W3G2.
- Company B: $f_2(x) = x$, $g_2(x) = e^x$, left graph in Figure M2W3G3.
- Error = area between the curves over \$\$.[^1]

Calculate error for Company A:

$$
E_A = \int_0^1 |\sqrt{x} - x^3| dx = \int_0^1 (\sqrt{x} - x^3) dx = \left[ \frac{2}{3} x^{3/2} - \frac{1}{4} x^4 \right]_0^1 = \frac{2}{3} - \frac{1}{4} = \frac{8-3}{12} = \frac{5}{12}
$$

So, error for company A is $\frac{5}{12}$.

Company B:

$$
E_B = \int_0^1 |e^{x} - x| dx = \int_0^1 (e^{x} - x) dx = [e^x - \frac{1}{2} x^2]_0^1 = (e - \frac{1}{2}) - (1-0) = (e - \frac{1}{2} - 1) = (e - 1 - 0.5)
$$

But the option "The error in prediction for Company A is $\frac{11}{12}$" is not correct.

Between Company A and B, the area for B (since $e^x$ grows rapidly) will be larger, so the error for Company B is more than A.

**Correct Options:**

- The error in prediction for company A is $\frac{5}{12}$.
- The error in prediction for company B is more than that for company A.

***

## 5. Cubic function local minimum (Image 2)

### **Question:**

Let $f(x) = x^3 - 3x^2 + 37$. What is the local minimum value of $f$ attained at a critical point?

### **Solution:**

Set $f'(x) = 3x^2 - 6x = 3x(x-2) = 0$
So, critical points at $x = 0$ and $x = 2$.

- $f''(x) = 6x - 6$
    - At $x = 0$: $f''(0) = -6 < 0$ (local maximum)
    - At $x = 2$: $f''(2) = 12 - 6 = 6 > 0$ (local minimum)

Plug $x = 2$ into $f(x)$:

$$
f(2) = 8 - 12 + 37 = 33
$$

**Local minimum value is $\boxed{33}$**

***

## **Summary Table:**

| Q. No. | Solution |
| :-- | :-- |
| 1 | i) → b) → 1), ii) → c) → 3), iii) → a) → 2) |
| 2 | Max volume: $h = \frac{R}{\sqrt{3}}$; Max curved surface area: $h = \frac{R}{\sqrt{2}}$ |
| 3 | Curves 2 and 4 enclose negative area |
| 4 | Absolute difference = 1 |
| 5 | Error for A = $\frac{5}{12}$; Error for B > A |
| 6 | Local minimum value is 33 |

Let me know if you want any particular solution in more detail!

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-08-08-095624.jpg

[^2]: Screenshot-2025-08-08-095641.jpg

[^3]: Screenshot-2025-08-08-095615.jpg

[^4]: Screenshot-2025-08-08-095558.jpg



<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# 100 Previous Year Questions for Haryana GK with Answers

Below is a curated list of 100 previous year General Knowledge (GK) questions specific to Haryana, along with their answers. These questions have been selected from authentic sources and cover history, geography, culture, polity, economy, important personalities, and events related to Haryana. This set is highly useful for Haryana CET, HSSC, and other state exams.[^1][^2][^3]

## Haryana GK: Objective Questions and Answers

### 1-25


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# 50 Previous Year Quantitative Aptitude Questions with Solutions

Presented here are 50 practice-oriented quantitative aptitude questions based on the Haryana CET exam pattern, with fully worked solutions for each. This selection covers core topics: Number System, HCF \& LCM, Ratio-Proportion, Percentages, Averages, Profit \& Loss, SI \& CI, Simplification, Time \& Work, Time-Speed-Distance, Fractions, Decimals, and Data Interpretation.[^1][^2][^3]

## 1. The price of tea increases by 20%. To keep expenses the same, by what percent should a man decrease his consumption?

**Solution:**
Let initial price = ₹100/kg, initial consumption = 1kg.
New price = ₹120/kg. Let new consumption = x kg.

Expense remains: 100×1 = 120×x ⇒ x = 100/120 = 5/6
Required decrease = (1 - 5/6)×100 = 16.67% decrease.

## 2. The sum of five consecutive odd numbers is 125. What is their average?

**Solution:**
Average = 125/5 = 25

## 3. Find the least number which when divided by 6, 9, 15, and 18 leaves a remainder 5 in each case.

**Solution:**
LCM of 6, 9, 15, 18 = 90
Number = 90k + 5, least number is 95.

## 4. What is 35% of 700?

**Solution:**
= (35/100)×700 = 245

## 5. Aman walks 8km east, then 6km north. How far is he from the start?

**Solution:**
By Pythagoras: √(8²+6²) = 10km[^4]

## 6. Find the HCF and LCM of 24 and 36.

**Solution:**

- HCF: Factors = 2, 12, 24 for 24; 2, 18, 36 for 36. HCF = 12
- LCM: Multiples = 24, 48, 72... for 24; first common = 72


## 7. Divide ₹1200 in the ratio 2:3.

**Solution:**
Total = 5 parts
2/5 × 1200 = ₹480; 3/5 × 1200 = ₹720

## 8. What is 25% of 200?

**Solution:**
= (25/100)×200 = 50

## 9. Find the average of 10, 20, 30, 40, 50.

**Solution:**
Sum = 150, No. = 5; Average = 150/5 = 30

## 10. If a shopkeeper sold an article for ₹300 with 20% profit, find the cost price.

**Solution:**
Let CP = x; SP = x + 20%x = 1.2x = 300 ⇒ x = 250

## 11. Find SI on ₹1200 at 10% per annum for 2 years.

**Solution:**
SI = (1200×10×2)/100 = ₹240

## 12. What is the value of 8 + 4 × 2?

**Solution:**
4×2=8, 8+8=16

## 13. A can complete a work in 12 days, B in 8 days. How many days together?

**Solution:**
One day work = 1/12+1/8= (2+3)/24=5/24; Days = 24/5 = 4.8 days

## 14. If a train travels 150km in 2.5 hours, what is its speed?

**Solution:**
=150/2.5=60km/hr

## 15. Convert 3/8 to decimal.

**Solution:**
3 ÷ 8 = 0.375

## 16. Rakesh gets 80% in an exam of 500 marks. Find the marks scored.

**Solution:**
= (80/100)×500 = 400

## 17. If the cost price is ₹6000, marked price ₹7800, and profit after discount is 4%, find the discount percent.

**Solution:**
SP=CP+Profit=6000+4% of 6000=6240
Discount=7800-6240=1560
Discount % = (1560/7800)×100 = 20%

## 18. A sum doubles in 8 years at simple interest. Find the rate.

**Solution:**
Simple Interest = Principal (for doubling)
T=8, SI=P
SI= (P×R×8)/100=P ⇒ R=12.5%

## 19. A sells 3 pencils at the price of 2. Profit %?

**Solution:**
Assume CP per pencil = ₹1
For 3 pencils, CP=₹3, SP=₹2×3=₹6
Profit%= (3/2-1)×100=50%

## 20. A person spends 60% of his income and saves ₹400 per month. What is his income?

**Solution:**
Savings=40%; so, ₹400=40%
Income=100/40×400=₹1000

## 21. LCM of 15, 20, 30?

**Solution:**
LCM=2×2×3×5=60

## 22. The average age of 6 persons is 30 years. If one leaves, average becomes 28. What is the age of the person who left?

**Solution:**
Sum initially: 6×30=180. After leaving: 5×28=140
Age=40

## 23. The ratio of boys to girls is 7:5. If there are 420 students, how many are girls?

**Solution:**
Total parts=12; Girls=5/12×420=175

## 24. If Ram's salary increases from ₹2000 to ₹2500, find percent increase.

**Solution:**
Increase=₹500; %increase=500/2000×100=25%

## 25. Find the compound interest on ₹10,000 at 10% for 2 years.

**Solution:**
CI=10,000×(1.1²−1)=10,000×0.21=₹2,100

## 26. A man rows 10km downstream in 2 hours, and upstream in 5 hours. What is speed in still water?

**Solution:**
Downstream=5km/h, Upstream=2km/h
Speed=(5+2)/2=3.5km/h

## 27. What is 60% of 800?

**Solution:**
=0.6×800=480

## 28. If 7/18 of a number is 119, find the number.

**Solution:**
x×(7/18)=119 ⇒ x=119×18/7=306

## 29. If 25% of x=75, find x.

**Solution:**
x=75/0.25=300

## 30. What is (3/5) ÷ (2/3)?

**Solution:**
= (3/5) × (3/2) = 9/10=0.9

## 31. If 2 pens + 3 pencils=Rs34; 12 pens=16 pencils, find cost of 8 pens.

**Solution:**
Pens/pencils ratio=16/12=4/3
Let pen=4x, pencil=3x
2×4x+3×3x=34⇒8x+9x=34⇒x=2
Pen=8, 8 pens=8×8=₹64

## 32. Average salary of 8 teachers=₹15,000, add Headmaster and avg increases by ₹1,000. Find Headmaster's salary.

**Solution:**
Total=8×15000=₹120,000
New avg=9×16000=₹144,000
Headmaster=144,000-120,000=₹24,000

## 33. In what time will ₹2,000 yield ₹500 as SI at 5%?

**Solution:**
SI= (2000×5×T)/100=500 ⇒ T=5 years

## 34. What is the square root of 2025?

**Solution:**
√2025 = 45

## 35. Two trains 120m and 150m long cross each other in 10 sec. Find their combined speed.

**Solution:**
Total length=270m. Speed=270/10=27m/s=97.2km/hr

## 36. If a number is divided by 13, leaves remainder 9. What is remainder if divided by 13/2=6.5? (Integer division: remainder same; else specify question.)

**Solution:**
Remainder for 13:9; For 6, remainder=9 mod 6=3

## 37. Simplify: 6 ÷ 2 × (1 + 2)

**Solution:**
=6÷2×3=3×3=9

## 38. Three numbers are in ratio 1:3:5; sum is 180. Find numbers.

**Solution:**
Sum of parts=9, One part=180/9=20
Numbers=20, 60, 100

## 39. If 12 men do a work in 8 days, how many men needed in 4 days?

**Solution:**
Men×Days=Constant
12×8=96; 4 days: 96/4=24 men

## 40. Average of 12.5, 12.33, 12.16?

**Solution:**
(12.5+12.33+12.16)/3=36.99/3=12.33

## 41. What is (0.6)²?

**Solution:**
0.36

## 42. If cost price is ₹150, selling price is ₹120, find loss %.

**Solution:**
Loss=30; %Loss=30/150×100=20%

## 43. HCF of 18 and 24 is?

**Solution:**
HCF: 6

## 44. If 200 is divided between A and B in 3:2, what does A get?

**Solution:**
A=3/5×200=₹120

## 45. Find the 4th term of an AP: 5, 9, 13...

**Solution:**
d=4; 4th term=5+3×4=17

## 46. What is 15% of 220?

**Solution:**
=33

## 47. How many even numbers between 1 and 100?

**Solution:**
Even numbers = 2, 4, ...,100
n = (100-2)/2 +1=50

## 48. If x/4=9, find x.

**Solution:**
x=36

## 49. If sum of 3 consecutive numbers is 51, what’s the largest?

**Solution:**
Let n-1, n, n+1 sum to 3n=51⇒n=17
Largest=18

## 50. Ratio of Rupees to Paise is 3:2. If total is ₹1.50, find rupees.

**Solution:**
3+2=5 parts; 1 part=1.5/5=₹0.30
Rupees=3×0.30=₹0.90

These questions are representative of the Haryana CET quantitative aptitude style. Practicing these, both conceptually and with shortcuts, ensures high exam readiness.[^1][^2][^3]

<div style="text-align: center">⁂</div>

[^1]: https://testbook.com/questions/haryana-cet-group-c-quantitative-ability-questions--675ab26591974721d1cd5ae8

[^2]: https://testbook.com/questions/haryana-cet-group-d-quantitative-ability-questions--64771019e4f80bf808626f27

[^3]: https://testbook.com/objective-questions/mcq-on-quantitative-aptitude--5eea6a1039140f30f369e7e7

[^4]: https://newhorizoncollegeofengineering.in/top-50-aptitude-questions-for-placement-success/

[^5]: https://www.jagranjosh.com/articles/haryana-cet-previous-year-question-paper-download-hssc-group-c-and-d-paper-pdf-1748930893-1

[^6]: https://www.adda247.com/jobs/haryana-cet-group-d-previous-year-paper/

[^7]: https://www.youtube.com/watch?v=ymBwDOU1tFI

[^8]: https://www.jagranjosh.com/articles/ssc-most-repeated-quantitative-aptitude-questions-with-solutions-for-cgl-chsl-mts-exams-1727333639-1

[^9]: https://www.youtube.com/watch?v=dIpSlu0BEmA

[^10]: https://books.google.com/books/about/HSSC_CET_PDF_eBook_Haryana_Common_Entran.html?id=AdiyEAAAQBAJ

[^11]: https://www.adda247.com/exams/haryana/haryana-cet-group-c-previous-year-question-paper/

[^12]: https://www.selfstudys.com/mcq/cuet/quantitative-aptitude/online/practice-test

[^13]: https://www.lawpreptutorial.com/blog/clat/percentage-questions/

[^14]: https://www.youtube.com/watch?v=D0g4JoLW4Jw

[^15]: https://www.toprankers.com/quantitative-aptitude-quiz

[^16]: https://www.youtube.com/watch?v=fNLjhccjXVg

[^17]: https://toppersexam.com/STATE-LEVEL-EXAMS/HSSC-CET/question-bank_3819.html

[^18]: https://www.selfstudys.com/gate/mechanical-engineering/online/exam/quantitative-aptitude

[^19]: https://toppersexam.com/question-for-haryana-cet-exam---hindi

[^20]: https://www.youtube.com/watch?v=nXxm5XT0mFc

