import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {
    Card, CardText, CardBody,
    Row, Col
} from 'reactstrap';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Detail = ({
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


    let { slug } = useParams()
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

    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blog-detail?slug=${slug}`)
            .then(res => {
                setPost(res.data)
            })

    }, [slug])


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    {post.map(item => {
                        return (

                            <div>
                                <SectionHeader data={{ title: item.title }} className="center-content" />
                                <div className={splitClasses}>

                                    <Row>


                                        <Col>
                                            <Card>
                                                <CardBody>

                                                    <CardText className="content-typo">{ReactHtmlParser(item.content)}</CardText>

                                                </CardBody>
                                            </Card>
                                        </Col>



                                    </Row>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

export default Detail;