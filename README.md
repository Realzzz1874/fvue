# fvue

## :alien: what?

`fast vue`'s abbreviation, which is pronounced as `[fiːl]`. Its goal is to make us feel fast when developing :stuck_out_tongue_closed_eyes:

## usage

```bash
npm i vuefast -g
```

### list

```bash
fvue list
```

eg:

```bash
fvue: A fast vue project cli!
- pc -- Vue3 PC template (Naive UI)
```

- `pc` is the tpl name
- `Vue3 PC template (Naive UI)` is the tpl description

And now, the tpl list is:

```bash
pc: {
  url: "github:Realzzz1874/v3-tpl#fvue-tpl/pc",
  desc: "Vue3 PC template (Naive UI)",
  repo: "https://github.com/Realzzz1874/v3-tpl/tree/fvue-tpl/pc",
}
```

### init

```bash
fvue init <tpl> <proj>
```

eg:

```bash
fvue init pc myVueProject
```

- `pc` is the tpl name
- `myVueProject` is the project name

just like:

```bash
$ fvue init pc myVueProject
fvue: A fast vue project cli!
github repo: https://github.com/Realzzz1874/v3-tpl/tree/fvue-tpl/pc
✔ tpl download success.
✔ tpl init success.
? please input proj name: myVueProject
? please input proj description: my fast vue project
? please input proj author: realzzz
✔ proj init success.
```
