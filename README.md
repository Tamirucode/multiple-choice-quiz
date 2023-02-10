## overview
 
Multiple choice quiz is a site that hopes to show how the JavaScript concept works in quiz applications.  
The site will be targeted toward people who wanted to broaden their knowledge level wider scope and have fun 
with family and friends. The site will allow for assessing the general knowledge of the users.
![image](https://user-images.githubusercontent.com/116649197/217908833-62492079-806a-460c-ae29-5375f1407ab2.png)
## Features 

   **Existing features**
	
   **Heading**
			
     At the top of the first question, the heading shows the quiz type: Multiple choice
	 This heading tells the user what type of quiz is doing 
![image](https://user-images.githubusercontent.com/116649197/217958869-b1445efe-6bf4-4bc9-8e54-9b7dace05f6a.png)
			
   **The quiz options**
			
     The quiz option opens a new window  and, each question comes with four choices.
 	 There is only one of these four correct choices. The choices are radio buttons 
     that the user can click to make their selection.
![image](https://user-images.githubusercontent.com/116649197/217959756-4353f6c8-b1a4-4f83-9928-9d77ae2c895e.png)


  **Previou Question button**
            
     This section is an interactive button the user can click to go back 
     to the previous question to adjust their correct choice
![image](https://user-images.githubusercontent.com/116649197/217960228-19c061e5-3550-45b1-a125-b98c49b50983.png)


  **Submit button**
     
     This section provides an interactive submit button the user can click the choice, 
     if it is correct add points.I have also added a feature that will allow the page to
     jump to the next question once an option is selected from the list of choice options.
![image](https://user-images.githubusercontent.com/116649197/217998953-c04e9284-387d-4d21-b928-97c3296c798c.png)
			

**Quiz score**			

     when the user clicks submit button after doing all questions, the score and 
     feedback will be displayed
     The javascript code calculates the user's correct answer with 
     corresponding feedback
![image](https://user-images.githubusercontent.com/116649197/218000700-b34f186b-574c-48cf-a91f-938fee1df236.png)


**The Footer**
			
    It shows instructions for the quiz
    It contains information about  how the user score is calculated 
![image](https://user-images.githubusercontent.com/116649197/218001210-9e1c122a-f130-44cc-8b05-808710271233.png)


**Features left to implement**
			
	when there is time, I would like to include a time limit in the quiz and is measuring
    how fast the user can demonstrate their knowledge.

**Testing**
	
- I tested doing this quiz in different browsers: Chrome, Firefox, Safari,
- I confirmed that colors and fonts are easy to read and accessible 
    by running the lighthouse test
![image](https://user-images.githubusercontent.com/116649197/218002956-ee2f4e64-226f-428a-adc8-83007fc48d72.png)
  
    
- I confirmed that this quiz is responsive,  looks great, and functions 
    on all screen sizes by using extensive media query and dev tools

**Validator Testing**
				
    HTML
- No errors were returned when passing through the official w3c validator
![image](https://user-images.githubusercontent.com/116649197/218001832-3304e0ef-77c8-41d2-8482-2b92b6253558.png)

			
    CSS
- No errors were returned when passing through the official (Jigsaw)validator
![image](https://user-images.githubusercontent.com/116649197/218002435-bef2d6f4-b5b5-49da-b44a-7017b3e39471.png)

    JavaScript
- No errors were found when passing through the official Jshint validator
   
  The following metrics were returned:
- There are 7 functions in this file.
- The function with the largest signature takes 1 argument, while the median is 0.
- The largest function has 19 statements in it, while the median is 3.
- The most complex function has a cyclomatic complexity value of 15 while the median is 1.


**Bugs**
	
    solved bugs
	when I ran the js file I discovered some warnings my js code 
    at the end missed a semicolon and then fix the issue

    Unfixed Bugs
	No unfixed bugs

			
**Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows
1. From Git-hub page, click Tamirucode/multiple-choice-quiz/repository, 
   then navigate to the setting tab
2. next see the left corner under code and automation, click pages
3. after that under the  pages you will see the live page is published
  just after a few seconds the page gives us a link.

[The live link can be found here](https://tamirucode.github.io/multiple-choice-quiz/)

**Technology used**

- HTML

- CSS

- JavaScript


**Frameworks, Library and Program**
1. Hover: CSS
2. Google fonts
3. Git
	used Git terminal to commit to Git and push to Git hub
5.GitHub
	store the project code after being pushed from Git


**Credits**

  Code
     
     MDN web docs
     love maths project
     www.w3schools.com

**content**
 
 The content is written by developer
 
 Instruction on how to implement forEach method javascript
 for selected choice and unselected choices was taken from a specific 
 youtube tutorial and GameDevAcademy Zenva website.
 
 The load quiz function code to reload the quiz was taken from w3Schools 

