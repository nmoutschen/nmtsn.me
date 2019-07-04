---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
img: /{{ replace .File.Path ".md" ".jpg" }}
camera: Leica M6
film: Kodak Portra 400
---
