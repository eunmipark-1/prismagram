export const USER_FRAGMENT = `
  id
  userName
`;

export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment{
    id
    text
    user {
      userName
    }
  }
`;

export const FILE_FRAGMENT = `
  id
  url
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post{
    id
    location
    caption
    files {
      ${FILE_FRAGMENT}
    }
    comments{
      ${COMMENT_FRAGMENT}
    }
    user {
      userName
      ${USER_FRAGMENT}
    }
  }
`;