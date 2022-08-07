# fvue

## :alien: what?

`fast vue`'s abbreviation, which is pronounced as `[fiːl]`. Its goal is to make us feel fast when developing :stuck_out_tongue_closed_eyes:

## usage

```bash
npm i vuefast -g
# OR
yarn add vuefast -g
```

### list

`fvue list`

eg:

```bash
$ fvue list
fvue: A fast vue project cli!
   - v3 (v3-tpl)
```

- `v3` is the tpl name
- `v3-tpl` is the tpl description

And now, the tpl list is:

```bash
  v3: {
    url: "github:Realzzz1874/v3-tpl#fvue-tpl/v3",
    desc: "v3-tpl",
    repo: "https://github.com/Realzzz1874/v3-tpl/tree/fvue-tpl/v3",
  }
```

### init

`fvue init <tpl> <proj>`

eg:

```bash
$ fvue init v3 myVueProject
```

- `v3` is the tpl name
- `myVueProject` is the project name

just like:

```bash
$ fvue init v3 myVueProject
fvue: A fast vue project cli!
github repo: https://github.com/Realzzz1874/v3-tpl/tree/fvue-tpl/v3
✔ tpl download success.
✔ tpl init success.
? please input proj name: myVueProject
? please input proj description: my fast vue project
? please input proj author: realzzz
✔ proj init success.
```
