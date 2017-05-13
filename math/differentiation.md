# Differentiation
---

For a function $x \mapsto f(x)$, its derivative $f'$ is given by

$$ f' \;=\; \dfrac{\mathrm{d}}{\mathrm d x}f(x) \;=\; \lim_{h \to 0}\dfrac{f(x + h) - f(x)}{h} \tag{1}$$

## Computing Derivatives

Let there be a function $f$ in the variable $x$ such that:

$$ y \;=\; f(x) \tag{2}$$

It follows that a change in the independent variable $x$ corresponds to a change in the dependent variable $y$. Let the changes in $x$ and $y$ be $\Delta x$ and $\Delta y$ respectively.

$$
\begin{align}
y + \Delta y                 \;&=\;  f(x + \Delta x)                          \\
\Delta y                     \;&=\;  f(x + \Delta x) - f(x) \tag{From (2)}    \\
                                                                              \\
\dfrac{\Delta y}{\Delta x}   \;&=\;  \dfrac{f(x + \Delta x) - f(x)}{\Delta x} \\
\end{align}
$$

The above expression is simply the average rate of change in the value of $y$ with a change in $x$. In order to find the instantaneous rate of change of $y$ at some point $x$, we can reduce $\Delta x$ to a value approaching $0$. Thus, the derivative of $f$ is simply the limit of $\frac{\Delta y}{\Delta x}$ as $\Delta x$ approaches $0$.

$$
\dfrac{\mathrm{d}y}{\mathrm d x} 
		\;=\; \lim_{\Delta x \to 0}\dfrac{\Delta y}{\Delta x} 
		\;=\; \lim_{\Delta x \to 0}\dfrac{f(x + \Delta x) - f(x)}{\Delta x}
		\tag{3}
$$

With a change in notation, this is precisely equation $(1)$.

## Some Basic Formulae for Computing Derivatives

Let $n \in \mathbb{Z}$, $a \in \mathbb{R}$ and $f$, $g$ be functions in the variable $x$.

$$ \dfrac{\mathrm{d}}{\mathrm d x}e^x \;=\; e^x $$

### Addition and Subtraction

$$
\begin{align}
(f + g)'   \;&=\;   f' + g' \\
(f - g)'   \;&=\;   f' - g'
\end{align}
$$

### Multiplication and Division

$$
\begin{align}
(f \cdot g)                  \;&=\;    f'g + gf'                     \\
\left(\dfrac{f}{g}\right)'   \;&=\;    \dfrac{f'g - fg'}{g^2}
\end{align}
$$

### Composition (Chain Rule)

$$
\begin{align}
(f \circ g)'                             \;&=\;    (f' \circ g)(g')  \\
\dfrac{\mathrm{d}}{\mathrm d x}f(g(x))   \;&=\;    f'(g(x))g'(x)
\end{align}
$$

### Exponentials and Logarithms

$$
\begin{align}
\dfrac{\mathrm{d}}{\mathrm d x}x^n \;&=\; nx^{n-1}                                        &
\dfrac{\mathrm{d}}{\mathrm d x}\left(\dfrac{1}{x^n}\right) 
												 \;&=\;    -\dfrac{m}{x^{m + 1}}                   \\
\dfrac{\mathrm{d}}{\mathrm d x}\ln x     \;&=\;     \dfrac{1}{x}                          &
\dfrac{\mathrm{d}}{\mathrm d x}\log_a x  \;&=\;     \dfrac{1}{x\ln a}                      \\
\dfrac{\mathrm{d}}{\mathrm d x}e^x       \;&=\;     e^x                                   &
\dfrac{\mathrm{d}}{\mathrm d x}a^x       \;&=\;     a^x\ln a                               \\
\end{align}
$$

### Trigonometric Functions

$$
\begin{align}
\dfrac{\mathrm{d}}{\mathrm d x}\sin x       \;&=\;    \cos x                              &
\dfrac{\mathrm{d}}{\mathrm d x}\sin^{-1}x   \;&=\;    \dfrac{1}{\sqrt{1 - x^2}}            \\
\dfrac{\mathrm{d}}{\mathrm d x}\cos x       \;&=\;   -\sin x                              &
\dfrac{\mathrm{d}}{\mathrm d x}\cos^{-1}x   \;&=\;   -\dfrac{1}{\sqrt{1 - x^2}}            \\
\dfrac{\mathrm{d}}{\mathrm d x}\tan x       \;&=\;    \sec^2 x                            &
\dfrac{\mathrm{d}}{\mathrm d x}\tan^{-1}x   \;&=\;    \dfrac{1}{1 + x^2}                   \\
\dfrac{\mathrm{d}}{\mathrm d x}\sec x       \;&=\;    \sec x \tan x                       &
\dfrac{\mathrm{d}}{\mathrm d x}\sec^{-1}x   \;&=\;    \dfrac{1}{x\sqrt{x^2 - 1}}           \\
\dfrac{\mathrm{d}}{\mathrm d x}\csc x       \;&=\;   -\csc x \cot x                       &
\dfrac{\mathrm{d}}{\mathrm d x}\csc^{-1}x   \;&=\;   -\dfrac{1}{x\sqrt{x^2 - 1}}           \\
\dfrac{\mathrm{d}}{\mathrm d x}\cot x       \;&=\;   -\csc^2 x                            &
\dfrac{\mathrm{d}}{\mathrm d x}\cot^{-1}x   \;&=\;   -\dfrac{1}{1 + x^2}                   \\
\end{align}
$$

## Taylor Series

For a real or complex values function $x \mapsto f(x)$ which is infinitely differentiable at some real or complex number $a$, its Taylor Series is given by

$$ \displaystyle\sum_{n=0}^{\infty} \dfrac{f^{(n)}(a)}{n!}(x - a)^n $$

where $f^{(n)}$ is the $n^{\text{th}}$ derivative of $f$

### Maclaurin Series

The Maclaurin Series of $x \mapsto f(x)$ is simply its Taylor Series at $a=0$

$$ \displaystyle\sum_{n=0}^{\infty} \dfrac{f^{(n)}(0)\,x^n}{n!} $$

Thus, we have
$$
\begin{align}
e^x                \;& =\;    1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \dfrac{x^4}{4!} + \cdots    &x& \in \mathbb{R}  \\
\dfrac{1}{1-x}     \;& =\;    1 + x + x^2 + x^3 + x^4 + \cdots                                        &x& \in (-1, 1)     \\
\ln{(1 + x)}       \;& =\;    x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \cdots           &x& \in \mathbb{R}  \\
\sin x             \;& =\;    x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dfrac{x^7}{7!} + \cdots        &x& \in \mathbb{R}  \\
\cos x             \;& =\;    1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dfrac{x^6}{6!} + \cdots        &x& \in \mathbb{R}  \\
\end{align}
$$