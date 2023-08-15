// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Fragment } from 'react'

const Dashboard = () => {
  return (
    <div style={{height: '100%', background:'white',display: 'flex', justifyContent: 'center', padding:'3rem', alignItems:'center'}}>
    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h2' color='secondary' sx={{ fontSize: '2.5rem' }}>
          Bienvenido
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h2' color='primary' sx={{ fontSize: '2.5rem', textAlign:'center' }}>
          Sistema Logística Compras
        </Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', width:'25rem', height:'17rem' }} marginTop={5} className='giftTamanio'>
        <Image loading='lazy' src='/images/pages/shopping.gif' width={400} height={300} 
        />
      </Grid>
    </Grid>
    </div>
  )
}

export default Dashboard
