//Exemplo que Callbak sincrono, a Post Three nao e printado

const posts = [
	{ title: "Post One", body: "This is post one" },
	{ title: "Post Two", body: "This is post two" }
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post, index) => {
			output += `<li class="list-group-item">${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	setTimeout(() => {
		posts.push(post);
	}, 2000);
}

getPosts();

createPost({ title: "Post Two", body: "This is post three" });