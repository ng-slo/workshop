# Practical part

**NOTE: All the components should be wrapped into a div with a class container which has the following css:


```
.container {
    background: rgba(123,323,230,0.3);
    padding: 30px;
    text-align: center;
    border: 1px solid darkgreen;
    margin: 10px;
}
```

The idea of the first three exercises is to get a visual look of how the component tree is formed, and how the components are nested
For creating components, modules use angular cli

 - ng g c -> creates components
 - ng g m -> creates module**

## Building ANgular

### Exercise 1
Create 3 components (test, hello, goodbye) and put them into the root component.


## Exercise 2
Put hello and goodbye on the same level inside the test component

## Exercise 3
Put goodbye component inside the hello component (nest) and check the component tree

## Exercise 4
Extract test, hello, goodbye into a new module called "future" module, than include this module into the root (AppModule). *Do not forget what is the link between this two modules. (export maybe? :))

## Exercise 5
Create another module named "future2", and two new components which will be part of that module called (hello-future2 and goodbye-future2), and use hello-future2 somewhere in the test, hello or goodbye components from the "future" module


## Exercise 6
Install Augry (https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en), check its functionalities, inspect the tree component and the module graph

Github repo:
tags 1.0 to 5.0

https://github.com/denkomanceski/building-angular-workshop
