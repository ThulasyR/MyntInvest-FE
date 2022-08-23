import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import {Card} from "@material-ui/core";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Learns = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        &nbsp;
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8">
                  Learn
                    </h2>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    Understand How MyntInvest'S Different Processes Work To Complete <span style={{color:"#23b347"}}>A Successful Deal</span>
                  </p>
                </div> &nbsp;
                <div className="row">
                <Card style={{backgroundColor:"whitesmoke",width:450,height:180,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>How it works</strong>
                <p style={{fontSize:11,color:"grey"}}>Understand how MyntInvest's different Processes work to Complete a successful deal</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/How_It_Works">
                VIEW
                </Button>
                </div> 
                </div>
                </Card>&nbsp;&nbsp;&nbsp;&nbsp;


                <Card style={{backgroundColor:"whitesmoke",width:450,height:180,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Blogs</strong>
                <p style={{fontSize:12,color:"grey"}}>Stay up to date with what's brewing in the Startup ecosystems</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Blog">
                VIEW
                </Button>
                </div> 
                </div>
                </Card>
                 </div>

                



          

          </div>
     </div>
    </section>
  );
}

Learns.propTypes = propTypes;
Learns.defaultProps = defaultProps;

export default Learns;