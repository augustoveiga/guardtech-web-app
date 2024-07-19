import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { title as post1Title } from '../Blog/Posts/Post1/Post1';
import post1Image from '../Blog/Posts/Post1/post1.jpg'
import { title as post2Title } from '../Blog/Posts/Post2/Post2'
import post2Image from '../Blog/Posts/Post2/post2.png'
import { title as post3Title } from '../Blog/Posts/Post3/Post3';
import post3Image from '../Blog/Posts/Post3/post3.jpg'

const Section = styled.div`
  padding: 4rem 2rem;
  text-align: left;  /* Alinhar à esquerda */
  background-color: #f4f4f4; /* Cor de fundo cinza */
  width: 100%;
`;

const SectionTitle = styled(Typography)`
  font-size: var(--font-size-h2);
  margin-bottom: 1rem;
  text-align: left;  /* Alinhar à esquerda */
`;

const SectionSubtitle = styled(Typography)`
  font-size: 1.5rem;  /* Tamanho maior para subtítulo */
  margin-bottom: 3rem !important;
  text-align: left;  /* Alinhar à esquerda */
  color: var(--text-secondary);
`;

const BlogPostCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

const LargeBlogPostCard = styled(BlogPostCard)`
  height: 400px; /* Altura do card grande reduzida */
`;

const MediumBlogPostCard = styled(BlogPostCard)`
  height: calc(400px / 2 - 8px); /* Altura dos cards médios empilhados */
`;

const BlogPostImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(70%);
  transition: transform 0.3s ease; /* Transição para o zoom */
  ${BlogPostCard}:hover & {
    transform: scale(1.1); /* Zoom na imagem */
  }
`;

const BlogPostContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: #fff;
  z-index: 1;
  text-align: left;
`;

const BlogPostTitle = styled(Typography)`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const BlogPostSummary = styled(Typography)`
  font-size: 1rem;
`;

const BlogSection = () => {
  const posts = [
    {
      title: post1Title,
      image: post1Image,
      link: '/blog/post1',
      size: 'large'
    },
    {
      title: post2Title,
      image: post2Image,
      link: '/blog/post2',
      size: 'medium'
    },
    {
      title: post3Title,
      image: post3Image,
      link: '/blog/post3',
      size: 'medium'
    }
  ];

  return (
    <Section>
      <Container>
        <SectionTitle variant="h2" component="h2">
          Latest Blog Posts
        </SectionTitle>
        <SectionSubtitle>
          Discover Our Insights and Stay Informed
        </SectionSubtitle>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} style={{ paddingRight: '8px' }}>
            <Link to={posts[0].link} style={{ textDecoration: 'none' }}>
              <LargeBlogPostCard>
                <BlogPostImage style={{ backgroundImage: `url(${posts[0].image})` }} />
                <BlogPostContent>
                  <BlogPostTitle variant="h5">{posts[0].title}</BlogPostTitle>
                  <BlogPostSummary>{posts[0].summary}</BlogPostSummary>
                </BlogPostContent>
              </LargeBlogPostCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: '8px' }}>
            <Grid container direction="column" spacing={2}>
              {posts.slice(1).map((post, index) => (
                <Grid item xs={12} key={index}>
                  <Link to={post.link} style={{ textDecoration: 'none' }}>
                    <MediumBlogPostCard>
                      <BlogPostImage style={{ backgroundImage: `url(${post.image})` }} />
                      <BlogPostContent>
                        <BlogPostTitle variant="h5">{post.title}</BlogPostTitle>
                        <BlogPostSummary>{post.summary}</BlogPostSummary>
                      </BlogPostContent>
                    </MediumBlogPostCard>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default BlogSection;
