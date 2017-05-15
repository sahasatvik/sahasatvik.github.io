# Integration
---

For a function $x \mapsto f(x)$ of a real variable $x$ and an interval $[a, b]$ of the real number line, the definite integral:

$$ \int_{a}^{b}f(x)\,\mathrm{d}x $$

is defined informally as the signed area in the $xy$-plane hat is bounded by the function $f$, the $x$-axis and the vertical lines $x=a$ and $x=b$.

An indefinite integral, also known as an antiderivative, is a function $F$ whose derivative is the given function $f$.

$$ F(x) = \int f(x)\,\mathrm{d}x $$

## The Fundamental Theorem of Calculus

If $f$ is a continuous real-valued function defined on a closed interval $[a,b]$ then once the antiderivative $F$ of $f$ is known, the definite integral of $f$ over that interval is given by

$$ \int_{a}^{b}f(x)\,\mathrm{d}x \;=\; F(b) - F(a) $$

## Some Basic Formulae for Computing Integrals

Let $n \in \mathbb{Z}$, $a \in \mathbb{R}$ and $f$, $g$ be functions in the variable $x$.

$$ \int e^x \,\mathrm{d}x \;=\; e^x + C $$

### Addition and Subtraction

$$
\begin{align}
\int (f + g) \,\mathrm{d}x      \;&=\;     \int f \,\mathrm{d}x + \int g \,\mathrm{d}x     \\
\int (f - g) \,\mathrm{d}x      \;&=\;     \int f \,\mathrm{d}x - \int g \,\mathrm{d}x
\end{align}
$$

### Multiplication (Integration by Parts)

$$
\begin{align}
\int f \,\mathrm{d}g            \;&=\;     fg - \int g \,\mathrm{d}f     \\
\int fg \,\mathrm{d}x           \;&=\;     f\int g \,\mathrm{d}x - \int (u'\int g \,\mathrm{d}x)\,\mathrm{d}x
\end{align}
$$

### Composition (Integration by Substitution)

$$ \int_{\varphi(a)}^{\varphi(b)} f(x) \,\mathrm{d}x   \;=\;   \int_{a}^{b} f(\varphi(t))\varphi'(t) \,\mathrm{d}t $$

Here, the substitution $x = \varphi(t)$ yielded $\frac{\mathrm{d}x}{\mathrm{d}t} = \varphi'(t)$, further yielding the
substitution $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$.

### Exponentials and Logarithms

$$ 
\begin{align}
\int x^n \,\mathrm{d}x               \;&=\;     \dfrac{1}{n}x^{n+1} \;+ C               &
\int \dfrac{1}{x} \,\mathrm{d}x      \;&=\;     \ln |x| \;+ C                            \\
\int \ln x \,\mathrm{d}x.            \;&=\;     x\ln{x} - x \;+ C                       &
\int \log_a{x} \,\mathrm{d}x         \;&=\;     \dfrac{x\ln{x} - x}{\ln a} \;+ C         \\
\int e^x \,\mathrm{d}x               \;&=\;     e^x \;+ C                               &
\int a^x \,\mathrm{d}x               \;&=\;     \dfrac{a^x}{\ln x} \;+ C                 \\
\end{align}
$$

### Trigonometric Functions

$$ 
\begin{align}
\int \sin x                          \;&=\;     -\cos x \;+ C                           &
\int \sin^{-1}x \,\mathrm{d}x        \;&=\;     x\sin^{-1}x + \sqrt{1 - x^2} \;+ C       \\
\int \cos x                          \;&=\;     \sin x \;+ C                            &
\int \cos^{-1}x \,\mathrm{d}x        \;&=\;     x\cos^{-1}x - \sqrt{1 - x^2} \;+ C       \\
\int \tan x                          \;&=\;     -\log\cos x \;+ C                       &
\int \tan^{-1}x \,\mathrm{d}x        \;&=\;     x\tan^{-1}x - \dfrac{\ln(1 + x^2)}{2} \;+ C    \\
\end{align}
$$