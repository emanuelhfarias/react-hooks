Simple application to demonstrate React Hooks
* __useState__
    * substitute setState
* __useEffect__
    * substitute componentDidMount, componentDidUpdate and componentWillMount
* __useMemo__
    * Cache computed properties using memoization  
    Good to avoid expensive calculations every render
* __useCallback__
    * Cache functions using memoization  
    Good to avoid function redefinition every render (especially handle functions)  
    You can choose on which state a function should redefine

See [src/App.js](https://github.com/emanuelhfarias/react-hooks/blob/master/src/App.js)

