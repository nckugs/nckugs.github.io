// 用於自動生成部落格和作品集內容
document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        { title: "部落格文章標題 1", content: "這是部落格文章 1 的內容..." },
        { title: "部落格文章標題 2", content: "這是部落格文章 2 的內容..." }
    ];
    
    const portfolioItems = [
        { title: "作品名稱 1", description: "這是作品描述 1", imgUrl: "https://via.placeholder.com/300" },
        { title: "作品名稱 2", description: "這是作品描述 2", imgUrl: "https://via.placeholder.com/300" },
        { title: "作品名稱 3", description: "這是作品描述 3", imgUrl: "https://via.placeholder.com/300" }
    ];

    // 渲染部落格文章
    const blogContainer = document.querySelector(".blog-posts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content} <a href="#">閱讀更多</a></p>`;
        blogContainer.appendChild(postElement);
    });

    // 渲染作品集
    const portfolioContainer = document.querySelector(".portfolio-grid");
    portfolioItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("portfolio-item");
        itemElement.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioContainer.appendChild(itemElement);
    });
});
