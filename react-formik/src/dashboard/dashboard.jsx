import React, {Component} from 'react'
// import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {credito: 0, debito: 0}
    }
    
    render() {
        const { credito, debito } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            value={`R$ ${credito}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debito}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='modey'
                            value={`R$ ${credito-debito}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}