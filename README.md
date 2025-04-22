A simple URL shortener app built with Node.js, Express, and NeDB as a local db it is not good for production use but this was never the intention it just smth to learn new skills also used nanoid to generate the short code.
This project provides a simple yet effective way to shorten long URLs while maintaining a clean, modern interface.
The backend is built on Express and Node.js, using NeDB as a lightweight, file-based database solution. It wasn't a complex technical challenge, but it helped me understand how to structure a full-stack application and handle URL manipulation effectively.
I added some URL validation both on FE and BE and duplicate detection to make it more robust and user-friendly.
I used vanilla JavaScript to keep things simple while maintaining good performance.
The project follows a straightforward flow: users enter a URL, the system validates and formats it, checks for duplicates, generates a unique short code, and returns the shortened URL. The interface updates automatically to show the new shortened URL in the list.
This project helped me get familiar with full-stack development, URL manipulation, and creating a seamless user experience. It also gave me a good understanding of how to structure a Node.js application and handle different types of user input effectively.
next step in this project might be adding user managment and try to update the db model to have more statistical data about each url like how many click and when was it initialized 
and also add CRUD operation with different enpoints 
but that doesnt seem as important to me it was never the idea to push it for production i just wanted to see the hashing part and how to verify user's input also i had on mind 
the idea to implement the hashing function myself but realized it wouldn't be as time effictive as nanoid and it would take some observable annoying time so gave up on that

here is a diagram of how it operates basically 

![image](https://github.com/user-attachments/assets/c09313a4-4795-4fff-a647-cfa649d71b91)

