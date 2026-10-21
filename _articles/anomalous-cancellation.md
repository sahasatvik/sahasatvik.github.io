---
title: "Anomalous Cancellation"
date: "2024-01-18"
featured: true
image:
        src: "/assets/images/164.png"
        alt: "16/64 = 1/4, with both sixes crossed out."
        preview_max_height: "120px"
categories:
        - "Mathematics"
        - "Recreational"
subtitle: |
        When cancelling digits happens to give the right answer.
summary: |
        A hunt for every example of a familiar fraction trick, grouping infinitely many solutions in just eight families.
preface: |
        This started at a [DMS](https://math.iiserkol.ac.in) departmental celebration, when Sourin Chatterjee brought up a curious digit puzzle from his schooldays.
        My first instinct was to write some code; together with Sohom Gupta and Sayan Dutta, we turned the patterns it revealed into conjectures and proofs.
        At Prof. Soumya Bhattacharya’s suggestion, we gathered the results into a [recreational mathematics paper](https://doi.org/10.1007/s12045-024-1737-2), published in _Resonance_ in January 2024.
---


## A suspicious simplification
{: #cancellation}

Here is a terrible way of simplifying a fraction:

$$
        \frac{1\cancel{6}}{\cancel{6}4} = \frac{1}{4}.
$$

Cancelling digits is, of course, not how fractions work.
But the answer happens to be right!
So is this one:

$$
        \frac{4\cancel{9}}{\cancel{9}8} = \frac{4}{8}.
$$

This was the puzzle Sourin brought to our conversation, though he phrased it as a curiosity about numbers like $$498$$: splitting its digits in two different places gives $$4 \times 98 = 49 \times 8$$.
Rearranging gives exactly the fraction above.

We soon learned that this trick has a name, _anomalous cancellation_, and that others had already explored it; Boas's [1972 article](https://doi.org/10.2307/3026913) is one place to start.
Could we find all such fractions, even with arbitrarily many digits?


## Setting up the puzzle
{: #setup}

Longer examples do exist:

$$
        \frac{24\cancel{9}}{\cancel{9}96} = \frac{24}{96}.
$$

Let us be a little more precise about the game.
The numerator and denominator must have the same number of digits, and we cancel the last digit of the numerator against the first digit of the denominator.
We are looking for

$$
        \frac{\overline{A\,b}}{\overline{b\,C}} = \frac{A}{C},
$$

where $$A$$ and $$C$$ each have $$k$$ digits, and $$b$$ is a single nonzero digit.
The bars mean joining digits, so $$\overline{(24)\,9} = 249$$.
The fraction on the right need not be in lowest terms: deleting the digits must simply preserve its value.
There are no leading zeros, and we set aside identities like $$55/55 = 5/5$$, where every digit is the same.
From here on, a _solution_ means a nontrivial example of this particular form.

<aside class="sidenote" markdown="1">

A Diophantine problem
{: .aside-heading}

Writing out the joined digits gives $$(10A+b)C=A(b\,10^k+C)$$, or equivalently,

$$
        \frac{1}{A} + \frac{9}{b} = \frac{10^k}{C}.
$$

</aside>

I wrote a brute-force search, and we began looking for patterns in its output.
One small conjecture led to another.
Each proof gave us a restriction that every solution had to obey, and a way to make the next search run faster and deeper.


## Solutions run in families
{: #extensions}

There is an easy way to keep producing solutions:

$$
\begin{aligned}
        \frac{1\cancel{6}}{\cancel{6}4} &= \frac{1}{4}, \\[1.0em]
        \frac{16\cancel{6}}{\cancel{6}64} &= \frac{16}{64}, \\[1.0em]
        \frac{166\cancel{6}}{\cancel{6}664} &= \frac{166}{664}.
\end{aligned}
$$

Keep adding sixes, and the trick keeps working!
Something similar works for any solution.

<div class="statement lemma" id="extension-lemma" markdown="1">

### The extension rule

For $$k$$-digit blocks $$A,C$$ and a nonzero digit $$b$$, consider

<div align="center" markdown="1">

|:-|:-:|-:|
| $$\dfrac{\overline{A\,b}}{\overline{b\,C}}\quad$$ | and | $$\quad\dfrac{\overline{A\,b\,b}}{\overline{b\,b\,C}}.$$

</div>
<p></p>

The fraction on the left is a solution _if and only if_ the fraction on the right is.
We call the second an _extension_ of the first.

</div>

<aside class="sidenote" markdown="1">

The pumping lemma
{: .aside-heading}

This extension rule is a special case of Fried and Goldberg's [pumping lemma](https://doi.org/10.4169/074683410x521955).
Their result allows more general blocks of digits to be inserted into fractions.

</aside>

A solution that is not itself an extension starts a _family_;
the family consists of that _starting point_ and all its repeated extensions.
The examples above begin the family starting at $$16/64$$.

<aside class="sidenote" markdown="1">
Same value, different families
{: .aside-heading}

Both $$16/64$$ and $$249/996$$ equal $$1/4$$, yet they start different families.
Extension preserves a fraction's value, but equal fractions can belong to different families.
</aside>

The extension rule therefore gives us infinitely many solutions.
But this feels a little like cheating: we are just making old examples longer.
Can we keep finding new families, or are there only finitely many starting points?


## Two digits determine the rest
{: #structure}

We did find new starting points, including this one:

$$
        \frac{3402\cancel{7}}{\cancel{7}7776} = \frac{3402}{7776}.
$$

It is not an extension of a shorter solution, yet its denominator $$77776$$ still repeats the cancelled digit until its final $$6$$.
Our [structure theorem](https://doi.org/10.1007/s12045-024-1737-2) confirms that this pattern is unavoidable.

<div class="statement theorem" id="structure-theorem" markdown="1">

### The structure of a solution

In every solution $$\overline{A\,b}/\overline{b\,C} = A/C$$, the number $$C$$ has the form

$$
        C = \overline{\underbrace{b\cdots b}_{k-1\text{ copies}}\,d},
$$

where $$2 \leq d \lt b$$.

</div>

<aside class="sidenote" markdown="1">

Extra digit checks
{: .aside-heading}

The full theorem also says that $$d$$ must be divisible by $$2$$ or $$5$$, leaving only $$2,4,5,6,8$$.
The first digit of $$A$$ can be at most $$4$$, and the difference between its last digit and $$b$$ must be divisible by $$2$$ or $$5$$.

</aside>

The original denominator is therefore a run of the cancelled digit followed by one smaller digit.
When $$k=1$$, this simply means $$C=d$$.

This changes the search considerably.
Previously, we chose $$b$$ and tried every possible $$k$$-digit block $$C$$.
Now we only choose two single digits, $$b$$ and $$d$$: the theorem fills in the rest of $$C$$.
The cancellation equation then determines the only possible value of $$A$$:

$$
        A_k = \frac{b(10^{k-1}-1)}{9}
                + \frac{bd\,10^{k-1}}{10b-9d}.
$$

We only need to check whether $$A_k$$ is an integer with exactly $$k$$ digits.

<aside class="sidenote" markdown="1">
For example, choosing $$k=2$$, $$b=9$$, and $$d=6$$ gives $$C=96$$ and $$A_2=24$$, recovering the solution $$249/996=24/96$$.
</aside>

There are just **28 pairs** satisfying $$2\leq d\lt b\leq 9$$, regardless of $$k$$.
The old candidate list grew tenfold with every extra digit; this one stays the same size, whether the fractions have three digits or three thousand!


## How far must we look?
{: #saturation}

We can now search efficiently at any fixed length.
But how far do we have to go before we can say we have found every family?

Each pair $$(b,d)$$ can start at most one family.
Once it produces a solution, extension gives the unique solution for that pair at every greater length.
Since there are only finitely many pairs, new families must eventually stop appearing.
We call this _saturation_.


The paper's [saturation theorem](https://doi.org/10.1007/s12045-024-1737-2) tells us when we can safely stop.

<div class="statement theorem" id="saturation-theorem" markdown="1">

### A saturation bound

In decimal, every family has appeared by $$k=9$$.

</div>

<aside class="sidenote" markdown="1">

Where does $$9$$ come from?
{: .aside-heading}

In base $$B$$, the paper rules out new families for
$$
        k \geq \max\{5,\;2\log_2(B-1)+2\}.
$$
For $$B=10$$, this bound is about $$8.34$$, so $$k=9$$ is safe.
The proof uses divisibility arguments on the formula for $$A_k$$.

</aside>

So we only need to check **one length**, $$k=9$$, where the original numerator and denominator each have ten digits.
Every earlier family extends to this length, and none can begin later.
This one search therefore finds a representative of every family.


## A complete classification
{: #eight-families}

The search at $$k=9$$ finds exactly **eight solutions**.
Working backwards with the [extension rule](#extension-lemma), we shorten each one to the starting fraction of its family.

<div class="statement theorem" id="decimal-families" markdown="1">

### The eight decimal families

Every solution in our decimal setting belongs to exactly one of the eight families starting with these fractions:

$$
\begin{aligned}
        \frac{1\cancel{6}}{\cancel{6}4} &= \frac{1}{4},
        &\qquad \frac{2\cancel{6}}{\cancel{6}5} &= \frac{2}{5}, \\[1.0em]
        \frac{1\cancel{9}}{\cancel{9}5} &= \frac{1}{5},
        &\qquad \frac{4\cancel{9}}{\cancel{9}8} &= \frac{4}{8}, \\[1.0em]
        \frac{21\cancel{7}}{\cancel{7}75} &= \frac{21}{75},
        &\qquad \frac{24\cancel{9}}{\cancel{9}96} &= \frac{24}{96}, \\[1.0em]
        \frac{124\cancel{9}}{\cancel{9}992} &= \frac{124}{992},
        &\qquad \frac{3402\cancel{7}}{\cancel{7}7776} &= \frac{3402}{7776}.
\end{aligned}
$$

</div>

<aside class="sidenote" markdown="1">

An early finish
{: .aside-heading}

The last new family starts at $$k=4$$, with $$34027/77776$$.
So decimal solutions actually saturate at $$k=4$$.
The general theorem gave us $$k=9$$ as a safe place to check.

</aside>

These starting fractions and all their extensions give every solution.

<aside class="sidenote" markdown="1">

Never more than $$1/2$$
{: .aside-heading}

Every solution in our setting has value at most $$1/2$$, in any base.
In decimal, the family $$49/98,\;499/998,\;\ldots$$ attains the bound.

</aside>


## Beyond decimal
{: #other-bases}

We have stayed in decimal to keep the examples familiar.
The same ideas work in other bases, with similar structure and saturation results, giving only finitely many families in each base.
There is also a nice dividing line: composite bases have nontrivial solutions, while prime bases have none.

<aside class="sidenote" markdown="1">

Powers of primes
{: .aside-heading}

In a base $$p^n$$, with $$p$$ prime and $$n \geq 2$$, every family starts with a two-digit fraction.
Saturation happens immediately, at $$k = 1$$.

</aside>

The proofs and further results are in [the published article](https://doi.org/10.1007/s12045-024-1737-2).

For me, the fun was the back-and-forth.
Code gave us examples to puzzle over, patterns suggested conjectures, and proofs let us improve the code for the next search.

In decimal, the hunt ended with eight families and a proof that we had found them all.
Infinitely many anomalous fractions, all accounted for.


## References
{: #references}

1. R. P. Boas,
        [Anomalous Cancellation](https://doi.org/10.2307/3026913),
        *The Two-Year College Mathematics Journal*, **3**(2) (1972), 21–24

2. M. N. Fried, M. Goldberg,
        [A Pumping Lemma for Invalid Reductions of Fractions](https://doi.org/10.4169/074683410x521955),
        *The College Mathematics Journal*, **41**(5) (2010), 357–364

3. Satvik Saha, Sohom Gupta, Sayan Dutta, Sourin Chatterjee,
        [Characterising Solutions of Anomalous Cancellation](https://doi.org/10.1007/s12045-024-1737-2),
        *Resonance*, **29** (2024), 51–68
