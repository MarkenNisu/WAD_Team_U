// fetch("https://gist.githubusercontent.com/MarkenNisu/a86bf825fcca393682d330ea911ff16c/raw/5a7026a36e6a94b49a02c5eb70393768c9ffae4c/posts.json")
//     .then(response => response.json())
//     .then(posts => posts.forEach(postData => {

//         const postsElement = document.querySelector(".posts");

//         const postElement = document.createElement("article");
//         postElement.className = "post";

//         const postHeaderElement = document.createElement("div");
//         postHeaderElement.className = "post-header";

//         const profilePictureElement = document.createElement("img");
//         profilePictureElement.className = "post-profile";
//         profilePictureElement.setAttribute("src", "images/default_pilt.webp");
//         profilePictureElement.setAttribute("alt", "Profile picture");

//         const dateElement = document.createElement("p");
//         dateElement.textContent = postData.date;

//         postHeaderElement.append(profilePictureElement, dateElement);

//         const textElement = document.createElement("h3");
//         textElement.textContent = postData.text;

//         const likeButtonElement = document.createElement("button");
//         likeButtonElement.className = "like-button"
//         const buttonImageElement = document.createElement("img");
//         buttonImageElement.src = "images/thumbs.png";
//         buttonImageElement.alt = "Like";
//         buttonImageElement.width = "20";
//         likeButtonElement.append(buttonImageElement);

//         postElement.append(postHeaderElement, textElement);

//         if (postData.image !== null) {
//             const imageElement = document.createElement("img");
//             imageElement.className = "post-image";
//             imageElement.src = postData.image;
//             imageElement.setAttribute("alt", "Post image");

//             postElement.append(imageElement);
//             }

//         postElement.append(likeButtonElement);
//         postsElement.append(postElement);
//     }));

    fetch("posts.json")
    .then(response => response.json())
    .then(posts => posts.forEach(postData => {

        const postsElement = document.querySelector(".posts");

        const postElement = document.createElement("article");
        postElement.className = "post";

        const postHeaderElement = document.createElement("div");
        postHeaderElement.className = "post-header";

        const profilePictureElement = document.createElement("img");
        profilePictureElement.className = "post-profile";
        profilePictureElement.setAttribute("src", "images/default_pilt.webp");
        profilePictureElement.setAttribute("alt", "Profile picture");

        const dateElement = document.createElement("p");
        dateElement.textContent = postData.date;

        postHeaderElement.append(profilePictureElement, dateElement);

        const textElement = document.createElement("h3");
        textElement.textContent = postData.text;

        const likeButtonElement = document.createElement("button");
        likeButtonElement.className = "like-button"
        const buttonImageElement = document.createElement("img");
        buttonImageElement.src = "images/thumbs.png";
        buttonImageElement.alt = "Like";
        buttonImageElement.width = "20";
        likeButtonElement.append(buttonImageElement);

        postElement.append(postHeaderElement, textElement);

        if (postData.image !== null) {
            const imageElement = document.createElement("img");
            imageElement.className = "post-image";
            imageElement.src = postData.image;
            imageElement.setAttribute("alt", "Post image");

            postElement.append(imageElement);
            }

        postElement.append(likeButtonElement);
        postsElement.append(postElement);
    }));