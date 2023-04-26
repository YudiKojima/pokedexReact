import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { handleAbility, handleTypes } from '../../utils';

export default function PokemonTable({ pokemonData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table">
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                Height
              </TableCell>
              <TableCell>
                {pokemonData.height}
              </TableCell>
              </TableRow>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                Weight
              </TableCell>
              <TableCell>
                {pokemonData.weight}
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                Type
              </TableCell>
              <TableCell>
                {handleTypes(pokemonData.types)}
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
                Ability
            </TableCell>
            <TableCell>
                {handleAbility(pokemonData.abilities)}
            </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}