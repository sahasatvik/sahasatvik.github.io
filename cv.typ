#import "template.typ": *
#show: conf.with(
  title: "Curriculum Vitae",
  name: "Satvik Saha",
  affiliation: [
    Department of Statistics,\
    Columbia University, New York.
  ],
  links: (
    "satvik.saha@columbia.edu": "mailto:satvik.saha@columbia.edu",
    // "sahasatvik@gmail.com": "mailto:sahasatvik@gmail.com",
    "sahasatvik.github.io": "https://sahasatvik.github.io"
  )
)


= Education

#cvitem("September 2024", "present")[
  *PhD in Statistics*, _Columbia University in the City of New York, New York_\
  Teaching Assistant for Introduction to Statistics.
]

#v(0.2em)

#cvitem("August 2019", "June 2024")[
  *BS-MS in Mathematical Sciences*, _Indian Institute of Science Education and Research, Kolkata_\
  CGPA -- 9.7/10, ranked 1#super[st] in the Department of Mathematics and Statistics.\
  Teaching Assistant for Mathematics I, Statistics I.

  // *Relevant courses*:
  //   Probability I-II,
  //   Statistics I-II,
  //   Statistical Inference,
  //   Nonparametric Statistics,
  //   Multivariate Statistics,
  //   Bayesian Analysis,
  //   Linear Models,
  //   Numerical Analysis,
  //   Machine Learning and Network Analysis,
  //   Algebraic Topology.

  // *Teaching experience*: Teaching Assistant for Mathematics I, Statistics I.
]

#v(0.2em)

#cvitem("2019")[
  *ISC*, _Delhi Public School, Megacity, Kolkata_\
  Class 12 -- 93.5%, Indian School Certificate (ISC)
]

#cvitem("2017")[
  *ICSE*, _Delhi Public School, Megacity, Kolkata_\
  Class 10 -- 94.2%, Indian Certificate of Secondary Education (ICSE)
]


= Research Interests

#cvitem[
  Optimal Transport,
  Nonparametric Statistics,
  Data Depth Statistics.
  // Computational Statistics,
  // Machine Learning.
]


= Awards and Achievements

#cvitem("2024")[
  Awarded the Director's Gold Medal for securing the highest CGPA in the
  Department of Mathematics and Statistics.
]
#v(-0.3em)
// #cvitem("2023")[
//   Scored 117/120 in the TOEFL iBT Test.
// ]
// #v(-0.3em)
#cvitem("2023")[
  Awarded the _MITACS Globalink Research Internship_ (GRI) scholarship.
]
#v(-0.3em)
// #cvitem("2022")[
//   Scored 338/340 in the GRE General Test.
// ]
// #v(-0.3em)
#cvitem("2017")[
  Awarded the _Kishore Vaigyanik Protsahan Yojana_ (KVPY) scholarship, with
  rank 649 (SA).
]


= Conferences and Camps

#cvitem("2023")[
  Attended the _Canadian Applied and Industrial Mathematics Society (CAIMS)
  Annual Meeting_ at the University of New Brunswick, Fredericton.
]
#cvitem("2017")[
  Attended the _National Science (Vijyoshi) Camp_ at IISc Bangalore, as a KVPY
  fellow.
]


#pagebreak()
= Projects

#cvitem("August 2023", "May 2024")[
  *Statistical Depths for Multivariate and Functional Data with Applications* _(MS Thesis)_\
  *Supervisor*: Dr. Anirvan Chakraborty, IISER Kolkata

  #set text(11pt)
  Studied the construction of numerous depth functions on finite-dimensional
  as well as function spaces, along with their properties.
  Examined applications in exploratory data analysis, testing, classification,
  clustering, and outlier detection tasks.
  Briefly focused on the concept of local depth, and used this to propose a
  new kernel based regression procedure.
  (#link("https://sahasatvik.github.io/assignments/MS/thesis.pdf")[thesis],
  #link("https://sahasatvik.github.io/assignments/MS/presentation_final.pdf")[presentation])
]

#cvitem("May 2023", "July 2023")[
  *Combining in-host and inter-host viral infection dynamics*\
  *Supervisor*: Prof. James Watmough, University of New Brunswick

  #set text(11pt)
  Studied existing agent-based models for the spread of viral infections in a
  population, as well as ODE-based models for the dynamics of viral infections
  within a host.
  Developed a model which operates on both scales, generated and analysed
  simulation data.
  Attended the Annual Meeting of the Canadian Society of Applied and
  Industrial Mathematics (CAIMS 2023).
]

