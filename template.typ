
#let date-width  = 2.2cm
#let date-gutter = 10pt

#let conf(title: "", name: "", affiliation: "", links: (), doc) = {

  set document(title: title, author: name)
  set page(paper: "a4", numbering: "1", margin: (bottom: 1.0in))
  set text(12pt)
  set par(justify: true)

  show link: it => {
    text(fill: blue.darken(30%), it)
  }

  show heading.where(level: 1): it => {
    block(
      above: 1.4em,
      below: 1em,
      breakable: false,
      box(
        width: date-width,
        height: 4pt,
        baseline: -3pt,
        fill: blue.darken(20%)
      ) +
      h(date-gutter) +
      text(16pt, font: "Ubuntu", weight: 400, it.body)
    )
  }

  let link_format(key) = {
    text(12pt, font: "Ubuntu", fill: blue.darken(30%), weight: 400, link(links.at(key), key))
  }

  let links = links.keys().map(link_format)
  let links = links.join(h(4pt) + sym.circle.filled.small + h(4pt))


  text(36pt, font: "Ubuntu", fill: blue.darken(10%), weight: 500, title)
  v(-0.3in)
  text(22pt, font: "Ubuntu", fill: black.lighten(20%), name)
  v(-0.15in)
  text(12pt, font: "Ubuntu", fill: black.lighten(40%), affiliation)
  v(-0.05in)
  text(12pt, font: "Ubuntu", fill: black.lighten(40%), links)
  v(0.2in)


  doc
}

#let cvitem(..date, body) = {
  grid(
    columns: (date-width, 1fr),
    column-gutter: date-gutter,
    text(
      fill: blue.darken(60%),
      align(right, date.pos().join([\ -- ]))
    ),
    body
  )
}

#let LATEX = {
  set text(font: "New Computer Modern")
  [L];box(move(
    dx: -5.2pt, dy: -1.2pt,
    box(scale(65%)[A])
  ));box(move(
    dx: -7.8pt, dy: 0pt,
    [T]
  ));box(move(
    dx: -9.6pt, dy: 2.7pt,
    box(scale(100%)[E])
  ));box(move(
    dx: -11.2pt, dy: 0pt,
    [X]
  ));h(-10.6pt)
}
