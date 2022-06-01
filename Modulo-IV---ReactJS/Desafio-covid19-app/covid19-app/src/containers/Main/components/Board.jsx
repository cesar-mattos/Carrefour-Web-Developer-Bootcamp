import React, { memo } from 'react'
import Proptypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases, casesPerOneMillion, deathsPerOneMillion, totalTests, testsPerOneMillion } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={200} />

    return (
        <Grid container spacing={4}>

            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de Casos" color="#922B21" />
                <Card value={getValue(casesPerOneMillion)} label="Casos/1M hab" color="#C0392B" />
                <Card value={getValue(todayCases)} label="Casos - Hoje" color="#D98880" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de Mortes" color="#212F3D" />
                <Card value={getValue(deathsPerOneMillion)} label="Mortes/1M hab" color="#566573" />
                <Card value={getValue(todayDeaths)} label="Mortes - Hoje" color="#ABB2B9" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(totalTests)} label="Total de Testes" color="#1E8449" />
                <Card value={getValue(testsPerOneMillion)} label="Testes/1M hab" color="#58D68D" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de Recuperados" color="#5d78ff" />
            </Grid>


        </Grid>
    )
}

export default Board