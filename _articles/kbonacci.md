---
title: "On k-bonacci numbers"
date: "2020-07-27"
featured: true
categories:
        - "Mathematics"
        - "Exploration"
subtitle: |
        A brief tour of generalized Fibonacci sequences.
summary: |
        A natural generalization of the Fibonacci sequence, and an elegant Binet-like formula for its terms.
preface: |
        This article grew out of conversations with Sayan Dutta and Sohom Gupta in February 2020.
        We began with numerical observations and worked our way to up to formal proofs — one of my first tastes of the pleasure of doing mathematics with friends.
---



## The Fibonacci sequence
{: #fibonacci}


The Fibonacci sequence $$ \{F_n\}_{n = 0}^\infty $$ is a well known and widely studied sequence, defined by the recurrence relation

$$
        F_{n} \;=\; F_{n - 1} + F_{n - 2}.
$$

For convenience, we set $$ F_0 = 0 $$, $$ F_1 = 1 $$. The terms of this sequence can be expressed by Binet's formula,

$$
        F_n \;=\; \frac{\varphi^n - \psi^n}{\varphi - \psi},
$$

where $$ \varphi $$ and $$ \psi $$ are the roots of the polynomial $$ x^2 - x - 1 = 0$$.
The larger root $$ \varphi $$ is better known as the _golden ratio_.

<aside class="sidenote" markdown="1">
The golden ratio
{: .aside-heading}
$$\varphi = (1 + \sqrt{5})/2$$
$$\approx 1.61803\ldots$$
</aside>

The Fibonacci sequence thus proceeds as follows.

$$
        0,\; 1,\; 1,\; 2,\; 3,\; 5,\; 8,\; 13,\; 21,\; \dots
$$

It can be shown that as $$ n \to \infty$$, the ratio of successive terms, $$ F_{n + 1} / F_{n} $$, converges to $$ \varphi $$.

## Generalized Fibonacci sequences
{: #generalization}

<p></p>
<aside class="sidenote" markdown="1">

A longer memory
{: .aside-heading}

The Fibonacci sequence uses two previous terms. The Tribonacci sequence uses three; the general case uses $$k$$.

</aside>

One way to generalize the Fibonacci sequence is to extend the recurrence relation, involving more previous terms.
The Tribonacci sequence thus obeys

$$
        T_n \;=\; T_{n-1} + T_{n-2} + T_{n-3},
$$

where $$ T_0 = T_1 = 0 $$, $$ T_2 = 1 $$. This generates the sequence

$$
        0,\; 0,\; 1,\; 1,\; 2,\; 4,\; 7,\; 13,\; 24,\; \dots
$$

Amazingly, these too are given by the closed form expression

$$
        T_n \;=\; \frac{\alpha^n}{(\alpha - \beta)(\alpha - \gamma)}
                + \frac{\beta^n}{(\beta - \alpha)(\beta - \gamma)}
                + \frac{\gamma^n}{(\gamma - \alpha)(\gamma - \beta)},
$$

where $$ \alpha $$, $$ \beta $$ and $$ \gamma $$ are roots of the polynomial $$ x^3 - x^2 - x - 1 = 0 $$.
The limiting ratio of successive terms, $$ T_{n + 1}/T_n $$, is the largest real root of the aforementioned polynomial.
This happens to be the only real root greater than $$1$$, around $$ 1.8393 $$.

We are thus motivated to define a generalized Fibonacci sequence, $$ \{F^{(k)}_n\}_{n=0}^\infty $$, through

$$
        F^{(k)}_n \;=\; F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k},
$$

where $$ F^{(k)}_0 = F^{(k)}_1 = \dots = F^{(k)}_{k-2} = 0 $$, $$ F^{(k)}_{k-1} = 1 $$.
We may call such a sequence a k-step Fibonacci sequence, or a k-bonacci sequence.
The polynomial $$ x^k - x^{k-1} - \dots - 1 $$ is of particular interest when investigating these sequences.

## Roots of the characteristic polynomial
{: #roots}

<p></p>
<aside class="sidenote" markdown="1">
Lemmas 1–3
{: .aside-heading}
The positive root lies between 1 and 2.
All other roots lie inside the unit circle.
</aside>

<div class="statement lemma" id="lemma-1" markdown="1">

### Lemma 1.

The polynomial

$$
        p(x) \;=\; x^k - x^{k-1} - x^{k-2} - \cdots - x - 1,
$$

where $$k \gt 1$$ has only one positive real root greater than $$1$$.

</div>

<div class="proof" markdown="1">

*Proof.*
Applying Descartes' rule of signs shows that $$p(x)$$ has exactly one positive real root.
Also, $$p(1) \lt 0$$ and $$p(2) \gt 0$$, indicating that this root lies in the interval $$(1, 2)$$.
{% include qed.html %}

</div>

<div class="statement lemma" id="lemma-2" markdown="1">

### Lemma 2.

If $$\alpha$$ is the positive root of $$p(x)$$ greater than $$1$$, then

$$
        2 - \frac{1}{2^{k-1}} \;\lt\; \alpha \;\lt\; 2 - \frac{1}{2^k}.
$$

</div>

<div class="proof" markdown="1">

*Proof.*
We examine the polynomial

$$
        q(x) \;=\; (x-1)\;p(x)
                \;=\; x^{k+1} - 2x^{k} + 1
                \;=\; x^k(x - 2) + 1,
$$

which shares the same roots as $$p(x)$$ and the additional root $$1$$.
Note that

$$
        q(2 - \epsilon)
                \;=\; (2 - \epsilon)^k (-\epsilon) + 1
                \;=\; 1 - 2^k\epsilon\left(1 - \epsilon/2^k\right)^k.
$$

When $$\lvert \epsilon\rvert  \lt 1$$, we have $$ (1 - \epsilon/2^k)^k \gt 1 - k\epsilon/2^k$$ from Bernoulli's inequality.
Thus, setting $$\epsilon = 1/2^{k-1}$$,

$$
        q(2 - 1/2^{k-1})
                \;\lt\; 1 - 2\left(1 - \frac{k}{2^{2k-1}}\right)
                \;=\; \frac{2k}{2^{2k-1}} - 1
                \;\leq\; 0.
$$

Also, $$(1 - \epsilon/2^k)^k \lt 1$$, so setting $$\epsilon = 1/2^k$$,

$$
        q(2 - 1/2^k) \;\gt\; 1 - 2^k/2^k \;=\; 0.
$$

This establishes the required bounds for $$\alpha$$. {% include qed.html %}

</div>

<div class="statement lemma" id="lemma-3" markdown="1">

### Lemma 3.

Let $$\alpha = \alpha_k$$ be the positive root of $$p(x)$$.
The remaining roots, $$\alpha_i$$ of $$p(x)$$ where $$i = 1, 2, \dots, k - 1$$, all lie within the open unit disk centered at the origin, i.e. $$\lvert \alpha_i\rvert  \lt 1$$ for $$i \lt k$$.

</div>

<div class="proof" markdown="1">

*Proof.*
Let $$r \gt 1$$ such that $$r\lt \alpha_k$$.
Then, on the circle $$\lvert z\rvert  = r$$,

$$
        \lvert z^{k+1} + 1\rvert
                \;\leq\; r^{k + 1} + 1
                \;\lt\; 2r^k
                \;=\; \lvert 2z^k\rvert .
$$

Using Rouche's theorem, $$q(z)$$ must have as many roots within the open disk $$\lvert z\rvert  \lt r$$ as $$2z^k$$, i.e. $$k$$ roots.
Note that this holds for any $$r$$ arbitrarily close to and greater than $$1$$, so $$q(z)$$ has $$k$$ roots in the closed disk $$\lvert z\rvert  \leq 1$$.
We know that one of these is $$z = 1$$, and this is not a root of $$p(x)$$.
We now show that none of the remaining roots are such that $$\lvert \alpha_i\rvert  = 1$$.
If $$q(z) = 0$$ when $$\lvert z\rvert  = 1$$, then $$\lvert z^{k+1} + 1\rvert  = \lvert 2z^{k}\rvert  = 2$$, so the triangle inequality forces $$z^{k+1} = 1$$. Thus, $$2z^k = z^{k+1} + 1 = 2$$, so $$z^{k} = 1$$ too.
This forces $$z = 1$$.
Therefore, the remaining $$k-1$$ roots of $$q(x)$$ are all roots of $$p(x)$$, such that $$\lvert \alpha_i\rvert  \lt 1$$ for $$i = 1, 2, \dots k-1$$.
{% include qed.html %}

</div>

## A Binet-like formula
{: #formula}

<p></p>
<aside class="sidenote" markdown="1">

Theorem 1
{: .aside-heading}

Polynomial interpolation connects the roots of the characteristic polynomial to a formula for the sequence.

</aside>

<div class="statement lemma" id="lemma-4" markdown="1">

### Lemma 4.

If $$p(x) = 0$$, then for integers $$n \geq k$$,

$$
\begin{aligned}
        x^n
        \;&=\; F^{(k)}_n x^{k-1} \\
        &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+1}\right)x^{k-2} \\
        &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+2}\right)x^{k-3} \\
        &\quad+\; \dots \\ &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2}\right) x \\
        &\quad+\; F^{(k)}_{n-1}
