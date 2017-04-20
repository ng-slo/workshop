# Practical part

**Before you start please check if you have all of the [prerequirements](https://github.com/ng-slo/workshop/tree/master/06-component#prerequirements) done.**

## Angular component

### Exercise 1
Create Angular CLI project. In this project create a new component `family-tree`. At the top of the template print out your name, which is located in the typescript file as a string variable.

![image](https://cloud.githubusercontent.com/assets/9574457/25218983/147df88c-25ad-11e7-841b-bb12cc2a7d20.png)

## Exercise 2
Create an array object in the `family-tree` component with your siblings. Print all your siblings by levels in the `family-tree` component.
Change your string variable to object variable with properties `firstName` and `lastName`. Use these two properties when you are adding yourself into a tree. Each level should be in a different object (`familyOne`, `familyTwo`, `familyThree`)
Example of an object: 

```
const treeItem = {
    firstName: 'John',
    lastName: 'Smith',
    image: 'https://randomuser.me/api/portraits/yy/xx.jpg' // xx is a random number, yy can be values men or women
    connection: 'brother',
    level: 1
}
```

![image](https://cloud.githubusercontent.com/assets/9574457/25221490/91757a56-25b5-11e7-9494-cbc37e896320.png)

## Exercise 3
Now we have three different for-loops doing the same thing, let's optimize this. Create the component `family-level` and move HTML from for-loop into this component. Now use input to send data into this new component. Now we can easily add more levels.

## Exercise 4
Let's add some love to this tree. Create a new component `family-person` and move person specific HTML into this new component. Send person data in as well. Add love icon and counter below the connection field. If user clicks on it, counter next to this icon should increment. Default value of this counter is 0.

HINT: You can use `&hearts;` for the heart icon

![image](https://cloud.githubusercontent.com/assets/9574457/25223835/e0a2f82c-25bc-11e7-855d-cdb9ee4c11e1.png)

## Exercise 5
Let's send all this love to our master component `family-tree` and display the total amount of loves from all persons. We would like to display total loves and who was loved last. If you didn't receive any love yet, loved by should be hidden.

![image](https://cloud.githubusercontent.com/assets/9574457/25224349/70a5d826-25be-11e7-847a-20e7fcbdf051.png)

![image](https://cloud.githubusercontent.com/assets/9574457/25224399/90820f02-25be-11e7-8200-53a4d6f5a8b9.png)

