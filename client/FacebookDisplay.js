import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class FacebookDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadError: false
    };
  }

  componentDidMount() {
    try {
      // Load Facebook SDK
      window.fbAsyncInit = function() {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: 'v18.0'
          });
          window.FB.XFBML.parse();
        }
      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); 
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.onerror = () => this.setState({ loadError: true });
        fjs.parentNode.insertBefore(js, fjs);
      }.bind(this))(document, 'script', 'facebook-jssdk');
      
      // Set timeout for fallback
      setTimeout(() => {
        if (!window.FB) {
          this.setState({ loadError: true });
        }
      }, 5000);
    } catch (error) {
      console.error('Facebook SDK load error:', error);
      this.setState({ loadError: true });
    }
  }

  render() {
    const { loadError } = this.state;
    
    return (
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>SiriusXM Doctor Radio Updates</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            The Vascular Surgery Show with Dr. Todd Berland
          </Card.Subtitle>
          
          {loadError ? (
            // Fallback content when Facebook doesn't load
            <div className="text-center py-4">
              <p>Follow SiriusXM Doctor Radio for updates about The Vascular Surgery Show</p>
              <a 
                href="https://www.facebook.com/SiriusXMDoctorRadio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#1877f2', borderColor: '#1877f2' }}
              >
                Visit Facebook Page
              </a>
              <div className="mt-3">
                <small className="text-muted">
                  The Vascular Surgery Show airs bi-monthly on SiriusXM Channel 110
                  <br />
                  Fridays 6am-8am ET | Re-airs 4pm-6pm ET
                </small>
              </div>
            </div>
          ) : (
            <div>
              {/* Facebook Page Plugin - Shows Sirius XM Doctor Radio timeline */}
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/SiriusXMDoctorRadio" 
                data-tabs="timeline" 
                data-width="" 
                data-height="500" 
                data-small-header="true" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="false">
                <blockquote cite="https://www.facebook.com/SiriusXMDoctorRadio" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/SiriusXMDoctorRadio">Loading Facebook feed...</a>
                </blockquote>
              </div>
              
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Look for posts about "The Vascular Surgery Show" and Dr. Todd Berland
                </small>
              </div>
            </div>
          )}

          {/* Option 2: Single Post Embed - Replace POST_URL with actual post URL
          <div className="fb-post" 
               data-href="https://www.facebook.com/permalink.php?story_fbid=POST_ID&id=PAGE_ID" 
               data-width="500"
               data-show-text="true">
            <blockquote cite="POST_URL" className="fb-xfbml-parse-ignore">
              Loading Facebook post...
            </blockquote>
          </div>
          */}
        </Card.Body>
      </Card>
    );
  }
}

export default FacebookDisplay;