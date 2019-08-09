import React from 'react';
import Wrapper from '../../styles/aboutPage/largepara-styles';

const LargePara = ({ data }) => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Origin Story</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.content.childMarkdownRemark.html,
          }}
        />
      </div>
    </Wrapper>
  );
};

export default LargePara;
