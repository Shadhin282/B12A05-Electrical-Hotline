### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 #### Answer :
       - getElementById, getElementsByClassName, getElementsByClassName are used to select html id, class attribute and querySelector / querySelectorAll are used to select css selector.

### 2. How do you create and insert a new element into the DOM?
#### Answer:
        - const ol = document.getElementsByTagName("ol")
        - const li = document.createElement('li')
        - ol.appendChild(li)

### 3. What is Event Bubbling and how does it work?
#### Answer :
        - Event Bublling means if we click on a event or where any eventlistener has applied then that event and it's parent event also will be active. if click on a child event then parent event also will be active. but if click on parent event then child event will not be active.

### 4. What is Event Delegation in JavaScript? Why is it useful?
#### Answer :
      - Event Delegation means sometimes we applied a event in a section child element for a specific task later when we create element by Javascript DOM but that event is not applied on this new element. 
      for this issue , if we apply event on a section parent element then all the child element response this event and also new element create by javascript DOM that also response this parent event effect.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
#### Answer :
    - PreventDefault() method is used to prevent reload automatically as we use form tag. 
    - stopPropagation() method is used to prevent Event Bubbling.