#cvitem("August 2022", "April 2023")[
  *Multi-Task Learning in Natural Language Processsing*\
  *Supervisor*: Dr. Kripabandhu Ghosh, IISER Kolkata

  #set text(11pt)
  Studied techniques for identifying, quantifying, and neutralizing bias in
  word embeddings, in the context of Natural Language Processing (NLP).
  Worked on adapting a Multi-Task Learning (MTL) model for this task.
]

#cvitem("May 2022", "July 2022")[
  *The Poincaré Theorem for Fundamental Polygons*\
  *Supervisor*: Dr. Somnath Basu, IISER Kolkata

  #set text(11pt)
  Studied topics in algebraic topology.
  Explored tilings of the hyperbolic plane as covering spaces of genus 2 and
  above surfaces, and how this allows such manifolds to be realized as
  surfaces of constant negative curvature.
]

#cvitem("July 2021")[
  *The Stone-Weierstrass Theorem*\
  *Supervisor*: Dr. Somnath Basu, IISER Kolkata

  #set text(11pt)
  Studied topics in introductory group theory, analysis, and topology.
  Presented a generously illustrated proof of the Stone-Weierstrass theorem.
  (#link("https://sahasatvik.github.io/assignments/SP21/weierstrass/weierstrass.pdf")[notes],
  #link("https://sahasatvik.github.io/assignments/SP21/weierstrass/presentation.pdf")[presentation])
]

#cvitem("April 2020")[
  *Age stratified SIQR model for the COVID-19 pandemic*\
  *Supervisor*: Prof. Ranjit Kumar Upadhyay, IIT Dhanbad

  #set text(11pt)
  Studied the basic SIQR compartmental model in epidemiology, in the context
  of the emerging COVID-19 pandemic.
  Modified this model by subdividing each compartment into age groups, with
  varying degrees of interaction amongst each other.
  Applied this model (using numerical simulations in python) to understand
  trends in infection rates/mortality in countries with different age
  structures in their population.
  (#link("https://doi.org/10.1007/s11071-020-05879-x")[paper])
]


#pagebreak()
= Publications

#cvitem("2024")[
  Saha, S., Gupta, S., Dutta, S., Chatterjee, S.
  "Characterising Solutions of Anomalous Cancellation."
  _Resonance_, *29*, 51--68.
  #link("https://doi.org/10.1007/s12045-024-1737-2")[`doi:10.1007/s12045-024-1737-2`]
]

#cvitem("2020")[
  Upadhyay, R.K., Chatterjee, S., Saha, S., Azad, R.K.
  "Age-group-targeted testing for COVID-19 as a new prevention strategy."
  _Nonlinear Dynamics_, *101*, 1921--1932.
  #link("https://doi.org/10.1007/s11071-020-05879-x")[`doi:10.1007/s11071-020-05879-x`]
]


= Software Skills

#cvitem("Languages")[
  Proficient in C, Python, R, #smallcaps[matlab]\
  Familiar with C++, Java, Mathematica
]

#cvitem("Tools")[
  Git,
  #smallcaps[html/css/js],
  #LATEX,
  Numpy/Scipy,
  Pytorch,
  Tensorflow,
  Typst
]


= Student Interests

#cvitem("Chess")[
  Played for the IISER Kolkata Chess Team in the _Inter IISER Sports Meet_
  (IISM) 2019, as well as Revival 2021.
]

#cvitem("Coding")[
  Contributed to writing and maintaining the
  #link("https://github.com/ParthBibekar/Welearn-bot")[welearn-bot] project, a
  command line interface for IISER Kolkata's learning platform.

  Designed and wrote the
  #link("https://www.iiserkol.ac.in/~maths.club/")[website] of Identity, the
  Maths Club of IISER Kolkata, former maintainer.

  Wrote the popular
  #link("https://github.com/sahasatvik/typst-theorems")[typst-theorems]/#link("https://typst.app/universe/package/ctheorems")[ctheorems]
  package for creating numbered environments in the typesetting language
  #link("https://github.com/typst/typst")[Typst], current maintainer.
]

#cvitem("Other")[
  Founding member of Identity, the Maths Club of IISER Kolkata; organized and
  coordinated events and competitions, designed problems, contributed articles
  and blog posts.

  Part of the winning team in the Mathematics Treasure Hunt, 2020, organized
  by IISER Pune.
]
