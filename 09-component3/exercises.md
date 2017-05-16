# Practical part

**Before you start please check if you have all of the [prerequirements](https://github.com/ng-slo/workshop/tree/master/09-component3#prerequirements) done.**

## Angular component 3

### Exercise 1
Create an attribute directive which be used instead of the css class .love that adds hover effect to family-person. You should use @HostBinding and @HostListener.
### Exercise 2
Create an attribute directive which will not allow entering numbers in the first name and last name fields when creating a new person. Hint: You should use @HostBinding and this regex: /^[a-zA-Z]*$/
### Exercise 3
Createa a pipe called 'ellipsis' which will shorten a text based on the parameters and add '...' at the end and use this pipe for the last name of the family. Example last name: 'Denko Someverylonglastname', when the pipe is used, it should be 'Denko Someverylong...'
### Exercise 4
Create a pipe which will be used to filter the members of a family. There should be only one input which will filter all the families at once.
### Exercise 5
Create a directive called [focus] which will inject ElementRef, and when is used on some input, the input will be focused automatically when rendered. Use this on the form for creating new members.
### Exercise 6
Try to use 'OnPush' change detection strategy on the family-person.component, and see what happens. Try to make the love() function work using the ChangeDetectorRef.