\end{aligned}
$$

Specifically, the constant coefficient in the polynomial expansion of $$x^n$$ is $$F^{(k)}_{n-1}$$.

</div>

<div class="proof" markdown="1">

*Proof.*
We show this by induction.
For $$n = k$$, only the $$F^{(k)}_{k-1} = F^{(k)}_k = 1$$ terms survive, so $$x^k \;=\; x^{k-1} + x^{k-2} + \dots + 1$$, which is clearly true from $$p(x) = 0$$.
Let the given formula hold for some $$n \geq k$$.
Then,

$$
\begin{aligned}
x^{n+1}
        \;&=\; x \cdot x^n \\
        \;&=\; F^{(k)}_n x^{k} \\
        &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+1}\right) x^{k-1} \\
        &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+2}\right) x^{k-2} \\
        &\quad+\; \dots \\
        &\quad+\; \left(F^{(k)}_{n-1} + F^{(k)}_{n-2}\right)x^2 \\
        &\quad+\; F^{(k)}_{n-1}x
\end{aligned}
$$

Expanding $$x^k = x^{k-1} + x^{k-2} + \dots + 1$$,

$$
\begin{aligned}
x^{n+1}
        \;&=\; \left(F^{(k)}_n + F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+1}\right)x^{k-1} \\
        &\quad+\; \left(F^{(k)}_n + F^{(k)}_{n-1} + F^{(k)}_{n-2} + \dots + F^{(k)}_{n-k+2}\right)x^{k-2} \\
        &\quad+\; \dots \\
        &\quad+\; \left(F^{(k)}_n + F^{(k)}_{n-1} + F^{(k)}_{n-2}\right)x^2 \\
        &\quad+\; \left(F^{(k)}_n + F^{(k)}_{n-1}\right)x \\
        &\quad+\; F^{(k)}_{n}.
