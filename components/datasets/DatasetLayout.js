import './DatasetLayout.scss'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'components/_common/jumbotron/Jumbotron'
import ContentWrapper from 'components/_common/content-wrapper/ContentWrapper'

const DatasetLayout = (props) => {
    const { children } = props

    return (
        <div>
            <Button variant="secondary">Primary</Button>
            <Jumbotron title='Global diesel demand'>
                <Breadcrumb className='subheader_breadcrumb'>
                    <Breadcrumb.Item >Datasets</Breadcrumb.Item>
                    <Breadcrumb.Item active>Global Diesel demand</Breadcrumb.Item>
                </Breadcrumb>
                <Nav className='dataset_tabs' variant='tabs'>
                    <Nav.Item>
                        <Nav.Link as='div'>Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='div'>Versions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='div'>Releases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='div'>Licence</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='div'>Settings</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Jumbotron>

            <ContentWrapper>
                {children}
            </ContentWrapper>

        </div>
    )
}

export default DatasetLayout
