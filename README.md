# Technical challenges for Software Engineer position

> Please create a Git Repository for this challenge and commit all answers to it. Please keep this organised and commit with clear messages. Share the link with us once complete.

## Basics

> These questions have multiple correct answers. They are meant to test your knowledge.

1. What is "N + 1" problem in REST APIs and how would you solve it?
- In REST to fetch extra info we have always make many APIs calls, this can be solved by using graphQl or API versioning to enhance APIS
2. When do you stop writing unit tests? 
-  When the cost of finding more bugs through unit testing exceeds the cost of finding them through your QA process or when all the tests in the test list have succeeded
3. Why would one use monorepos? 
- I am not fan of monorepos
4. What is Liskov substitution principle?
- Each parent object should be fully replaceable by child object. objects of a superclass shall be replaceable with objects of its subclasses without breaking the application
5. How do you avoid race conditions?
- It can be resolved by thread synchronization in critical sections.
6. What is the first thing you do when you encounter a bug?
- Document the steps to reproduce then confirm with BAs


## "Why would anyone do drugs when they can just mow a lawn?"

> For this challenge, user authentication is **not** required. There is no time limit. Assume that the frontend is handled by another developer.

- **Language**: _JavaScript_ (TypeScript is preferrable, but not required)
- **Framework**: _NestJS_
- **Database**: _MongoDB_

Hank likes to mow the lawn. Back in the day, he would offer his services to his neighbors for a fee. Now, he wishes to start a company around this.
As his friend, he asked if you can help him digitize the business. Users would register on the website, then book visits from their dashboard. 
One of the requirements he specified is to have scalable pricing; 
To mow 1 square metre, the client will have to pay £1. 
If the area is bigger than 15 square metres, a discount of 10% will be applied. 
If the area is bigger than 25 square metres, a discount of 15% will be applied. 
To acquire new clients, Billy wants to have a coupon system in place as well.
- We can create Coupon module to handle it and handle in booking service if user send coupon along.

## Future of lawn mowing endeavours

> This section has no correct answers. Albeit optional, your answers will help us understand your thinking process.

1. What other features would you like to add? - logging, Swagger, Payment gateway, Booking reminder, Review/Rating, Feedback
2. How would you handle user authentication? Passport JWT strategy used in code
3. How would you deploy the solution in an enterprise environment? - yarn build , then build folder can be pushed to S3 or firebase hosting or Horoku - any static web hosting system
