Mark
====

Mark marks up what you mark down with markdown!

## Install

Add the registry to your `.npmrc`:
```
registry=https://npm.pkg.github.com/lwrly
```

With NPM:
```
npm i @lwrly/mark
```

Not available via yarn (yet).

In your `app.module.ts`:
```
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...other stuff,
    MarkdownModule
  ],
...
```

In your component file:
```
<mark></mark>
```