import React from 'react';
import './styles.css';

class PushToggle extends React.Component {
   render() {
       return <div className="push">
           <img className="push__image" src="/images/push-off.png" alt="Push Notification"/>
       </div>
   }
}

export { PushToggle }