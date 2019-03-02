---
id: bff543c4-0de6-4d63-a9f6-01610e89388d
layout: post
title:  "What is a regex?"
uri: what-is-a-regex
tags: [data sources]
---

Have you noticed that while splitting the output of the command into a table you can use something called _regex_? This means you can use regular expression syntax as the delimiter. This is a very powerful way to split by anything in the text.

<!--more-->

E.g. default delimiter to split the row into columns is \[,\]+ which is a regular expression. It means

> split by sequence of space or comma characters. There may be one or more of these in a row.

  
  

It will split text by any combination of spaces and commas. All these texts would be split into 3 columns with values “Foo” “bar” and “baz”:

*   Foo bar baz
*   Foo bar baz
*   Foo , bar baz
*   Foo,bar,baz
*   Foo, bar, baz

To learn more take a look at [https://regex101.com/r/pTV5Ys/1](https://regex101.com/r/pTV5Ys/1) which is a tool to write and test regular expressions. Make sure to select JavaScript flavor on the left, in some cases, there is a slight difference.
