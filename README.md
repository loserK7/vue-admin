# vue_admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



```javascript
Function.prototype.bind = function(context){
    var self = this 
    var args = Array.prototype.slice.call(arguments,1)
    return function(){
		var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(context,args.concat(bindArgs))
    }
}
```





*第一种
	+demo1
    +demo2