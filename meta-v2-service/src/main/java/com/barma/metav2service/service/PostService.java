package com.barma.metav2service.service;

import com.barma.metav2service.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
