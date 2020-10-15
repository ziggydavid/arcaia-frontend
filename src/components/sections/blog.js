import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';
import { Helmet } from "react-helmet";
const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Blog = ({
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {

    const [posts, setPosts] = React.useState([])

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        'background'
    );
    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: '',
        paragraph: ''
    };


    React.useEffect(() => {
        axios.get('/blogs-posts/')
            .then(res => {


                setPosts(res.data)


            })

    }, [])

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <Helmet>
                <meta property="og:image" content="https://deezisoft.com/static/deezilogo.png" />
                <meta name="description" content="Software and Design solutions with Innovative and streamlined approach" />
                <meta property="og:title" content="Software development | Graphics | Video Editing" />
                <meta property="og:description"
                    content="An organization of tech enthusiasts to provide technology based solutions. Ranging form websites/software development, mobile applications, Graphics designs, creatives, video editings, motion graphics etc. We take care of the whole process for you with over 400 successful developments. 100% Guaranteed" />
                <meta property="og:url" content="https://deezisoft.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description"
                    content="An organization of tech enthusiasts to provide technology based solutions. Ranging form websites/software development, mobile applications, Graphics designs, creatives, video editings, motion graphics etc. We take care of the whole process for you with over 400 successful developments. 100% Guaranteed" />
                <meta name="twitter:title" content="Software development | Graphics | Video Editing" />
            </Helmet>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>

                        <Row>
                            {posts.map(item => {
                                return (
                                    <Col md="6">
                                        <Card>
                                            <CardImg top width="100%" src={require('./../../assets/images/blogpost.jpg')} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle className="text-left" style={{ color: "#1b98d5" }} tag={Link} to={`/blog/${item.slug}`}>{item.title.slice(0, 60)}...</CardTitle>
                                                <div className="text-left"><small style={{ fontSize: "12px" }}>Date Posted - {item.created}</small>
                                                </div>
                                                <CardText className="text-left">{ReactHtmlParser(item.preview.slice(0, 150))}...</CardText>
                                                <Button color="info" className="btn-sm" tag={Link} to={`/blog/${item.slug}`}>Read more</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })}


                        </Row>

                    </div>
                </div>
            </div>
            <div className="fixedsocial  floating">
                <div className="facebookflat">
                    <a href="https://wa.me/2349076277509"><img src={require("../../assets/images/whatsapp.svg")} alt="..." /></a>
                </div>
            </div>

        </section>
    );
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;