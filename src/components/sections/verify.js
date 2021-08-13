import React from "react";
import { Redirect, useParams, Link } from "react-router-dom"
import axios from "axios";
// reactstrap components
import { Button, Alert, Spin, Space} from 'antd';
import classNames from "classnames";
// reactstrap components   


// core components


function VerifyPage(topDivider,
    bottomDivider,) {
    const [loading, setLoad] = React.useState(false)
    const [detail, setDetail] = React.useState(null)
    const [valid, setValid] = React.useState(null)
    const [redirect, setRedirect] = React.useState(null)
    let { token } = useParams()



    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (token) {
            const user = {
                key: token
            }
            setLoad(true)
            axios.post('/account-confirm-email/', user)
                .then(response => {
                    if (response.status === 200) {
                        setValid(true)
                        setLoad(true)

                        localStorage.setItem("Email", 1)
                        setTimeout(() => {
                            setRedirect(true)
                        }, 5000)
                    } else {
                        setValid(false)
                        setLoad(false)
                    }
                }).catch(err => {
                    setValid(false)
                    setLoad(false)
                })
        }
    }, [token]);

    if (valid === true && redirect) {
        return <Redirect to="/login" />;
    }
    return (
        <>
            <section>
            <div className={innerClasses}>
            <div className="container">
                <hr/>
                <br/>
    <div className="contx head-cont center-content-mobile center-content reveal-from-left">
    <div className="cont-page">
                                        {valid === true && (
                                            <>
                                            <Alert style={{textAlign:"left"}}
                                            message="Verification Done"
                                            description="Redirecting to Login Page....."
                                            type="success"
                                            showIcon
                                          />
                                          <br/>
                                          <br/>
                                          <img className="custom-img" src={require('../../assets/images/emailsuccess.png')} alt="Email Sent" />
                                                </>
                                               
                                        )}
                                        {valid === false && (
                                            <>
                                            
                                            <Alert style={{textAlign:"left"}}
      message="Verification Failed"
      description="Email may be already verified or the link is broken."
      type="error"
      showIcon
    />
<img className="custom-img" src={require('../../assets/images/emailfailed.png')} alt="Email Sent" />
                                          
                                                <hr /><br />
                                                <Button   type="primary" size="large" to="/login" tag={Link}><span style={{ color: "white" }}>Login</span></Button >
                                            </>
                                        )}

                                        <br />
                                        {loading === true ?
                                            <Space>
                                                <Spin size="large"/>
                                            </Space>
                                            :
                                            null
                                        }
</div>
                                    </div>
                                </div>
                            </div>
            </section>
        </>
    );
}

export default VerifyPage;
