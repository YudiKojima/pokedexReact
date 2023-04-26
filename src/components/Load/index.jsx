import { Container, Skeleton } from '@mui/material'
import React from 'react'

export default function Load() {
  return (
    <Container maxWidth='false'>
    <Skeleton variant="rounded" width='100%' height={200} sx={{marginBottom: '2em'}} animation="wave" /> 
    <Skeleton variant="rounded" width='100%' height={200} sx={{marginBottom: '2em'}}animation="wave" />
    <Skeleton variant="rounded" width='100%' height={200} sx={{marginBottom: '2em'}}animation="wave" /> 
    <Skeleton variant="rounded" width='100%' height={200} sx={{marginBottom: '2em'}}animation="wave" /> 
    <Skeleton variant="rounded" width='100%' height={200} sx={{marginBottom: '2em'}}animation="wave" /> 
    </Container>
  )
}