\end{aligned}
$$

The first coefficient collapses to $$F^{(k)}_{n + 1}$$ by our recurrence rule.
By induction on $$n$$, this proves the required formula.
{% include qed.html %}

</div>

<div class="statement theorem" id="theorem-1" markdown="1">

### Theorem 1.

If $$\alpha_1, \alpha_2, \dots, \alpha_k$$ are roots of $$p(x) = x^k - x^{k-1} - x^{k-2} - \dots - 1$$, then

$$
        F^{(k)}_n
                \;=\; \sum_{i = 1}^k \left(\prod_{\substack{j = 1 \\ j\neq i}}^{k}\frac{1}{(\alpha_i - \alpha_j)}\right)\alpha_i^n.
$$

</div>

<div class="proof" markdown="1">

*Proof.*
For $$x^k = x^{k-1} + x^{k-2} + \dots + 1$$, we expand $$x^{n+1} = g(x)$$, where $$g(x)$$ is a polynomial of degree $$k-1$$.
By Lemma 4, $$g(0) = F^{(k)}_n$$.
Also, $$g(\alpha_i) = \alpha_i^{n+1}$$ for each of the $$k$$ roots $$\alpha_i$$ of $$p(x)$$.
This is enough to fully determine the coefficients of $$g(x)$$, which we construct as follows.

$$
        g(x)
                \;=\; \sum_{i = 1}^k \left(\prod_{\substack{j = 1 \\ j\neq i}}^{k}\frac{(x - \alpha_j)}{(\alpha_i - \alpha_j)}\right) \alpha_i^{n+1} 
                \;=\; \sum_{i = 1}^k h_i(x) \alpha_i^{n+1}.
$$

