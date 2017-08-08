# Shared Library for Redux + Material UI
---

### ReduxRoot

Simple component to setup redux store and router history.

```html
<ReduxRoot reducers={reducers}>
  <MuiTheme />
</ReduxRoot>
```
> `reducers` must be of type Object


### MuiTheme

Create material-ui theme.

```html
<MuiTheme type="dark | light"
          primary={primaryColorMap}
          accent={accentColorMap}
          grey={greyColorMap}>
  <MuiRootContainer [withFooter]>

    <MuiAppContainer />

    <footer></footer>
  </MuiRootContainer>
</MuiTheme>
```

### MuiAppContainer

App.js main container

```html
<MuiAppContainer>
  <MuiAppHeader>...</MuiAppHeader>

  <ReduxSwitch>
    <Route ..../>
  </ReduxSwitch>
</MuiAppContainer>
```
