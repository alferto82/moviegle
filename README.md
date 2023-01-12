# Moviegle

![image](https://user-images.githubusercontent.com/3264134/212081017-af4f9616-21c9-4d54-8680-71498e602587.png)

Moviegle is a movie search developed using TMDB API (https://www.themoviedb.org/documentation/api).

We have 3 differents tabs:
- #### Search
- #### Favorites
- #### Watch Later


All the sections are paginated.
![image](https://user-images.githubusercontent.com/3264134/212082288-e2ee320f-1ea5-4c0c-b84a-708a56876c3c.png)



## Search
This is the principal tab where user can search a movie using the title (there isn't restrictions in the length of the movie title). Results are presented in boxes (in mobile we use a different layout) with two icons (add to favorites and add to watch later)
![image](https://user-images.githubusercontent.com/3264134/212081666-4c0ac5a0-4ee7-4729-99ed-e4cb063592a5.png)

![image](https://user-images.githubusercontent.com/3264134/212081552-410602b8-47e5-4185-8a13-1cde3d9ea71b.png)

API call: 

## Favorites
Here we show the favorites movies that have been added to the favorite list. To remove a movie from favorites, we should click on the icon again

## Watch Later
Here we show the favorites movies that have been added to the watch later list. To remove a movie from watch list, we should click on the icon again

----
### IMPORTANT:
If you want to deploy this locally, you need to modify .env file:
````javascript
REACT_APP_APIKey=INSERT_HERE_YOUR_API_KEY
REACT_APP_SessionId=INSERT_HERE_YOUR_SESSION_ID