Note that the polynomials $$h_i(x)$$ are chosen such that $$h_i(\alpha_j) = \delta_{ij}$$.
When evaluating $$g(0)$$, we note that the numerator of $$h_i(0)$$ is simply $$(-1)^{k-1}\prod_{j\neq i}\alpha_j$$.
Pulling out one $$\alpha_i$$ from $$\alpha_i^{n+1}$$, and using Vieta's formula to evaluate the product of roots $$(-1)^{k-1}\prod_j \alpha_j = 1$$, we obtain the desired formula.
{% include qed.html %}

</div>

<div class="statement corollary" id="corollary" markdown="1">

### Corollary.

$$
        F^{(k)}_n
                \;=\; \sum_{i = 1}^k \frac{\alpha_i - 1}{2 + (k + 1)(\alpha_i - 2)} \alpha_i^{n-k+1}.
$$

</div>

<div class="proof" markdown="1">

*Proof.*
We examine the numerator of $$h_i(x)$$ as seen in Theorem 1.
Let this be the polynomial $$f_i(x)$$, so $$h_i(x) = f_i(x)/f_i(\alpha_i)$$.
Note that $$f_i(x)$$ is a polynomial with roots $$\alpha_j$$, $$j \neq i$$.
Thus, we evaluate the limit

$$
        \lim_{x \to \alpha_i} \frac{p(x)}{x - \alpha_i}
                \;=\; \lim_{x \to \alpha_i} \frac{x^{k+1} - 2x^k + 1}{(x-1)(x - \alpha_i)}.
$$

Using L' Hôpital's rule, we find that

$$
\begin{aligned}
f_i(\alpha_i)
        \;&=\; \frac{(k + 1)\alpha_i^k - 2k\alpha_i^{k-1}}{\alpha_i - 1} \\
        &=\; \frac{(k+1)(\alpha_i^{k} - 2\alpha_i^{k-1}) + 2\alpha_i^{k-1}}{\alpha_i - 1} \\
        &=\; \frac{2 + (k + 1)(\alpha_i - 2)}{\alpha_i - 1} \alpha_i^{k-1}.
\end{aligned}
$$

Substituting this into the formula from Theorem 1 gives the desired result.
{% include qed.html %}

</div>

## The limiting ratio
{: #limit}

<p></p>
<aside class="sidenote" markdown="1">

Theorem 2
{: .aside-heading}

The dominant root determines the long-term ratio of successive terms.

</aside>

<div class="statement lemma" id="lemma-5" markdown="1">

### Lemma 5.

For large $$n$$, we can make the approximation

$$
        F^{(k)}_n
                \;\sim\; \frac{\alpha_k - 1}{2 + (k + 1)(\alpha_k - 2)} \alpha_k^{n-k+1}.
$$

</div>

<div class="proof" markdown="1">

*Proof.*
Recall from Lemma 3 that $$\alpha_k$$ is the only $$\alpha_i$$ lying outside the unit circle centered at the origin.
For large $$n$$, the contributions of the $$\alpha_i^n$$ terms in the formula from Theorem 1 vanish for $$i = 1, 2, \dots, k-1$$, and are dominated by $$i = k$$.
Thus, those terms in the sum become negligible, establishing the desired approximation. {% include qed.html %}

</div>

<div class="statement theorem" id="theorem-2" markdown="1">

### Theorem 2.

The limiting ratio of successive terms is given by the dominant root $$\alpha_k$$.
That is,

$$
        \lim_{n \to \infty} \frac{F^{(k)}_{n + 1}}{F^{(k)}_n}
                \;=\; \alpha_k.
$$

This ratio is called the k-bonacci constant.

</div>

<div class="proof" markdown="1">

*Proof.*
This follows directly from the approximation in Lemma 5, when taking limits using the formula from Theorem 1.
{% include qed.html %}

</div>



## References
{: #references}

1. Gregory P. Dresden, Zhaohui Du,
        [A simplified Binet formula for k-generalized Fibonacci numbers](https://www.maths.tcd.ie/EMIS/journals/JIS/VOL17/Dresden/dresden6.pdf),
        *Journal of Integer Sequences*, **17** (2014), 14.4.7

2. Gwang-Yeon Lee, Sang-Gu Lee, Jin-Soo Kim, Hang-Kyun Shin,
        [On the k-generalized Fibonacci Matrix Q<sub>k</sub>](https://doi.org/10.1016/0024-3795(95)00553-6),
        *Linear Algebra and its Applications*, **251** (1997), 73-88

3. Wolfram MathWorld,
        [Fibonacci n-step number](https://mathworld.wolfram.com/Fibonaccin-StepNumber.html)
