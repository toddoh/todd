import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";

import { BoldStrongUpperTitle } from "../../styles/TextStyles";

const EntryList = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 5vw 0;
  display: flex;
  flex-flow: column;
`;

const Articles = styled.ul`
  margin: 0;
  padding: 0;

  a {
    color: var(--text-color-main);
    text-decoration: none;
  }
`;

const ArticleItem = styled.li`
  list-style: none;
  text-decoration: underline;
`;

const BlogEntryPreview = ({ articleList }: { articleList: Array<object> }) => {
  const articleListPreview = useMemo(
    () => articleList.slice(0, 5),
    [articleList]
  );

  return (
    <EntryList>
      <BoldStrongUpperTitle style={{ marginBottom: "15px" }}>
        Recent articles
      </BoldStrongUpperTitle>

      {articleListPreview.map(
        (article: {
          id: string;
          title: string;
          timestamp: number;
          content: string;
        }) => (
          <Articles key={article.id}>
            <Link href={`/article/${article.id}`}>
              <a>
                <ArticleItem key={article.id}>{article.title}</ArticleItem>
              </a>
            </Link>
          </Articles>
        )
      )}
    </EntryList>
  );
};

export default BlogEntryPreview;
