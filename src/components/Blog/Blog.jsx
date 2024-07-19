import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { title as post1Title } from './Posts/Post1/Post1';
import post1Image from '../Blog/Posts/Post1/post1.jpg'

import { title as post2Title } from './Posts/Post2/Post2'
import post2Image from '../Blog/Posts/Post2/post2.png'

import { title as post3Title } from './Posts/Post3/Post3';
import post3Image from '../Blog/Posts/Post3/post3.jpg'

import { title as post4Title } from './Posts/Post4/Post4';
import post4Image from '../Blog/Posts/Post4/post4.jpg'

import { title as post5Title } from './Posts/Post5/Post5';
import post5Image from '../Blog/Posts/Post5/post5.jpg'

import { title as post6Title } from './Posts/Post6/Post6';
import post6Image from '../Blog/Posts/Post6/post6.png'

import { title as post7Title } from './Posts/Post7/Post7';
import post7Image from '../Blog/Posts/Post7/post7.jpg'

import { title as post8Title } from './Posts/Post8/Post8';
import post8Image from '../Blog/Posts/Post8/post8.jpg'

import { title as post9Title } from './Posts/Post9/Post9';
import post9Image from '../Blog/Posts/Post9/post9.png'

import { title as post10Title } from './Posts/Post10/Post10';
import post10Image from '../Blog/Posts/Post10/post10.jpg'

import { title as post11Title } from './Posts/Post11/Post11';
import post11Image from '../Blog/Posts/Post11/post11.jpg'

const Section = styled.div`
  padding: 4rem 2rem;
  text-align: left; /* Alinhado à esquerda */
  background-color: #fff;
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 3rem; /* Margem inferior de 3rem */
`;

const SectionTitle = styled(Typography)`
  font-size: var(--font-size-h2);
  margin-bottom: 2rem;
  text-align: left; /* Alinhado à esquerda */
`;

const BlogPostCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin: 0.5rem; /* Margem uniforme para todos os lados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const LargeBlogPostCard = styled(BlogPostCard)`
  height: 350px;
`;

const MediumBlogPostCard = styled(BlogPostCard)`
  height: 250px;
`;

const SmallBlogPostCard = styled(BlogPostCard)`
  height: 200px;
`;

const BlogPostImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(70%);
  transition: transform 0.3s ease;
  ${BlogPostCard}:hover & {
    transform: scale(1.1);
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
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const BlogPostSummary = styled(Typography)`
  font-size: 1rem;
  text-align: left;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const posts = [
  { title: post1Title, image: post1Image, link: '/blog/post1', size: 'large' },
  { title: post2Title, image: post2Image, link: '/blog/post2', size: 'small' },
  { title: post3Title, image: post3Image, link: '/blog/post3', size: 'small' },
  { title: post4Title, image: post4Image, link: '/blog/post4', size: 'medium' },
  { title: post5Title, image: post5Image, link: '/blog/post5', size: 'small' },
  { title: post6Title, image: post6Image, link: '/blog/post6', size: 'medium' },
  { title: post7Title, image: post7Image, link: '/blog/post7', size: 'small' },
  { title: post8Title, image: post8Image, link: '/blog/post8', size: 'small' },
  { title: post9Title, image: post9Image, link: '/blog/post9', size: 'medium' },
  { title: post10Title, image: post10Image, link: '/blog/post10', size: 'small' },
  { title: post11Title, image: post11Image, link: '/blog/post11', size: 'small' },
];

const renderPosts = () => {
  const rows = [];
  let currentRow = [];
  let currentRowWidth = 0;

  posts.forEach((post, index) => {
    let gridSize;
    if (post.size === 'large') {
      gridSize = 8;
    } else if (post.size === 'medium') {
      gridSize = 4;
    } else {
      gridSize = 4;
    }

    if (currentRowWidth + gridSize > 12) {
      rows.push(currentRow);
      currentRow = [];
      currentRowWidth = 0;
    }

    currentRow.push(
      <Grid item xs={12} sm={gridSize === 8 ? 12 : 6} md={gridSize} key={index}>
        <Link to={post.link} style={{ textDecoration: 'none' }}>
          <PostCardComponent post={post} adjacent={gridSize === 8 ? 'large' : 'medium'} />
        </Link>
      </Grid>
    );

    currentRowWidth += gridSize;
  });

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows.map((row, rowIndex) => (
    <Grid container spacing={2} key={rowIndex}>
      {row}
    </Grid>
  ));
};

const PostCardComponent = ({ post, adjacent }) => {
  let CardComponent;
  if (post.size === 'large') CardComponent = LargeBlogPostCard;
  else if (post.size === 'medium') CardComponent = MediumBlogPostCard;
  else CardComponent = SmallBlogPostCard;

  return (
    <CardComponent>
      <BlogPostImage style={{ backgroundImage: `url(${post.image})` }} />
      <Overlay />
      <BlogPostContent>
        <BlogPostTitle variant="h5">{post.title}</BlogPostTitle>
        <BlogPostSummary>{post.summary}</BlogPostSummary>
      </BlogPostContent>
    </CardComponent>
  );
};

const Blog = () => (
  <Section>
    <Container>
      <Header>
        <SectionTitle variant="h2" component="h2">
          Blog
        </SectionTitle>
      </Header>
      <Grid container spacing={2}>
        {renderPosts().map((row, index) => (
          <React.Fragment key={index}>{row}</React.Fragment>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Blog;
