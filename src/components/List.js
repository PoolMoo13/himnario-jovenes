import React, { useContext } from 'react';
import HymnsContext from '../context/HymnsContext/hymnsContext';
import { Link } from "react-router-dom";
import { 
  Box,
  Table
 } from 'react-bulma-components';

const List = () => {
  const hymnsContext = useContext(HymnsContext);
  const { hymns } = hymnsContext;
  hymns.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <Box className="box-list">
      <Table striped size="fullwidth" hoverable>
        <tbody>
        {
          hymns.map((h, i) => (
            <tr key={i}>
              <td>
                <Link to={`/${h.id}`}>
                  { h.title }
                </Link>
              </td>
            </tr>
          ))
        }
        </tbody>
      </Table>
      
    </Box>
  )
};

export default List;
