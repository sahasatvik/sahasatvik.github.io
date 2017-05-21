# Complex Numbers
---

A complex number is a number $z$ which can be expressed in the form

$$ z \;=\; a + ib \tag{1} $$

where $a, b \in \mathbb{R}$ and $i$ is an imaginary unit satisfying the equation $i^2 = -1$. Here, $a$ is the real part and $b$ is the imaginary part of $z$. This is written as $ \mathit{Re}(z) = a,\; \mathit{Im}(z) = b $.

## Euler's Formula

For $x \in \mathbb{R}$

$$ e^{ix} \;=\; \cos x \;+\; i\sin x \tag{2} $$

This leads directly to Euler's Identity

$$ e^{i\pi} \;+\; 1  \;=\; 0 \tag{3} $$

### De Moivre's Formula

$$ (\cos x \;+\; i\sin x)^n \;=\; \cos(nx) \;+\; i\sin(nx) \tag{4} $$

### Trigonometric functions

Euler's Formula can also be used to write

$$
\begin{align}
\cos{x} = \dfrac{e^{ix} + e^{-ix}}{2}                     \\
\sin{x} = \dfrac{e^{ix} - e^{-ix}}{2i}
\end{align}
$$

## Some Basic Operations

### Addition and Subtraction

$$
\begin{align}
(a + ib) + (c + id) \;&=\; (a + c) + i(b + d)              \\
(a + ib) - (c + id) \;&=\; (a + c) - i(b + d)
\end{align}
$$

### Multiplication and Division

$$
\begin{align}
(a + ib)(c + id)            \;&=\; (ac - bd) + i(bc + ad)  \\ \\
\dfrac{(a + ib)}{(c + id)}  \;&=\; \dfrac{(ac + bd) + i(bc - ad)}{c^2 + d^2}
\end{align}
$$

### Conjugate

$$
\begin{align}
\bar{z}          \;&=\;    \mathit{Re}(z) - \mathit{Im}(z)  \\
\overline{a + ib}\;&=\;    a - ib
\end{align}
$$

Consequentially, we have

$$
\begin{align}
\overline{z_1 \pm z_2}   \;&=\;    \overline{z_1} \pm \overline{z_2}    \\
\overline{z_1 z_2}       \;&=\;    \overline{z_1}\,\overline{z_2}       \\
\overline{z_1/z_2}       \;&=\;    \overline{z_1}/\overline{z_2}
\end{align}
$$

### Reciprocal

For $z = a + ib$

$$ \dfrac{1}{z} \;=\; \dfrac{\bar{z}}{z\bar{z}} \;=\; \dfrac{a}{a^2 + b^2} - i\dfrac{b}{a^2 + b^2}$$

### Absolute Value

For $z = a + ib$

$$
\begin{align}
|z|      \;&=\;      \sqrt{a^2 + b^2}               \\
|z_1 z_2|\;&=\;       |z_1||z_2|                    \\
|z|^2    \;&=\;  z\bar{z}  \;=\;   a^2 + b^2
\end{align}
$$

### Argument

The argument of $z = a + ib$, written $\mathit{arg}(z)$, is the angle between the line joining the points $(0,0)$, $(a,b)$ and the $x$-axis.

$$
\begin{align}
\varphi \;=\; \mathit{arg}(z) \;=\;
				\begin{cases}
					\tan^{-1}(\frac{y}{x})       & \quad \text{if } x > 0 \\
					\tan^{-1}(\frac{y}{x}) + \pi & \quad \text{if } x < 0 \text{ and } y \geq 0   \\
					\tan^{-1}(\frac{y}{x}) - \pi & \quad \text{if } x < 0 \text{ and } y < 0      \\
					\frac{\pi}{2}                & \quad \text{if } x = 0 \text{ and } y > 0      \\
					-\frac{\pi}{2}               & \quad \text{if } x = 0 \text{ and } y < 0      \\
					\text{indeterminate}         & \quad \text{if } x = 0 \text{ and } y = 0
				\end{cases}
\end{align}
$$

### Logarithm

For $k \in \mathbb{Z}$

$$
\begin{align}
\ln z              \;&=\; \ln |z| + i\,\mathit{arg}(z)               \\
\ln(re^{i\varphi}) \;&=\; \ln r \,+ i(\varphi + 2k\pi)
\end{align}
$$

## Representations of Complex Numbers

### Cartesian or Rectangular Coordinate System

Complex numbers can be represented in the two-dimensional complex plane or Argand plane by using the horizontal axis for the real part and the vertical axis for the imaginary part. The complex number $a + ib$ can be identified with the point $(a, b)$ in the complex plane.

$$ z \;=\; a + ib $$

### Polar Coordinate System

An alternative way of representing a complex number $z$ in the complex plane is by using the length of the line segment joining its position with the origin $r$ along with the angle it subtends with the positive real axis $\varphi$

$$ z \;=\; r(\cos\varphi + i\sin\varphi) \tag {5} $$

From Euler's Formula, we can write

$$ z \;=\; re^{i\varphi} \tag{6} $$

Consequentially

$$
\begin{align}
z_1 z_2   \;&=\;   r_1 r_2(\cos(\varphi_1 + \varphi_2) + i\sin(\varphi_1 + \varphi_2)  \\ \\
\frac{z_1}{z_2}   \;&=\;   \frac{r_1}{r_2}(\cos(\varphi_1 - \varphi_2) + i\sin(\varphi_1 - \varphi_2)
\end{align}
$$

### Matrix Representation

A complex number $z = a + ib$ can be represented by $2 \times 2$ matrices as follows.

$$
z \;=\; \begin{pmatrix}
			a   &   -b     \\
			b   &    a
		  \end{pmatrix}
$$

This is convenient for performing operations on complex numbers such as multiplication or finding absolute values.

$$
\begin{align}
\bar{z}	\;&=\;	\begin{pmatrix}
						a   &   b      \\
						-b  &    a
					\end{pmatrix}	     \\ \\
z_1 z_2	\;&=\;	\begin{pmatrix}
						a   &   -b     \\
						b   &    a
					\end{pmatrix}
					\begin{pmatrix}
						c   &   -d     \\
						d   &    c
					\end{pmatrix}
			\;=\;	\begin{pmatrix}
						ac - bd   &   -ad - bc  \\
						bc + ad   &    bd + ac
					\end{pmatrix}	              \\ \\
|z|^2		\;&=\;	\begin{vmatrix}
						a   &   -b      \\
						b   &    a
					\end{vmatrix}
			\;=\;	a^2 + b^2
\end{align}
$$