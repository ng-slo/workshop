# Practical part

**Before you start please check if you have all of the [prerequirements](https://github.com/ng-slo/workshop/tree/master/08-component2#prerequirements) done.**

## Angular component 2

### Exercise 1
Change your project style preprocessor from CSS to SCSS.

### Exercise 2
In `FamilyTreeComponent` you now have three arrays with three families. Merge these to one array and create a function that will return family based on the level.

### Exercise 3
Let's show the last name with upper case, so that we will see it easily.

![image](https://cloud.githubusercontent.com/assets/9574457/25848831/650bc98c-34bc-11e7-922c-a9ca12e29102.png)

### Exercise 4
Create a button in `FamilyTreeComponent` that will allow you to toggle edit mode property for your family tree. When you are not in edit mode text should say `Start editing`, and when you start editing it should say `Stop editing`. Default value is `false`.

![image](https://cloud.githubusercontent.com/assets/9574457/25847844/191a6776-34b8-11e7-9c54-f8dd705c4bba.png)

### Exercise 5
Insert add form in `FamilyLevelComponent` as an additional item besides persons. Form should look like bellow. This form should be shown only when you are in editMode.

![image](https://cloud.githubusercontent.com/assets/9574457/25848647/93a83e8e-34bb-11e7-9e5e-2bc3d1e2a36e.png)

### Exercise 6
When you click on `Add person` button form should be submitted and saved into your array that you have created in exercise 2. Also you should clear form, so that you are ready for the next entry.

![image](https://cloud.githubusercontent.com/assets/9574457/25848687/be1a4a2c-34bb-11e7-83c7-3ab781375455.png)

### Exercise 7
Now that we can add new members to your tree, let's simplify the love button. Instead of clicking on the small button, let's allow the user to click on the whole `FamilyPersonComponent` component and give love. Also change the background when hovering the whole component.

![image](https://cloud.githubusercontent.com/assets/9574457/25848791/2aac92ee-34bc-11e7-80df-e0315ccf933b.png)