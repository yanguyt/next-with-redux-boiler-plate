import React from 'react'
import { connect } from "react-redux"

const Home = ({ teste }) => {

    return (
        <p>{teste}</p>
    )
}

const mapStateToProps = ({ teste }) => {
    return {
        teste: teste.teste
    }
}

export default connect(mapStateToProps, null)(Home)