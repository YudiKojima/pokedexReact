import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';
import { handleAbility, handleTypes } from '../../utils';

export default function PokemonTable({ pokemonData }) {
  return (
    <TableContainer component={Paper} sx={{width: 'fit-content', boxShadow: 'none'}}>
      <Table>
        <TableBody>
              <TableCell>
                Height
              </TableCell>
              <TableCell>
                {pokemonData.height} cm
              </TableCell>
              <TableCell>
                |
              </TableCell>
              <TableCell>
                Weight
              </TableCell>
              <TableCell>
                {pokemonData.weight} g
              </TableCell>
              <TableCell>
                |
              </TableCell>
              <TableCell>
                Type
              </TableCell>
              <TableCell>
                {handleTypes(pokemonData.types)}
              </TableCell>
              <TableCell>
                |
              </TableCell>
            <TableCell>
                Ability
            </TableCell>
            <TableCell>
                {handleAbility(pokemonData.abilities)}
            </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}