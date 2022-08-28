import React, { useContext, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'; 
import { 
  Box,
  Block,
  Heading,
  Breadcrumb,
  Content
} from 'react-bulma-components';
import HymnsContext from '../context/HymnsContext/hymnsContext';

const Hymn = () => {
  const { hymnId } = useParams();
  const hymnsContext = useContext(HymnsContext);
  const { getHymn, hymnSelected } = hymnsContext;

  useEffect(() => {
    getHymn(hymnId)
  }, [])

  return(
    <Box className="box-hymn">
      <Block>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Inicio</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active >
            <a>{ hymnSelected.title }</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Block>
      <Block>
        <Heading>
          { hymnSelected.title }
        </Heading>
        <Content>
          { ReactHtmlParser(hymnSelected.lyrics) }
        </Content>
      </Block>
    </Box>
  )
};

export default Hymn;
