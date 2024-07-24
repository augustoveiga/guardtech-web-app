import React from 'react';
import styled from 'styled-components';
import { Typography, Container } from '@mui/material';

const PageContainer = styled.div`
  padding: 3rem 1rem;
  background-color: #fff;
  width: 100%;
`;

const PostTitle = styled(Typography)`
  font-size: 3rem !important;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem; /* Ajuste o espaçamento conforme necessário */
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--text-secondary);

  > *:not(:last-child) {
    margin-right: 0.5rem; /* Espaço entre a data e o autor */
  }
`;

const PostDate = styled(Typography)`
  margin-right: 0.5rem; /* Espaço entre a data e o autor */
`;

const PostAuthor = styled(Typography)`
  margin-left: 0.5rem; /* Espaço entre a data e o autor */
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-main);
  padding: 0 1rem;
  margin-top: 2rem; /* Adicionado para aumentar o espaçamento entre a data e o conteúdo */

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 2rem auto;
  }
`;

const BlogPostPage = ({ title, date, author, content }) => {
  return (
    <PageContainer>
      <Container>
        <PostTitle variant="h1" component="h1">
          {title}
        </PostTitle>
        <PostMeta>
          <PostDate variant="body2">{date}</PostDate>
          <PostAuthor variant="body2">by {author}</PostAuthor>
        </PostMeta>
        <PostContent dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </PageContainer>
  );
};

export default BlogPostPage;
