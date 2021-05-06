import React from 'react';
import Article from './article';
import Nav from '../../components/Nav/Nav'
import Forum from '../Main/ForumEngine/Forum.jsx'

const wikipage = () => {
    return (
        <div>
          <Nav />
          <Article />
          <Forum />
        </div>
      )
    }

    export default wikipage
