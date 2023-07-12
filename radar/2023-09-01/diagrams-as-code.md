---
title:      "Diagrams as Code"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [architecture, quality assurance, documentation]
---

Documenting concepts and software architecture as diagrams using code offers great benefit over heavier solutions.
Having documentation and diagrams treated as code and checked-in into version control increases transparency, collaboration as well as productivity.
The textual representation of diagrams is easy to write and read. Generation of graphical representations as SVG or PNG images is also easy with the associated tools.

We make heavy use of [PlantUML](/tools/plant-uml.html) combined with [Asciidoc](/tools/asciidoc.html) and tools like [AsciiDoctor Diagram](https://asciidoctor.org/docs/asciidoctor-diagram/) to include and inline PlantUML diagrams into documentations.
The latter allows a variety of other diagram formats which can be easily mixed and matched.

Other tools worth mentioning are:
- [Mermaid](https://mermaid.js.org/) which is a JavaScript based diagramming tool that is natively supported by many common tools (e.g. Github, Gitlab, Gitea, Notion, etc. )
- [D2](https://d2lang.com/) is a diagram scripting language with a focus on readability providing a CLI and a Go library to programmatically create diagrams
- [Structurizr](https://structurizr.com/) brings his own DSL to create software architecture models based on the [C4 model](https://c4model.com/) and a CLI to export to formats like PlantUML, Mermaid, D2 and others.
