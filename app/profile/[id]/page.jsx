"use client";

import { useState, useEffect } from "react";
import Profile from "@components/profile";

const AboutProfile = ({ params }) => {
	const { id } = params;
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${id}/posts`);
			const data = await response.json();
			setPosts(data);
		};

		console.log({ posts });

		if (id) fetchPosts();
	}, []);

	return (
		<>
			{posts.length > 0 ? (
				<Profile
					name={posts[0]?.creator?.username}
					desc={`Welcome to ${posts[0]?.creator.username} personalized profile page`}
					data={posts}
					handleEdit={() => {}}
					handleDelete={() => {}}
				/>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default AboutProfile;
